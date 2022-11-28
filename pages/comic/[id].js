import Head from "next/head";
import Image from "next/image";
import { readFile, readdir, stat } from "fs/promises";
import { Link } from "@nextui-org/react";
import { basename } from "path";
import { Layout } from "components/Layout.js";

export default function Comic({
  img,
  alt,
  title,
  width,
  height,
  hasPrev,
  hasNext,
  prevId,
  nextId,
}) {
  return (
    <>
      <Head>
        <title>xkcd - Comics for developers</title>
        <meta name="description" content="Comics for developers" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <section className="max-w-lg m-auto ">
          <h1 className="font-bold text-center m-4 text-xl">{title}</h1>
          <div className="max-w-xs m-auto mb-4 ">
            <Image
              className="m-auto"
              width={width}
              height={height}
              src={img}
              alt={alt}
            />
          </div>
          <p>{alt}</p>
          <div className="flex justify-between mt-4 font-bold">
            {hasPrev && (
              <Link className="text-gray-600" href={`/comic/${prevId}`}>
                ◀ Previous
              </Link>
            )}
            {hasNext && (
              <Link className="text-gray-600" href={`/comic/${nextId}`}>
                Next ▶
              </Link>
            )}
          </div>
        </section>
      </Layout>
    </>
  );
}

//! Es necesario el getStaticPaths cuando tenemos rutas dinamicas

export async function getStaticPaths() {
  const files = await readdir("./comics");

  const paths = files.map((file) => {
    const id = basename(file, ".json");
    return { params: { id } };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  //? Asignamos los datos a la constante
  const { id } = params;
  const content = await readFile(`./comics/${id}.json`, "utf8");
  const comic = JSON.parse(content);

  const idNumber = +id;
  const prevId = idNumber - 1;
  const nextId = idNumber + 1;

  //? Con esto chequeamos si hay comic previo y posterior
  const [prevResult, nextResult] = await Promise.allSettled([
    stat(`./comics/${prevId}.json`),
    stat(`./comics/${nextId}.json`),
  ]);

  const hasPrev = prevResult.status === "fulfilled";
  const hasNext = nextResult.status === "fulfilled";

  return {
    props: {
      ...comic,
      hasPrev,
      hasNext,
      prevId,
      nextId,
    },
  };
}
