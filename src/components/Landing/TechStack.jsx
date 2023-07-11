import reactLogo from '../../assets/react.svg';
import viteLogo from '../../assets/vite.svg';
import nodeLogo from '../../assets/nodejs-1.svg';
import mongoLogo from '../../assets/MongoDB_Logo.svg';
import expressLogo from '../../assets/expressjs-icon.svg';

const logos = [reactLogo, viteLogo, nodeLogo, mongoLogo, expressLogo];

const TechStack = () => {
  return (
    <div className='techstack'>
      {logos.map((logo) => (
        <img key={logo} src={logo} className='techstack__logo' />
      ))}
    </div>
  );
};

export default TechStack;
