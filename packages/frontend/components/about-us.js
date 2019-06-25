import Paragraph from './paragraph';
import Button from './button';

function AboutUs() {
  return (
    <div className="pt-32 flex justify-start">
      <div className="w-2/5">
        <div className="mb-10">
          <h2 className="m-0 leading-tight text-2xl font-bold text-text-color">
            For People,
          </h2>
          <h1 className="m-0 leading-tight text-3xl font-bold text-big-desc">
            From People.
          </h1>
        </div>
        <Paragraph className="border-l border-solid border-text-color pl-3 mb-10">
          We’re creating something beautiful, something wonderful. So, I can’t
          explain it as a front-end developer for now but I guess there will
          something good that writed by marketing team am I right?
        </Paragraph>
        <Button color="#6F6F6F">LEARN MORE</Button>
      </div>
      <div className="w-3/5 text-center">
        {/*
            TODO: Using PNG in here isn't make sense,
            We should create a SVG file later.
            Today, I am using a illustrator that downloaded from dribbble.
            I will change it later.
          */}
        <img src="static/about-us.png" alt="About Us" />
      </div>
    </div>
  );
}

export default AboutUs;