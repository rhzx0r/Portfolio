import Work from "../components/Work";
import Head from "next/head";
import { getAllWork } from "../../lib/api";

export async function getStaticProps() {
  const work = getAllWork();

  return {
    props: {
      work,
    },
  };
}

export default function WorkPage({ work }) {
  return (
    <div>
      <Head>
        <title>Ricardo Proyectos</title>
        <meta name="description" content="Proyectos de Ricardo | RHzx0r" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="p-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-6 p-4">🛠️ Proyectos</h1>
          {work.map((workItem) => (
            <Work key={workItem.title} item={workItem} />
          ))}
        </div>
      </section>
    </div>
  );
}
