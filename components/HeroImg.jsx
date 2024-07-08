import Image from "next/image";

const HeroImg = ({ containerStyles, imgSrc }) => {
  return (
    <div className={`${containerStyles}`}>
      <Image src={imgSrc} fill priority={100} alt="hero image" />
    </div>
  );
};

export default HeroImg;
