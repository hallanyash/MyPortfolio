import img from "../About/edited.jpg";
const About = () => {
  return (
    <section
      id="about"
      className="bg-black text-white px-4 sm:px-6 py-12 min-h-screen flex flex-col justify-center"
    >
      <div className="text-center mb-10 px-4 py-5">
        <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl mb-4">
          About Me
        </h1>
        <h3 className="text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
          Passionate about creating meaningful digital experiences through
          innovative design and clean code.
        </h3>
      </div>
      <div className="flex flex-col-reverse md:flex-row items-center gap-10 max-w-6xl mx-auto px-4 py-10">
        <div className="w-full space-y-6 text-center md:text-left">
          <p className="text-base sm:text-lg leading-relaxed text-white">
            Hi, I’m <strong className="text-purple-300">Yash Hallan</strong> — a
            passionate Full Stack Developer from New Delhi, India. I specialize
            in building responsive, user-friendly web interfaces using HTML,
            CSS, JavaScript, and React.js.
          </p>
          <p className="text-base sm:text-lg leading-relaxed text-white">
            I’m currently pursuing my BCA from IGNOU University and constantly
            working to expand my skills in the MERN stack. I love turning ideas
            into interactive, real-world web experiences.
          </p>
          <a
            href="/YashHallanResume-1.pdf"
            download
            className="inline-block px-5 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-full shadow-md hover:scale-105 transition-transform"
          >
            📄 Download CV
          </a>
        </div>
        <div className="w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[450px] md:h-[450px] rounded-full bg-gradient-to-br from-[#667eea] via-[#764ba2] to-[#f093fb] p-[4px] shadow-lg">
          <div className="bg-white w-full h-full rounded-full overflow-hidden">
            <img
              src={img}
              alt="Yash Hallan"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
