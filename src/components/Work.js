import Image from "next/image";

export default function Work({ item }) {
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
      </div>
    </article>
  );
}
