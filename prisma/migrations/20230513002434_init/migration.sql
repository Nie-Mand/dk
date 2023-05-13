-- CreateTable
CREATE TABLE "Thing" (
    "id" SERIAL NOT NULL,
    "title" TEXT,
    "content" TEXT,
    "when" TIMESTAMP(3),
    "at" TEXT,
    "priority" INTEGER,

    CONSTRAINT "Thing_pkey" PRIMARY KEY ("id")
);
