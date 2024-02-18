/*
  Warnings:

  - You are about to drop the `_linkToressource` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `link` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_linkToressource" DROP CONSTRAINT "_linkToressource_A_fkey";

-- DropForeignKey
ALTER TABLE "_linkToressource" DROP CONSTRAINT "_linkToressource_B_fkey";

-- DropTable
DROP TABLE "_linkToressource";

-- DropTable
DROP TABLE "link";
