import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { reddit } from "./types/reddit";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class RedditService {
  private attempt = 0;
  private maxAttempts = 10;

  private imageBuffer: string[] = [];
  private maxImages = 20;

  private currentIndex = 0;

  private subredditName: string;

  private lastIndex?: string;

  public imageSubject$: Subject<string> = new Subject();

  constructor(private http: HttpClient) {}

  public newSub() {
    this.currentIndex = 0;
    this.imageBuffer = [];
    this.lastIndex = undefined;
    this.subredditName = "random";
    this.getImagePosts().then(success => success && this.nextImage());
  }

  public checkSub(subGuess: string) {
    return this.subredditName.toUpperCase() === subGuess.toUpperCase();
  }

  public nextImage() {
    this.currentIndex += 1;

    if (this.currentIndex >= this.maxImages) {
      this.currentIndex = 0;
    }

    this.imageSubject$.next(this.imageBuffer[this.currentIndex]);
  }

  private async getImagePosts() {
    this.attempt = 0;

    while (
      this.imageBuffer.length < this.maxImages &&
      this.attempt < this.maxAttempts
    ) {
      let apiUrl = `https://reddit.com/r/${this.subredditName}/top.json?t=all`;

      if (this.lastIndex !== undefined) {
        apiUrl += `&after=${this.lastIndex}`;
      }

      const redditRes = await this.http
        .jsonp<reddit.Top>(apiUrl, `jsonp`)
        .toPromise();

      this.lastIndex = redditRes.data.after;
      this.subredditName = redditRes.data.children[0].data.subreddit;

      redditRes.data.children
        .filter(
          post => post.data.url.includes("png") || post.data.url.includes("jpg")
        )
        .forEach(imgPost => this.imageBuffer.push(imgPost.data.url));

      this.attempt += 1;
    }

    if (
      this.imageBuffer.length < this.maxImages &&
      this.attempt >= this.maxAttempts
    ) {
      this.newSub();
      return false;
    } else {
      return true;
    }
  }
}
