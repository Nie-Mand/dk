import { PrismaClient, Thing } from "@prisma/client";

const prisma = new PrismaClient();

export async function getThings() {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  console.log(today);

  const stuffs = await prisma.thing.findMany({
    where: {
      // when: {
      //   gte: today,
      // },
    },
    orderBy: {
      when: "asc",
    },
  });

  const finalResult = {} as { [when: string]: Thing[] };

  for (const thing of stuffs) {
    const when = thing.when!.toISOString().split("T")[0];
    if (!finalResult[when]) {
      finalResult[when] = [thing];
    } else {
      finalResult[when] = [...finalResult[when], thing];
    }
  }

  return finalResult;
}
