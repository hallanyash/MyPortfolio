const Skill = () => {
  return (
    <>
      <section id="skill" className="bg-black text-white py-16 px-6 md:px-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
            Skills & Technologies
          </h2>
          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto">
            Combining technical expertise with creative vision to deliver
            exceptional results
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-[#121212] rounded-3xl p-8 shadow-lg min-h-[320px] flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 bg-[#1e1e1e] flex items-center justify-center rounded-xl mb-4 text-2xl">
                💻
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-4">
                Frontend Technologies
              </h3>
              <div className="flex flex-wrap gap-3">
                {["HTML5", "CSS3", "Sass", "JavaScript (ES6+)"].map((tech) => (
                  <span
                    key={tech}
                    className="bg-zinc-800 text-gray-100 px-4 py-2 rounded-full text-sm"
                  >
                    ✨ {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="bg-[#121212] rounded-3xl p-8 shadow-lg min-h-[320px] flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 bg-[#1e1e1e] flex items-center justify-center rounded-xl mb-4 text-2xl">
                ⚛️
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-4">
                Frameworks & Libraries
              </h3>
              <div className="flex flex-wrap gap-3">
                {["React.js", "GSAP", "Bootstrap", "Tailwind CSS"].map(
                  (lib) => (
                    <span
                      key={lib}
                      className="bg-zinc-800 text-gray-100 px-4 py-2 rounded-full text-sm"
                    >
                      ✨ {lib}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="w-full bg-black text-white flex justify-center px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-7xl">
          {/* State Management */}
          <div className="bg-[#121212] p-8 rounded-xl shadow-lg min-h-[260px] flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-[#2e2e2e] p-4 rounded-xl">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/1055/1055687.png"
                    alt="state"
                    className="w-10 h-10"
                  />
                </div>
                <h2 className="text-xl sm:text-2xl font-semibold">
                  State Management & Tools
                </h2>
              </div>
              <div className="flex flex-wrap gap-4">
                {["Rest API", "Git", "GitHub"].map((tool) => (
                  <span
                    key={tool}
                    className="bg-[#2e2e2e] px-4 py-2 rounded-full text-sm"
                  >
                    ✦ {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="bg-[#121212] p-8 rounded-xl shadow-lg min-h-[300px] flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-[#2e2e2e] p-4 rounded-xl">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/1055/1055685.png"
                    alt="design"
                    className="w-10 h-10"
                  />
                </div>
                <h2 className="text-xl sm:text-2xl font-semibold">
                  Design & Architecture
                </h2>
              </div>
              <div className="flex flex-wrap gap-4">
                {["Responsive Design", "Flexbox"].map((design) => (
                  <span
                    key={design}
                    className="bg-[#2e2e2e] px-4 py-2 rounded-full text-sm"
                  >
                    ✦ {design}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skill;
