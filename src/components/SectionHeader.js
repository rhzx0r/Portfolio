export default function SectionHeader({ title, href }) {
  return (
    <div className="flex justify-between items-center mb-8">
      <h1 className="text-2xl font-bold">{title}</h1>
    </div>
  );
}
