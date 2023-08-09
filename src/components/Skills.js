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
import { SiPostman, SiNextdotjs } from "react-icons/si";

export default function Skills() {
  return (
    <section className="bg-blue-100 px-6 mb-2 dark:bg-slate-600">
      <div className="max-w-4xl mx-auto pb-12">
        <SectionHeader title="💻 Mis habilidades técnicas" href="#" />
        <div className="dark:text-slate-200 text-slate-800">
          <ul className="flex flex-row flex-wrap place-content-center">
            <li className="mx-4 my-4 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover:duration-200">
              <BiLogoJavascript size={60} />
            </li>
            <li className="mx-4 my-4 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover:duration-200">
              <BiLogoTypescript size={60} />
            </li>
            <li className="mx-4 my-4 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover: duration-200">
              <BiLogoPython size={60} />
            </li>
            <li className="mx-4 my-4 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover: duration-200">
              <BiLogoJava size={60} />
            </li>
            <li className="mx-4 my-4 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover: duration-200">
              <BiLogoNodejs size={60} />
            </li>
            <li className="mx-4 my-4 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover: duration-200">
              <BiLogoGraphql size={60} />
            </li>
            <li className="mx-4 my-4 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover: duration-200">
              <BiLogoHtml5 size={60} />
            </li>
            <li className="mx-4 my-4 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover: duration-200">
              <BiLogoCss3 size={60} />
            </li>
            <li className="mx-4 my-4 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover: duration-200">
              <BiLogoReact size={60} />
            </li>
            <li className="mx-4 my-4 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover: duration-200">
              <FaLinux size={55} />
            </li>
            <li className="mx-4 my-4 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover: duration-200">
              <BiLogoGithub size={60} />
            </li>
            <li className="mx-4 my-4 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover: duration-200">
              <VscAzure size={50} />
            </li>
            <li className="mx-4 my-4 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover: duration-200">
              <GrMysql size={55} />
            </li>
            <li className="mx-4 my-4 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover: duration-200">
              <BiLogoMongodb size={60} />
            </li>
            <li className="mx-4 my-4 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover: duration-200">
              <SiPostman size={50} />
            </li>
            <li className="mx-4 my-4 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover: duration-200">
              <BiLogoBootstrap size={60} />
            </li>
            <li className="mx-4 my-4 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover: duration-200">
              <BiLogoTailwindCss size={60} />
            </li>
            <li className="mx-4 my-4 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover: duration-200">
              <SiNextdotjs size={50} />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
