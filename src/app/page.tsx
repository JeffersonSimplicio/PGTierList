import fs from "fs/promises";
import path from "path";
import { Suspense } from "react";
import { IPokeTiers } from "@/interfaces";
import { Tier, Loading } from "@/components";

async function getData(): Promise<IPokeTiers> {
  const filePath = path.join(process.cwd(), "public", "pokeTiers.json");
  const jsonString = await fs.readFile(filePath, "utf-8");
  const data: IPokeTiers = JSON.parse(jsonString);
  // await new Promise(resolve => setTimeout(resolve, 2000));
  return data;
}

export default async function Home() {
  const data = await getData();

  return (
    <main>
      <h1>Olá mundo</h1>
      <Suspense fallback={<Loading />}>
        {data &&
          Object.keys(data).map((key, index) => (
            <Tier key={index} name={key} pokeList={data[key]} />
          ))}
      </Suspense>
    </main>
  );
}
