import { RiShieldUserLine } from 'react-icons/ri';
import SectionHeading from './SectionHeading';
import Testimonials from './Testimonials';


const AboutUsSection = () => {
  return (
    <div className="bg-light" id="about">
      <div className="container py-20">
        <SectionHeading title="About Us" icon={RiShieldUserLine} />
        <h2 className="mt-6 text-center text-2xl font-bold text-accent md:text-3xl lg:text-5xl">
          Driven by Passion, <span className="text-primary">Powered by Trust</span>
        </h2>
        <p className="text-md m-auto mt-4 max-w-5xl text-center font-semibold text-gray-500 md:text-lg">
          At <span className="text-primary">Baato Mechanic</span>, we believe no journey should come to an unexpected halt.
          Our team of skilled professionals is committed to keeping you on the road with fast, reliable, and high-quality automotive services.
          Whether it's emergency roadside assistance, expert repairs, or routine maintenance, we bring the workshop to you—anytime, anywhere.
          Your safety and satisfaction drive us forward.
        </p>
        <div className="pt-10">
          {/* <SectionHeading title="Testimonial" /> */}
          {/* <Testimonials /> */}
        </div>
      </div>
    </div>
  );
};

export default AboutUsSection;

