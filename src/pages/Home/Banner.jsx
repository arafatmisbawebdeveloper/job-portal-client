import {motion} from "framer-motion";
const Banner = () => {
  return (
    <section className="w-full bg-base-200 py-6">
      <div className="mx-auto flex min-h-[40vh] max-w-6xl flex-col items-center justify-center gap-6 px-4 lg:min-h-[50vh] lg:flex-row lg:gap-10">
        <div className="flex w-full justify-center lg:w-1/2">
          <img
            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
            className="w-full max-w-xs rounded-lg object-cover shadow-2xl"
          />
        </div>
        <div className="w-full text-center lg:w-1/2 lg:text-left">
          <motion.h1 
            animate={{ x: 50}}
            transition={{ duration: 2,delay : 1,ease: "easeOut", repeat: Infinity, repeatType: "reverse" }}
          className="text-3xl font-bold lg:text-5xl">Latest Job for you</motion.h1>
          <p className="py-4 text-sm lg:text-base">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
