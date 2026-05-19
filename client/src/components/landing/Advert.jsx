const Advert = () => {
  return (
    <div className="bg-[url('/aiauto.png')] relative w-full bg-fixed h-[60vh] bg-cover bg-center flex items-center  justify-center">
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="relative z-10 max-w-3xl mx-auto text-center px-4">
        <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          AI Automation Made Easy
        </h1>
        <p className="text-white/90 text-base md:text-lg mb-8 max-w-2xl mx-auto">
          Automate tasks, save time, and build smart systems using modern AI
          tools. Learn how to create workflows that work for you.
        </p>
        <button className="bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
          Learn Now
        </button>
      </div>
    </div>
  );
};

export default Advert;
