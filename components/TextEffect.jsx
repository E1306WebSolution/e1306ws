import { TypeAnimation } from 'react-type-animation';

const TextEffect = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Next JS Web Developer',
        1500, // wait 1s before replacing "Mice" with "Hamsters"
        'React JS Web Developer',
        1500,
        'SEO Expert',
        1500,
        'Back Links Generator',
        1500,
      ]}
      wrapper="span"
      speed={50}
    //   style={{ fontSize: '2em', display: 'inline-block' }}
    className="text-[2rem] md:text-[3rem] text-[#55e6a5] font-bold uppercase"
      repeat={Infinity}
    />
  );
};


export default TextEffect;