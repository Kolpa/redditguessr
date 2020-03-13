import { Component, OnInit } from "@angular/core";
import { RedditService } from "../reddit.service";

@Component({
  selector: "app-game-controller",
  templateUrl: "./game-controller.component.html",
  styleUrls: ["./game-controller.component.css"]
})
export class GameControllerComponent implements OnInit {
  loading = true;
  currentImage: string;

  constructor(private reddit: RedditService) {}

  ngOnInit(): void {
    this.reddit.imageSubject$.subscribe(image => {
      this.loading = false;
      this.currentImage = image;
    });
    this.newSub();
  }

  newSub() {
    this.loading = true;
    this.reddit.newSub();
  }

  nextPost() {
    this.reddit.nextImage();
  }

  prevPost() {
    this.reddit.prevImage();
  }

  checkSub(subname: string) {
    if (this.reddit.checkSub(subname)) {
      console.log("this mans a genius");
    } else {
      console.log("what a absolute idiot");
    }
  }
}
