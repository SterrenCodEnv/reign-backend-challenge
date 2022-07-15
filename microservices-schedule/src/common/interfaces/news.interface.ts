export interface IHit {
  created_at: Date;
  title: null | string;
  url: null | string;
  author: string;
  points: number | null;
  story_text: null;
  comment_text: null | string;
  num_comments: number | null;
  story_id: number | null;
  story_title: null | string;
  story_url: null | string;
  parent_id: number | null;
  created_at_i: number;
  _tags: string[];
  objectID: string;
  _highlightResult: HighlightResult;
}

export interface HighlightResult {
  author: Match;
  comment_text?: Match;
  story_title?: Match;
  story_url?: Match;
  title?: Match;
  url?: Match;
}

export interface Match {
  value: string;
  matchLevel: MatchLevel;
  matchedWords: Query[];
  fullyHighlighted?: boolean;
}

export enum MatchLevel {
  Full = 'full',
  None = 'none',
}

export enum Query {
  Nodejs = 'nodejs',
}
