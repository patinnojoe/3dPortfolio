/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { github } from "../assets";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { textVariant, fadeIn } from "../utils/motion";

// project card
const ProjectCard = ({
  name,
  index,
  image,
  source_code_link,
  description,
  tags,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        className='bg-tertiary p-5 w-full sm:w-[360px] rounded-2xl'
        options={{
          speed: 450,
          max: 45,
          scale: 1,
        }}
      >
        <div className='relative w-full h-[280px]'>
          <img
            src={image}
            alt={name}
            className='object-fit-cover rounded-2xl w-full h-full'
          />

          {/* position github at the top left of the image */}
          <div className='absolute inset-0 flex justify-end m-3 card-image_hover'>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient h-10 w-10 rounded-full justify-center flex items-center cursor-pointer'
            >
              <img
                src={github}
                alt='github'
                className='h-1/2 w-1/2 object-fit-contain'
              />
            </div>
          </div>
        </div>
        <div className='mt-5'>
          <h5 className='text-white font-bold text-[24px]'>{name}</h5>
          <p className='text-[14px] mt-2 text-secondary'>{description}</p>
        </div>
        <div className='mt-4 flex gap-2 flex-wrap'>
          {tags.map((tag) => (
            <p key={tag.name} className={`${tag.color} text-[14px]`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Work done...</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>
      <div className='w-full flex'>
        <motion.p variants={fadeIn("", "", 0.1)}>
          The following projects exemplify a diverse range of real-world
          applications I have actively participated in, contributing to their
          development and success. These additions provide a glimpse into my
          collaborative involvement and are thoughtfully included in my
          portfolio to underscore my practical contributions and expertise..
        </motion.p>
      </div>
      <div className='flex flex-wrap mt-20 text-[17px] gap-5'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} {...project} index={index} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
