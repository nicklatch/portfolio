import ComingSoon from '../CommingSoon';
import TechStack from './TechStack';

const Landing = () => {
  return (
    <div className="flex flex-col justify-around items-center gap-20">
      <ComingSoon />
      <TechStack />
    </div>
  );
};

export default Landing;
