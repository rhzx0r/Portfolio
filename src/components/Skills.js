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
  SiC,
  SiExpress,
} from "react-icons/si";

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
              <li className="md:mx-4 mx-2 my-4 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover:duration-200">
                <BiLogoJavascript size={60} />
              </li>
              <li className="md:mx-4 mx-2 my-4 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover:duration-200">
                <BiLogoTypescript size={60} />
              </li>
              <li className="md:mx-4 mx-2 my-4 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover:duration-200">
                <BiLogoPython size={60} />
              </li>
              <li className="md:mx-4 mx-2 my-4 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover:duration-200">
                <SiC size={50} />
              </li>
              <li className="md:mx-4 mx-2 my-4 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover:duration-200">
                <BiLogoJava size={60} />
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl dark:text-white">Librerías y Frameworks</h2>
            <ul className="flex flex-row flex-wrap md:place-content-start place-content-center my-2 items-center">
              <li className="md:mx-4 mx-2 my-4 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover:duration-200">
                <BiLogoNodejs size={60} />
              </li>
              <li className="md:mx-4 mx-2 my-4 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover:duration-200">
                <SiExpress size={60} />
              </li>
              <li className="md:mx-4 mx-2 my-4 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover:duration-200">
                <SiSocketdotio size={50} />
              </li>
              <li className="md:mx-4 mx-2 my-4 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover:duration-200">
                <BiLogoReact size={60} />
              </li>
              <li className="md:mx-4 mx-2 my-4 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover:duration-200">
                <BiLogoGraphql size={60} />
              </li>
              <li className="md:mx-4 mx-2 my-4 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover:duration-200">
                <SiNextdotjs size={50} />
              </li>
              <li className="md:mx-4 mx-2 my-4 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover:duration-200">
                <BiLogoBootstrap size={60} />
              </li>
              <li className="md:mx-4 mx-2 my-4 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover:duration-200">
                <BiLogoTailwindCss size={60} />
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl dark:text-white">Bases de datos</h2>
            <ul className="flex flex-row flex-wrap md:place-content-start place-content-center my-2 items-center">
              <li className="md:mx-4 mx-2 my-4 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover:duration-200">
                <GrMysql size={55} />
              </li>
              <li className="md:mx-4 mx-2 my-4 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover:duration-200">
                <BiLogoMongodb size={60} />
              </li>
              <li className="md:mx-4 mx-2 my-4 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover:duration-200">
                <SiSqlite size={55} />
              </li>
              <li className="md:mx-4 mx-2 my-4 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover:duration-200">
                <SiPostgresql size={55} />
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl dark:text-white">Otros conocimientos</h2>
            <ul className="flex flex-row flex-wrap md:place-content-start place-content-center my-2 items-center">
              <li className="md:mx-4 mx-2 my-4 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover:duration-200">
                <BiLogoHtml5 size={60} />
              </li>
              <li className="md:mx-4 mx-2 my-4 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover:duration-200">
                <BiLogoCss3 size={60} />
              </li>
              <li className="md:mx-4 mx-2 my-4 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover:duration-200">
                <FaLinux size={55} />
              </li>
              <li className="md:mx-4 mx-2 my-4 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover:duration-200">
                <BiLogoGithub size={60} />
              </li>
              <li className="md:mx-4 mx-2 my-4 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover:duration-200">
                <VscAzure size={50} />
              </li>

              <li className="md:mx-4 mx-2 my-4 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover:duration-200">
                <SiPostman size={50} />
              </li>
              <li className="md:mx-4 mx-2 my-4 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover:duration-200">
                <SiPrisma size={50} />
              </li>
              <li className="md:mx-4 mx-2 my-4 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover:duration-200">
                <SiOpenai size={50} />
              </li>
              <li className="md:mx-4 mx-2 my-4 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover:duration-200">
                <SiDocker size={55} />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
