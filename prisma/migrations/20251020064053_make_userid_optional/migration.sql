-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Disc" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "artist" TEXT NOT NULL,
    "price" REAL NOT NULL,
    "stock" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" INTEGER,
    CONSTRAINT "Disc_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Disc" ("artist", "createdAt", "id", "price", "stock", "title", "userId") SELECT "artist", "createdAt", "id", "price", "stock", "title", "userId" FROM "Disc";
DROP TABLE "Disc";
ALTER TABLE "new_Disc" RENAME TO "Disc";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
