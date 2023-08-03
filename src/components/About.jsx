/* eslint-disable react/prop-types */
import { styles } from "../styles";
import { motion } from "framer-motion";
import { textVariant, fadeIn } from "../utils/motion";
import { services } from "../constants";
import { Tilt } from "react-tilt";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ title, index, icon}) => {
  return (
    <Tilt className='xs:w-[250px] w-full '>
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className='green-pink-gradient shadow-card w-full p-[1px] rounded-[20px]'
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className='min-h-[250px] bg-tertiary rounded-[20px] py-5 px-12 flex justify-evenly flex-col items-center'
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain"/>
          <h3 className="text-white font-bold text-center text-[20px]">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 max-w-3xl text-secondary text-[17px] leading-[30px]'
      >
        I am a highly motivated and talented Full-Stack Developer with a focus
        on front-end web development, back-end technologies, and mobile app
        development. My expertise lies in creating stunning and seamless user
        experiences through a combination of cutting-edge technologies and
        creative problem-solving.
      </motion.p>
      {/* tilted cards */}
      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, 'about');
