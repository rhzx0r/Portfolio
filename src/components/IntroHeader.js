import Image from "next/image";
import Link from "next/link";
import profile from "../../public/profile.png";

export default function IntroHeader() {

  return (
    <header className="px-6 py-14">
      <div className="max-w-4xl mx-auto flex gap-14 items-center flex-col-reverse md:flex-row">
        <div className="max-w-xl">
          <h1 className="text-3xl font-bold mb-6">
            Hola, soy Ricardo!
            <br/>
            Desarrollador web 🧑🏻‍💻
          </h1>
          <p className="text-lg mb-6">
          ¡Hola y bienvenido(a) a mi portafolio! Soy un estudiante de ingeniería de software apasionado por la programación y el desarrollo de software. Me encanta crear soluciones innovadoras y eficientes para resolver problemas complejos y mejorar la vida de las personas. Aquí encontrarás algunos de mis proyectos y trabajos realizados, espero que te gusten y puedan darte una idea de mi experiencia y habilidades como programador. ¡Gracias por visitar mi sitio!
          </p>
          <Link
            href="/work"
            className="bg-red-400 text-white px-6 py-3 text-lg rounded"
          >
            Check my work
          </Link>
        </div>
        <span className=" m-5 inline-block before:w-full before:aspect-square before:-left-1.5 before:block before:absolute before:bg-red-400 relative z-0 before:rounded-full">
          <Image
            src={profile}
            width="280"
            height="280"
            className="shadow-md shadow-red-400 z-10 relative rounded-full"
            alt="Picture of the author"
          />
        </span>
      </div>
    </header>
  );
}
