import Image from "next/image";
import Link from "next/link";
import profile from "../../public/profile2.jpg";
import Typical from "react-typical";

export default function IntroHeader() {
  return (
    <header className="px-6 py-14">
      <div className="max-w-4xl mx-auto flex gap-14 items-center flex-col-reverse md:flex-row">
        <div className="max-w-xl">
          <h1 className="text-3xl font-bold mb-1 text-center md:text-left">
            Hola, soy Ricardo!
          </h1>
          <a className="text-2xl text-orange-500 font-bold text-center md:text-left">
          {" "} <Typical
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
          <Link
            href="/works"
            className="bg-red-400 text-white px-6 py-3 text-lg rounded dark:bg-blue-600"
          >
            Mis proyectos
          </Link>
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
