const AboutSection = () => {

  return (
    <div className="my-10 bg-neutral-900 px-4 text-neutral-200 flex items-center justify-center">
      <div className="max-w-2xl w-full space-y-6">
        <h1 className="text-2xl font-bold border-b border-neutral-700 pb-4">
          About This App
        </h1>

        <p className="text-base leading-relaxed">
          This project is a practice ground for mastering data-fetching in React apps using 
          <span className="font-semibold text-white"> useQuery</span>, and 
          <span className="font-semibold text-white"> useInfiniteQuery</span>. As well as implementing <span  className="font-semibold text-white">Single Responsibility</span> and <span className="font-semibold text-white">DRY Principle</span>.
          It's a step toward building scalable, real-world applications.
        </p>

        <p className="text-xs leading-relaxed">
          Built with the <span className="font-semibold text-white">MERN stack</span> (MongoDB, Express, React, Node.js), 
          this app intentionally excludes authentication features to keep the focus on mastering 
          the core concepts of client-server communication and query management.
        </p>

        <p className="text-xs leading-relaxed italic">
          I'm a 17-year-old self-taught developer with 1 year of coding experience. 
          I build and deploy everything from my Android phone using Acode and Termux.
        </p>
      </div>
    </div>
  );
}

export default AboutSection