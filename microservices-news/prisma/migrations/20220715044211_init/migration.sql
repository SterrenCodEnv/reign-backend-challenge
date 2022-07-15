-- CreateTable
CREATE TABLE "hits" (
    "hit_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),
    "title" TEXT,
    "url" TEXT,
    "author" TEXT NOT NULL,
    "points" INTEGER,
    "story_text" TEXT,
    "comment_text" TEXT,
    "num_comments" INTEGER,
    "story_id" INTEGER,
    "story_title" TEXT,
    "story_url" TEXT,
    "parent_id" INTEGER,
    "created_at_i" INTEGER,
    "_tags" TEXT[],
    "_highlightResult" JSONB NOT NULL,

    CONSTRAINT "hits_pkey" PRIMARY KEY ("hit_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "hits_hit_id_key" ON "hits"("hit_id");
