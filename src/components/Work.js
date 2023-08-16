import Image from "next/image";
import js from "../../public/logos/javascript.svg";
import react from "../../public/logos/reactjs.svg";
import bootstrap from "../../public/logos/bootstrap.svg";
import api from "../../public/logos/api.svg";
import openai from "../../public/logos/openai.svg";
import tailwind from "../../public/logos/tailwind.svg";
import nextjs from "../../public/logos/nextjs2.svg";
import mongodb from "../../public/logos/mongodb.svg";
import typescript from "../../public/logos/typescript.svg";
import prisma from "../../public/logos/prisma.svg";
import netlify from "../../public/logos/netlify.svg";
import azure from "../../public/logos/azure.svg";
import { MdRocketLaunch } from "react-icons/md";

export default function Work({ item }) {
  const logos = {
    default: "",
    js: js,
    typescript: typescript,
    react: react,
    bootstrap: bootstrap,
    api: api,
    openai: openai,
    tailwind: tailwind,
    nextjs: nextjs,
    mongodb: mongodb,
    prisma: prisma,
    netlify: netlify,
    azure: azure,
  };

  function getLogo(logo) {
    return logos[logo.toLowerCase()] || logos.default;
  }

  return (
    <article className="flex items-center border-b-[1px] border-slate-300 last:border-none py-2 flex-col max-h-full md:flex-row md:max-h-72 ">
      <Image
        src={item.image}
        alt=""
        width={500}
        height={335}
        className="w-1/3 rounded-lg my-3 md:my-0 md:scale-[0.85] min-w-full md:min-w-fit  md:max-h-72 shadow-md"
      />
      <div>
        <h3 className="text-2xl mb-2 font-medium">{item.title}</h3>
        <div className="text-gray-600 dark:text-gray-400 mb-4 flex justify-between items-center">
          <span>📅 {item.year}</span>
          <a
            className="bg-red-500 hover:bg-red-400 dark:bg-blue-700 dark:hover:bg-blue-600 text-white px-4 py-2 mr-4 rounded-xl"
            href={item.link}
            target="_blank"
          >
            <span className="flex gap-2 items-center">
              {item.category} <MdRocketLaunch size={20} />
            </span>
          </a>
        </div>
        <p>{item.description}</p>
        <div className="flex mt-2 justify-end">
          <span className="mr-1">Stack: </span>
          <a className="flex flex-row flex-wrap pr-3 items-center">
            {item.stack &&
              item.stack.map((logo) => (
                <span className="mr-1" key={logo}>
                  <Image
                    src={getLogo(logo)}
                    width={20}
                    alt={logo}
                    height={20}
                    className="rounded-md"
                  />
                </span>
              ))}
          </a>
        </div>
      </div>
    </article>
  );
}
