const Project = () => {
  return (
    <>
      <section id="project" className="px-4 py-16 bg-black text-white">
        <div className="flex flex-col items-center gap-10">
          <h1 className="text-center text-4xl font-bold">Practice Projects</h1>

          {[
            {
              name: "Steam Clone",
              link: "https://steamgameclone.netlify.app/",
              role: "Front-end Developer",
              tech: "HTML, CSS, Bootstrap, JavaScript, API, React.js",
              points: [
                "Built all key web pages including homepage, game detail pages, search, and navigation.",
                "Integrated dynamic game data using backend APIs from RapidAPI.",
              ],
            },
            {
              name: "Movie App",
              link: "https://movieappimdbclone.netlify.app/",
              role: "Front-end Developer",
              tech: "HTML, CSS, Bootstrap, JavaScript, API, React.js",
              points: [
                "Integrated dynamic movie data using backend APIs from TMDB api.",
                "Implemented a search functionality that allows users to find movies by title in real-time.",
                "Built a movie search feature with React and used React Router for navigation.",
              ],
            },
            {
              name: "The Listeners (Spotify Clone)",
              link: "https://thelistenersmusicapp.netlify.app/",
              role: "Front-end Developer",
              tech: "HTML, CSS, Bootstrap, JavaScript, API, React.js",
              points: [
                "This Spotify Clone was created for learning purposes to practice and demonstrate frontend development skills.",
                "Integrated dynamic music app using backend APIs from JioSaavn api.",
              ],
            },
            {
              name: "Recipe App",
              link: "https://cookingrecipeapplication.netlify.app/",
              role: "Front-end Developer",
              tech: "HTML, CSS, Bootstrap, JavaScript, API, React.js",
              points: [
                "Integrated dynamic recipes data using APIs from TheMealDB.",
                "Implemented a search functionality that allows users to search a recipe.",
              ],
            },
          ].map((project, index) => (
            <div
              key={index}
              className="bg-[#1f1f1f] w-full max-w-4xl rounded-2xl p-6 shadow-lg"
            >
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-4">
                <div>
                  <h2 className="text-2xl font-semibold">
                    🚀 Project Name:{" "}
                    <span className="text-indigo-400">{project.name}</span>
                  </h2>
                  <p className="text-lg text-gray-300">
                    👨‍💻 Role:{" "}
                    <span className="text-white font-medium">
                      {project.role}
                    </span>
                  </p>
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-indigo-500 text-white text-sm px-4 py-2 rounded-full hover:bg-indigo-600 transition"
                >
                  🔗 Preview Link
                </a>
              </div>

              <ul className="list-disc pl-6 space-y-2 text-gray-200 text-sm marker:text-indigo-400">
                <li>
                  <span className="font-medium">Tech Stack:</span>{" "}
                  <span className="text-white">{project.tech}</span>
                </li>
                {project.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
export default Project;
