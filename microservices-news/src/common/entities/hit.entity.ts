import { Hit as HitEntity, Prisma } from '@prisma/client';

export class Hit implements HitEntity {
  objectID: string;
  created_at: Date;
  deleted_at: Date | null;
  title: string | null;
  url: string | null;
  author: string;
  points: number | null;
  story_text: string | null;
  comment_text: string | null;
  num_comments: number | null;
  story_id: number | null;
  story_title: string | null;
  story_url: string | null;
  parent_id: number | null;
  created_at_i: number | null;
  tags: string[];
  highlightResult: Prisma.JsonValue;
}
