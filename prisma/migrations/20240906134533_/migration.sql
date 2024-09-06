/*
  Warnings:

  - Added the required column `tutorial` to the `Post` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Post" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "tutorial" BOOLEAN NOT NULL,
    "postedOn" DATETIME NOT NULL,
    "published" BOOLEAN NOT NULL,
    "claps" INTEGER NOT NULL DEFAULT 0,
    "likes" INTEGER NOT NULL DEFAULT 0,
    "dislikes" INTEGER NOT NULL DEFAULT 0,
    "authorId" INTEGER NOT NULL,
    CONSTRAINT "Post_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Post" ("authorId", "claps", "content", "dislikes", "id", "likes", "postedOn", "published", "slug", "title") SELECT "authorId", "claps", "content", "dislikes", "id", "likes", "postedOn", "published", "slug", "title" FROM "Post";
DROP TABLE "Post";
ALTER TABLE "new_Post" RENAME TO "Post";
CREATE UNIQUE INDEX "Post_slug_key" ON "Post"("slug");
CREATE TABLE "new_Tag" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "postId" INTEGER,
    CONSTRAINT "Tag_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Tag" ("id", "name") SELECT "id", "name" FROM "Tag";
DROP TABLE "Tag";
ALTER TABLE "new_Tag" RENAME TO "Tag";
CREATE UNIQUE INDEX "Tag_name_key" ON "Tag"("name");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
