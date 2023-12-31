/* eslint-disable react-refresh/only-export-components */
import { SectionWrapper } from "../hoc";
import { BallCanvas } from "./canvas";
import { technologies } from "../constants";
const Tech = () => {
  return (
    <div className='flex flex-wrap justify-center items-center gap-10'>
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
