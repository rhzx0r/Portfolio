export default function SectionHeader({ title, href }) {
  return (
    <div className="flex justify-between items-center mb-8">
      <h className="text-2xl font-bold">{title}</h>
      <a className="text-red-400 font-bold" href={href}>
        View all
      </a>
    </div>
  );
}
