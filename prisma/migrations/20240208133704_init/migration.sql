-- CreateTable
CREATE TABLE "ressource" (
    "id" SERIAL NOT NULL,
    "tittle" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "publication_date" TIMESTAMP(3) NOT NULL,
    "picture" TEXT NOT NULL,

    CONSTRAINT "ressource_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "category" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "link" (
    "id" SERIAL NOT NULL,
    "plateform" TEXT NOT NULL,
    "link" TEXT NOT NULL,

    CONSTRAINT "link_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_categoryToressource" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_linkToressource" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_categoryToressource_AB_unique" ON "_categoryToressource"("A", "B");

-- CreateIndex
CREATE INDEX "_categoryToressource_B_index" ON "_categoryToressource"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_linkToressource_AB_unique" ON "_linkToressource"("A", "B");

-- CreateIndex
CREATE INDEX "_linkToressource_B_index" ON "_linkToressource"("B");

-- AddForeignKey
ALTER TABLE "_categoryToressource" ADD CONSTRAINT "_categoryToressource_A_fkey" FOREIGN KEY ("A") REFERENCES "category"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_categoryToressource" ADD CONSTRAINT "_categoryToressource_B_fkey" FOREIGN KEY ("B") REFERENCES "ressource"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_linkToressource" ADD CONSTRAINT "_linkToressource_A_fkey" FOREIGN KEY ("A") REFERENCES "link"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_linkToressource" ADD CONSTRAINT "_linkToressource_B_fkey" FOREIGN KEY ("B") REFERENCES "ressource"("id") ON DELETE CASCADE ON UPDATE CASCADE;
