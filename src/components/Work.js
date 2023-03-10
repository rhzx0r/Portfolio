import Image from "next/image";
// import pag from '../../public/workimages/pag1.png'

export default function Work({ item }) {
  return (
    <article className="flex items-center border-b-2 py-6 flex-col max-h-full md:flex-row md:max-h-72 ">
      <Image src={item.image} alt="" layout="responsive" width={500} height={335} className="w-1/3 mr-6 rounded-lg scale-75 md:max-h-72"/>
      <div>
        <h3 className="text-2xl mb-2 font-medium">{item.title}</h3>
        <span className="text-gray-600 mb-4 block">
          <date className="bg-blue-800 text-white px-5 py-1.5 mr-4 rounded-xl">
            {item.year}
          </date>
          {item.category}
        </span>
        <p>{item.description}</p>
      </div>
    </article>
  );
}
