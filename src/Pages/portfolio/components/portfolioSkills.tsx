const PortfolioSkills = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["C", "Python", "Java", "JavaScript", "TypeScript"]
    }, {
      title: "Frontend",
      skills: [
        "HTML",
        "CSS",
        "PHP",
        "Bootstrap CSS",
        "Tailwind CSS",
        "ReactJS"
      ]
    }, {
      title: "Backend",
      skills: ["REST API", "NodeJS", "NestJS", "Prisma"]
    }, {
      title: "Database",
      skills: ["MySQL", "PostgreSQL"]
    }, {
      title: "API Testing",
      skills: ["Swagger Docs", "Postman"]
    }
  ];

  return (<section className="skills py-52" id="skills">
    <div className="section__header text-center">
      <h2 className="section__title text-7xl font-bold text-black">Skills</h2>
      <p className="mt-4 text-gray-600 font-medium">
        Technologies I use to build modern web applications.
      </p>
    </div>

    <div className="max-w-6xl mx-auto px-8 mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {
        skillCategories.map((category) => (<div key={category.title} className=" rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-8 border border-black">
          <h3 className="text-2xl font-bold text-black mb-6">
            {category.title}
          </h3>

          <div className="flex flex-wrap gap-3">
            {
              category.skills.map((skill) => (<span key={skill} className="px-4 py-2 rounded-full bg-gray-100 text-gray-800 text-sm font-semibold hover:bg-black hover:text-white transition">
                {skill}
              </span>))
            }
          </div>
        </div>))
      }
    </div>
  </section>);
};

export default PortfolioSkills;
