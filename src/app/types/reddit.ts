export declare module reddit {
  export interface LinkFlairRichtext {
    e: string;
    t: string;
  }

  export interface MediaEmbed {
    content: string;
    width?: number;
    scrolling?: boolean;
    height?: number;
  }

  export interface Oembed {
    provider_url: string;
    url: string;
    html: string;
    author_name: string;
    height: number;
    width: number;
    version: string;
    author_url: string;
    provider_name: string;
    cache_age: any;
    type: string;
  }

  export interface RedditVideo {
    fallback_url: string;
    height: number;
    width: number;
    scrubber_media_url: string;
    dash_url: string;
    duration: number;
    hls_url: string;
    is_gif: boolean;
    transcoding_status: string;
  }

  export interface SecureMedia {
    oembed: Oembed;
    type: string;
    reddit_video: RedditVideo;
  }

  export interface SecureMediaEmbed {
    content: string;
    width?: number;
    scrolling?: boolean;
    media_domain_url: string;
    height?: number;
  }

  export interface AuthorFlairRichtext {
    a: string;
    e: string;
    u: string;
    t: string;
  }

  export interface Gildings {
    gid_1?: number;
  }

  export interface ResizedIcon {
    url: string;
    width: number;
    height: number;
  }

  export interface AllAwarding {
    giver_coin_reward?: any;
    subreddit_id?: any;
    is_new: boolean;
    days_of_drip_extension: number;
    coin_price: number;
    id: string;
    penny_donate?: any;
    coin_reward: number;
    icon_url: string;
    days_of_premium: number;
    icon_height: number;
    resized_icons: ResizedIcon[];
    icon_width: number;
    start_date?: any;
    is_enabled: boolean;
    description: string;
    end_date?: any;
    subreddit_coin_reward: number;
    count: number;
    name: string;
    icon_format?: any;
    award_sub_type: string;
    penny_price?: any;
    award_type: string;
  }

  export interface Oembed2 {
    provider_url: string;
    url: string;
    html: string;
    author_name: string;
    height: number;
    width: number;
    version: string;
    author_url: string;
    provider_name: string;
    cache_age: any;
    type: string;
  }

  export interface RedditVideo2 {
    fallback_url: string;
    height: number;
    width: number;
    scrubber_media_url: string;
    dash_url: string;
    duration: number;
    hls_url: string;
    is_gif: boolean;
    transcoding_status: string;
  }

  export interface Media {
    oembed: Oembed2;
    type: string;
    reddit_video: RedditVideo2;
  }

  export interface Data2 {
    approved_at_utc?: any;
    subreddit: string;
    selftext: string;
    author_fullname: string;
    saved: boolean;
    mod_reason_title?: any;
    gilded: number;
    clicked: boolean;
    title: string;
    link_flair_richtext: LinkFlairRichtext[];
    subreddit_name_prefixed: string;
    hidden: boolean;
    pwls: number;
    link_flair_css_class: string;
    downs: number;
    hide_score: boolean;
    name: string;
    quarantine: boolean;
    link_flair_text_color: string;
    author_flair_background_color: string;
    subreddit_type: string;
    ups: number;
    total_awards_received: number;
    media_embed: MediaEmbed;
    author_flair_template_id: string;
    is_original_content: boolean;
    user_reports: any[];
    secure_media: SecureMedia;
    is_reddit_media_domain: boolean;
    is_meta: boolean;
    category?: any;
    secure_media_embed: SecureMediaEmbed;
    link_flair_text: string;
    can_mod_post: boolean;
    score: number;
    approved_by?: any;
    author_premium: boolean;
    thumbnail: string;
    edited: any;
    author_flair_css_class: string;
    author_flair_richtext: AuthorFlairRichtext[];
    gildings: Gildings;
    content_categories?: any;
    is_self: boolean;
    mod_note?: any;
    created: number;
    link_flair_type: string;
    wls: number;
    removed_by_category?: any;
    banned_by?: any;
    author_flair_type: string;
    domain: string;
    allow_live_comments: boolean;
    selftext_html: string;
    likes?: any;
    suggested_sort?: any;
    banned_at_utc?: any;
    view_count?: any;
    archived: boolean;
    no_follow: boolean;
    is_crosspostable: boolean;
    pinned: boolean;
    over_18: boolean;
    all_awardings: AllAwarding[];
    awarders: any[];
    media_only: boolean;
    link_flair_template_id: string;
    can_gild: boolean;
    spoiler: boolean;
    locked: boolean;
    author_flair_text: string;
    visited: boolean;
    removed_by?: any;
    num_reports?: any;
    distinguished?: any;
    subreddit_id: string;
    mod_reason_by?: any;
    removal_reason?: any;
    link_flair_background_color: string;
    id: string;
    is_robot_indexable: boolean;
    report_reasons?: any;
    author: string;
    discussion_type?: any;
    num_comments: number;
    send_replies: boolean;
    whitelist_status: string;
    contest_mode: boolean;
    mod_reports: any[];
    author_patreon_flair: boolean;
    author_flair_text_color: string;
    permalink: string;
    parent_whitelist_status: string;
    stickied: boolean;
    url: string;
    subreddit_subscribers: number;
    created_utc: number;
    num_crossposts: number;
    media: Media;
    is_video: boolean;
  }

  export interface Child {
    kind: string;
    data: Data2;
  }

  export interface Data {
    modhash: string;
    dist: number;
    children: Child[];
    after: string;
    before?: any;
  }

  export interface Top {
    kind: string;
    data: Data;
  }
}
