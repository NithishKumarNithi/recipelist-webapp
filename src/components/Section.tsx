export default function Section({
  title,
  recipes,
}: {
  title: string;
  recipes: string;
}) {
  return (
    <section>
      <h1 className="text-2xl font-bold mb-2">{title}</h1>
      <div>{recipes}</div>
    </section>
  );
}
