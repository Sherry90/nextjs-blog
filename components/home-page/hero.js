import Image from "next/image";

import classes from "./hero.module.css";

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image src="/images/site/mac.png" alt="" width={680} height={756} />
      </div>
      <h1>Hi, I'm Mac</h1>
      <p>blog</p>
    </section>
  );
};

export default Hero;
