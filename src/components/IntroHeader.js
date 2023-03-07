import Image from "next/image";
import profile from "../../public/profile.png";

export default function IntroHeader() {
  return (
    <header className="px-6 py-14">
      <div className="max-w-4xl mx-auto flex gap-14 items-center">
        <div>
          <h1 className="text-3xl font-bold mb-6">
            Hi, I am Ricardo!
            <br />
            Web Developer 🧑🏻‍💻
          </h1>
          <p className="text-lg mb-6">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
          <a
            href="#"
            className="bg-red-400 text-white px-6 py-3 text-lg rounded"
          >
            Check my work
          </a>
        </div>
        <span className=" m-5 inline-block before:w-full before:aspect-square before:-left-1.5 before:block before:absolute before:bg-red-400 relative z-0 before:rounded-full">
          <Image
            src={profile}
            width="240"
            height="240"
            className="shadow-md shadow-red-400 z-10 relative rounded-full"
            alt="Picture of the author"
          />
        </span>
      </div>
    </header>
  );
}
