/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { motion } from 'framer-motion';
import { github } from '../assets';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants';
import { textVariant, fadeIn } from '../utils/motion';

const ProjectCard = ({ name, index, image, source_code_link, description, tags }) => {
  return (
    <motion.div variants={fadeIn('up', 'spring', index * 0.5, 0.75)} className="w-full sm:w-[360px]">
      <div className="h-full p-5 bg-tertiary rounded-2xl">
        {/* Image Container with GitHub Link */}
        <div className="relative w-full h-[230px] sm:h-[280px] rounded-2xl overflow-hidden">
          <img src={image} alt={name} className="object-cover w-full h-full" loading="lazy" />

          <div className="absolute inset-0 flex justify-end m-3">
            <div
              onClick={() => window.open(source_code_link, '_blank')}
              className="flex items-center justify-center w-10 h-10 rounded-full cursor-pointer black-gradient"
              aria-label="View source code on GitHub"
            >
              <img src={github} alt="github" className="object-contain w-5 h-5" />
            </div>
          </div>
        </div>

        {/* Project Details */}
        <div className="mt-5">
          <h3 className="text-xl font-bold text-white sm:text-2xl">{name}</h3>
          <p className="mt-2 text-sm text-secondary sm:text-base">{description}</p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-4">
          {tags.map((tag) => (
            <span key={tag.name} className={`text-xs sm:text-sm ${tag.color}`}>
              #{tag.name}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Works = () => {
  return (
    <section className="relative z-0">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <motion.div variants={fadeIn('', '', 0.1, 1)} className="mt-4">
        <p className="text-sm leading-relaxed text-secondary sm:text-base">
          The following projects showcase my real-world experience and contributions. Each project demonstrates
          different skills and technologies I&apos;ve worked with.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 gap-6 mt-12 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default SectionWrapper(Works, 'work');
