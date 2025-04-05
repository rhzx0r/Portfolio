import SectionHeader from "./SectionHeader";
import {
  BiLogoJavascript,
  BiLogoTypescript,
  BiLogoPython,
  BiLogoJava,
  BiLogoNodejs,
  BiLogoGraphql,
  BiLogoHtml5,
  BiLogoCss3,
  BiLogoGithub,
  BiLogoMongodb,
  BiLogoReact,
  BiLogoBootstrap,
  BiLogoTailwindCss,
} from "react-icons/bi";
import { FaRust } from "react-icons/fa";
import { FaLinux } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { VscAzure } from "react-icons/vsc";
import {
  SiPostman,
  SiNextdotjs,
  SiSocketdotio,
  SiDocker,
  SiSqlite,
  SiPostgresql,
  SiPrisma,
  SiOpenai,
  SiExpress,
} from "react-icons/si";
import IconWithPopover from "./IconWithPopover";

export default function Skills() {
  return (
    <section className="bg-blue-100 px-6 mb-2 dark:bg-slate-600">
      <div className="max-w-4xl mx-auto pb-8">
        <SectionHeader title="💻 Mis habilidades técnicas" href="#" />
        <div className="dark:text-slate-200 text-slate-800">
          <div>
            <h2 className="text-xl dark:text-white">
              Lenguajes de Programación
            </h2>
            <ul className="flex flex-row flex-wrap md:place-content-start place-content-center my-2 items-center">
              <li className="md:mx-4 mx-3 my-4 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover:duration-200">
                <IconWithPopover
                  icon={<BiLogoJavascript size={57} />}
                  text="Javascript"
                />
              </li>
              <li className="md:mx-4 mx-3 my-4 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover:duration-200">
                <IconWithPopover
                  icon={<BiLogoTypescript size={57} />}
                  text="Typescript"
                />
              </li>
              <li className="md:mx-4 mx-3 my-4 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover:duration-200">
                <IconWithPopover
                  icon={<BiLogoPython size={57} />}
                  text="Python"
                />
              </li>
              <li className="md:mx-4 mx-3 my-4 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover:duration-200">
                <IconWithPopover icon={<BiLogoJava size={57} />} text="Java" />
                <IconWithPopover text="Java" />
              </li>
              <li className="md:mx-4 mx-3 my-4 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover:duration-200">
                <IconWithPopover
                  icon={<FaRust size={50} />}
                  text="Typescript"
                />
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl dark:text-white">Librerías y Frameworks</h2>
            <ul className="flex flex-row flex-wrap md:place-content-start place-content-center my-2 items-center">
              <li className="md:mx-4 mx-3 my-4 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover:duration-200">
                <IconWithPopover
                  icon={<BiLogoNodejs size={60} />}
                  text="Node.js"
                />
              </li>
              <li className="md:mx-4 mx-3 my-4 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover:duration-200">
                <IconWithPopover
                  icon={<SiExpress size={60} />}
                  text="Express"
                />
              </li>
              <li className="md:mx-4 mx-3 my-4 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover:duration-200">
                <IconWithPopover
                  icon={<SiSocketdotio size={50} />}
                  text="Socket.IO"
                />
              </li>
              <li className="md:mx-4 mx-3 my-4 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover:duration-200">
                <IconWithPopover
                  icon={<BiLogoReact size={60} />}
                  text="React"
                />
              </li>
              <li className="md:mx-4 mx-3 my-4 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover:duration-200">
                <IconWithPopover
                  icon={<BiLogoGraphql size={60} />}
                  text="GraphQL"
                />
              </li>
              <li className="md:mx-4 mx-3 my-4 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover:duration-200">
                <IconWithPopover
                  icon={<SiNextdotjs size={50} />}
                  text="Next.js"
                />
              </li>
              <li className="md:mx-4 mx-3 my-4 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover:duration-200">
                <IconWithPopover
                  icon={<BiLogoBootstrap size={60} />}
                  text="Bootstrap"
                />
              </li>
              <li className="md:mx-4 mx-3 my-4 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover:duration-200">
                <IconWithPopover
                  icon={<BiLogoTailwindCss size={60} />}
                  text="TailwindCSS"
                />
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl dark:text-white">Bases de datos</h2>
            <ul className="flex flex-row flex-wrap md:place-content-start place-content-center my-2 items-center">
              <li className="md:mx-4 mx-3 my-4 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover:duration-200">
                <IconWithPopover icon={<GrMysql size={55} />} text="MySQL" />
              </li>
              <li className="md:mx-4 mx-3 my-4 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover:duration-200">
                <IconWithPopover
                  icon={<BiLogoMongodb size={60} />}
                  text="MongoDB"
                />
              </li>
              <li className="md:mx-4 mx-3 my-4 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover:duration-200">
                <IconWithPopover icon={<SiSqlite size={50} />} text="SQLite" />
              </li>
              <li className="md:mx-4 mx-3 my-4 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover:duration-200">
                <IconWithPopover
                  icon={<SiPostgresql size={50} />}
                  text="PostgreSQL"
                />
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl dark:text-white">Otros conocimientos</h2>
            <ul className="flex flex-row flex-wrap md:place-content-start place-content-center my-2 items-center">
              <li className="md:mx-4 mx-3 my-4 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover:duration-200">
                <IconWithPopover
                  icon={<BiLogoHtml5 size={60} />}
                  text="HTML5"
                />
              </li>
              <li className="md:mx-4 mx-3 my-4 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover:duration-200">
                <IconWithPopover icon={<BiLogoCss3 size={60} />} text="CSS3" />
              </li>
              <li className="md:mx-4 mx-3 my-4 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover:duration-200">
                <IconWithPopover icon={<FaLinux size={55} />} text="Linux" />
              </li>
              <li className="md:mx-4 mx-3 my-4 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover:duration-200">
                <IconWithPopover
                  icon={<BiLogoGithub size={60} />}
                  text="GitHub"
                />
              </li>
              <li className="md:mx-4 mx-3 my-4 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover:duration-200">
                <IconWithPopover icon={<VscAzure size={50} />} text="Azure" />
              </li>
              <li className="md:mx-4 mx-3 my-4 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover:duration-200">
                <IconWithPopover
                  icon={<SiPostman size={50} />}
                  text="Postman"
                />
              </li>
              <li className="md:mx-4 mx-3 my-4 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover:duration-200">
                <IconWithPopover icon={<SiPrisma size={50} />} text="Prisma" />
              </li>
              <li className="md:mx-4 mx-3 my-4 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover:duration-200">
                <IconWithPopover
                  icon={<SiOpenai size={50} />}
                  text="OpenaAI [API]"
                />
              </li>
              <li className="md:mx-4 mx-3 my-4 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover:duration-200">
                <IconWithPopover icon={<SiDocker size={55} />} text="Docker" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
