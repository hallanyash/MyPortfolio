const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-black flex flex-col justify-center items-center relative text-center px-4"
    >
      <div className="bg-zinc-900 text-white py-1 px-4 rounded-full flex items-center mb-6 shadow-md text-sm sm:text-base">
        <span className="mr-2">🚀</span>
        Open to new opportunities
      </div>
      <h1 className="font-extrabold text-[#6C76FF] mb-4 relative text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
        Yash Hallan
      </h1>
      <p className="text-gray-300 max-w-4xl text-base sm:text-lg md:text-2xl lg:text-3xl leading-relaxed mb-8 px-4">
        Full Stack Developer crafting delightful and{" "}
        <br className="hidden sm:block" />
        scalable digital experiences.
      </p>
      <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mb-16">
        <a
          href="#project"
          className="bg-[#6C76FF] text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
        >
          View My Work ✨
        </a>
        <a
          href="#contact"
          className="bg-zinc-800 text-white font-medium px-6 py-3 rounded-full hover:scale-105 transition-transform duration-300"
        >
          Let's Talk 💬
        </a>
      </div>
    </section>
  );
};

export default Hero;
