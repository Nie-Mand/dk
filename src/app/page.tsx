import { getThings } from "@/utils/get-things";
import { PRIORITY } from "@/utils/types";
import moment from "moment";

export default async function Home() {
  const things = await getThings();

  console.log("things", things);

  return (
    <div>
      <div className="grid place-content-center py-10">
        <img src="/v.svg" alt="V" className="w-20" />
      </div>
      <div className="mx-8 max-w-none md:max-w-2xl lg:max-w-4xl md:mx-auto">
        {Object.keys(things).map((when) => (
          <div className={when}>
            <h1 className="font-black text-2xl">
              {moment(when).format("dddd DD MMMM YYYY")}
            </h1>
            {things[when].map((thing) => (
              <div className="py-10">
                <div className="pb-2">
                  <h1 className="font-black text-xl">{thing.title}</h1>
                </div>
                <div className="flex space-x-3 items-center">
                  {thing.priority === PRIORITY.HIGH ? (
                    <h2 className="font-bold text-sm text-white bg-red-500 px-2 py-1 rounded">
                      HIGH
                    </h2>
                  ) : null}

                  {thing.priority === PRIORITY.MEDIUM ? (
                    <h2 className="font-bold text-sm text-white bg-yellow-500 px-2 py-1 rounded">
                      MEDIUM
                    </h2>
                  ) : null}

                  {thing.priority === PRIORITY.LOW ? (
                    <h2 className="font-bold text-sm text-white bg-blue-500 px-2 py-1 rounded">
                      LOW
                    </h2>
                  ) : null}

                  <h2 className="font-bold text-sm text-white bg-gray-500 px-2 py-1 rounded">
                    {thing.at}
                  </h2>
                </div>
                <ul className="px-10 py-5">
                  {thing.content?.split("\n").map((item) => (
                    <li className="py-2 list-disc" key={item}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
