import SectionHeader from "./SectionHeader";

export default function SoftSkills() {
  return (
    <section className="bg-blue-100 px-6 dark:bg-slate-600">
      <div className="max-w-4xl mx-auto py-12">
        <SectionHeader title="🤝 Mis habilidades sociales" href="#" />
        <div className="text-base ">
          <p className="border-b-2 border-black dark:border-white py-3 text-lg">
            Comunicación efectiva: Soy un comunicador efectivo tanto verbal como
            escrito, capaz de expresarme de manera clara y concisa. Tengo
            experiencia en presentaciones, negociaciones y atención al cliente,
            lo que me ha permitido desarrollar habilidades de persuasión y
            empatía. 
          </p>
          <p className="border-b-2 border-black dark:border-white py-3 text-lg">
            Trabajo en equipo: Disfruto trabajando en equipo y
            colaborando con otros para lograr objetivos comunes. Tengo
            habilidades de liderazgo que me permiten motivar y guiar a mi equipo
            hacia el éxito. También he participado en proyectos
            multidisciplinarios y he aprendido a valorar la diversidad de ideas
            y enfoques.
          </p>
          <p className="border-b-2 border-black dark:border-white py-3 text-lg">
          Resolución de problemas: Soy un solucionador de
            problemas creativo y eficiente, capaz de analizar situaciones
            complejas y encontrar soluciones efectivas. He desarrollado
            habilidades para identificar rápidamente los problemas y para tomar
            decisiones informadas basadas en hechos y datos. 
          </p>
          <p className="border-b-2 border-black dark:border-white py-3 text-lg">
          Adaptabilidad: Soy
            una persona adaptable y flexible que puede trabajar en entornos
            cambiantes y enfrentar desafíos inesperados con calma y resolución.
            He trabajado en entornos de alta presión y he aprendido a mantener
            una actitud positiva y un enfoque constructivo incluso en las
            situaciones más difíciles.
          </p>
        </div>
      </div>
    </section>
  );
}
