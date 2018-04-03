export const FILL_LAYOUT = {left: 0, top: 0, right: 0, bottom: 0};

export const AUTO_FETCH_COUNT = 10;

export const SUBREDDIT = 'petpictures';

export enum ViewMode { Gallery = 'gallery', List = 'list' }

export const isList = (viewMode: string) => viewMode === ViewMode.List;

export interface RedditPost {
  kind: string;
  data: RedditPostData;
}

export interface RedditPostData {
  id: string;
  url: string;
  thumbnail: string;
  title: string;
  num_comments: number;
  author: string;
}

export interface RedditJsonResponse {
  data: {
    children: RedditPost[]
  };
}
