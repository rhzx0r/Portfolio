import Image from "next/image";
import js from '../../public/logos/javascript.svg';
import react from '../../public/logos/reactjs.svg'
import bootstrap from '../../public/logos/bootstrap.svg'
import api from '../../public/logos/api.svg'
import openai from '../../public/logos/openai.svg'

export default function Work({ item }) {

  const logos = {
    js: js,
    react: react,
    bootstrap: bootstrap,
    api: api,
    openai: openai
  };

  
  function getLogo(logo) {
    return logos[logo.toLowerCase()] || null;
  }

  return (
    <article className="flex items-center border-b-2 py-2 flex-col max-h-full md:flex-row md:max-h-72 ">
      <Image
        src={item.image}
        alt=""
        width={500}
        height={335}
        className="w-1/3 rounded-lg my-3 md:my-0 md:scale-[0.85] min-w-full md:min-w-fit  md:max-h-72"
      />
      <div>
        <h3 className="text-2xl mb-2 font-medium">{item.title}</h3>
        <div className="text-gray-600 dark:text-gray-400 mb-4 flex justify-between">
          <span>📅 {item.year}</span>
          <a
            className="bg-red-400 dark:bg-blue-700 text-white px-5 py-1.5 mr-4 rounded-xl justify-self-end"
            href={item.link}
            target="_blank"
          >
            {item.category}
          </a>
        </div>
        <p>{item.description}</p>
        <div className="flex mt-1 justify-end"> 
        <div className="mr-1">Stack: </div> 
        <a className="flex flex-row flex-wrap">
          { item.stack &&
            item.stack.map((logo) => (
              <span
                className="mr-1"
                key={logo}
              >
                {" "}<Image src={getLogo(logo)} width={20} alt={logo} height={20} className="rounded-md" />
              </span>
            ))
          }
        </a>
        </div>
      </div>
    </article>
  );
}
