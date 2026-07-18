import {motion} from "framer-motion";
import img from "../../assets/team/team1.jpg";
import img2 from "../../assets/team/team2.jpg";
const Banner = () => {
  return (
    <section className="w-full bg-base-200 py-6">
      <div className="mx-auto flex min-h-[40vh] max-w-6xl flex-col items-center justify-center gap-6 px-4 lg:min-h-[50vh] lg:flex-row lg:gap-10">
        <div className="flex w-full justify-center lg:w-1/2">
          <motion.img
            src={img}
            animate = {{y:[50,75]}}
            transition = {{duration: 2, delay: 1, repeat: Infinity, repeatType: "reverse"}}
            className=" max-w-sm w-64 h-48 rounded-t-[40px] rounded-br-[40px] border-l-4 border-b-4 shadow-2xl"
          />
          <motion.img
            src={img2}
            animate = {{x:[-80,-55]}}
            transition = {{duration: 2, delay: 1, repeat: Infinity, repeatType: "reverse"}}
            className=" max-w-sm w-64 h-48 rounded-t-[40px] rounded-br-[40px] border-l-4 border-b-4 shadow-2xl"
          />
        </div>
        <div className="w-full text-center lg:w-1/2 lg:text-left">
          <motion.h1 
            animate={{ x: 50}}
            transition={{ duration: 2,delay : 1,ease: "easeOut", repeat: Infinity, repeatType: "reverse" }}
          className="text-3xl font-bold lg:text-5xl">Latest <motion.span
          animate = {{color:['#27F2F5', '#F227A1', '#F2E227', '#27F2F5']}}
          transition = {{duration: 2, delay: 1.5,repeat: Infinity}}
> Job
            </motion.span> for you</motion.h1>
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
