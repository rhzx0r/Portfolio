import SectionHeader from "./SectionHeader";
import Work from "./Work";

export default function FeaturedWorks({ work }) {
  return (
    <section className="px-6">
      <div className="max-w-4xl mx-auto py-12">
        <SectionHeader title="Proyectos" href="#" />
        <div className="flex flex-col gap-2">
          {work.map((workItem) => (
            <Work key={workItem.title} item={workItem} />
          ))}
        </div>
      </div>
    </section>
  );
}
