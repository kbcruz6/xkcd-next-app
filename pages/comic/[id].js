import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Layout } from "components/Layout.js";
import { readFile, readdir, stat } from "fs/promises";
import { basename } from "path";

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
          <h1 className="font-bold text-center m-4 text-2xl text-blue-600">
            {title}
          </h1>
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
              <Link href={`/comic/${prevId}`}>
                <button className="btn shadow-[0_5px_0_rgb(37,99,235)] hover:shadow-[0_2px_0px_rgb(37,99,235)] text-black bg-gray-200 ease-out hover:translate-y-1 transition-all rounded pr-2 pl-2">
                  ← Previous
                </button>
              </Link>
            )}

            {hasNext && (
              <Link className="text-gray-600" href={`/comic/${nextId}`}>
                <button className="btn shadow-[0_5px_0_rgb(37,99,235)] hover:shadow-[0_2px_0px_rgb(37,99,235)] text-black bg-gray-200 ease-out hover:translate-y-1 transition-all rounded pr-2 pl-2">
                  Next →
                </button>
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
