import Image from "next/image";
import Link from "next/link";
import profile from "../../public/main-profile.png";
import Typical from "react-typical";
import { BiLogoGithub, BiLogoLinkedinSquare, BiMailSend } from "react-icons/bi";

export default function IntroHeader() {
  return (
    <header className="px-6 py-14">
      <div className="max-w-4xl mx-auto flex gap-14 items-center flex-col-reverse md:flex-row">
        <div className="max-w-xl">
          <h1 className="text-3xl font-bold mb-1 text-center md:text-left">
            Hola, soy Ricardo!
          </h1>
          <a className="text-2xl text-orange-500 font-bold text-center md:text-left">
            {" "}
            <Typical
              loop={Infinity}
              wrapper="b"
              steps={[
                "Desarrollador Web 🌐",
                1000,
                "Entusiasta de Linux 🐧",
                1000,
                "Estudiante de Ingeniería 🚀",
                1000,
              ]}
            />
          </a>
          <p className="text-lg mt-3 mb-6 text-justify md:text-left ">
            ¡Hola y bienvenidos a mi portafolio! Soy un estudiante de ingeniería
            de software apasionado por la programación y el desarrollo de
            software. Me encanta crear soluciones innovadoras y eficientes para
            resolver problemas complejos y mejorar la vida de las personas. Aquí
            encontrarás algunos de mis proyectos y trabajos realizados, espero
            que te gusten y puedan darte una idea de mi experiencia y
            habilidades como programador. ¡Gracias por visitar mi sitio!
          </p>
          <div className="flex">
            <Link
              href="/projects"
              className="bg-red-500 px-6 py-2 text-lg text-white rounded dark:bg-blue-600"
            >
              Mis proyectos
            </Link>
            <ul className="ml-5 grid gap-3 grid-cols-3 flex-wrap place-content-center">
              <li>
                <a
                  href="https://github.com/rhzx0r"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BiLogoGithub size={30} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/ricardo-balam-677399266/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BiLogoLinkedinSquare size={30} />
                </a>
              </li>
              <li>
                <a
                  href="mailto:ricardo95balam@gmail.com?Subject=Contacto del portfolio"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BiMailSend size={30} />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <span className="m-5 inline-block before:w-full before:aspect-square before:-left-1.5 before:block before:absolute before:bg-red-400 dark:before:bg-blue-700 relative z-0 before:rounded-full">
          <Image
            src={profile}
            width="280"
            height="280"
            className="shadow-md dark:shadow-blue-800 shadow-red-400 z-10 relative rounded-full"
            alt="Picture of the author"
          />
        </span>
      </div>
    </header>
  );
}
