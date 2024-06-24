import HomeHero from "./components/HomeHero";
import Hero2 from "./components/Hero2";
import Testimonials from "./components/Testimonials";

const Home = () => {
  return (
    <div>
      <HomeHero />
      <Hero2 />
      <div className="relative flex items-center justify-center mx-auto">
        <img
          src="src\assets\images\gradient-green.png"
          className="absolute left-0 opacity-80 top-20"
        />
        <img src="src\assets\images\services.png" className="" />
      </div>
      <div>Recent Work</div>
      <div>Trusted by</div>
      <div>
        <Testimonials />
      </div>
      <div className="relative flex items-center justify-center mx-auto">
        <img
          src="src\assets\images\gradient-green.png"
          className="absolute top-0 left-0 opacity-80"
        />
        <img src="src\assets\images\Trust Aayan.png" className="" />
      </div>
      <div>Certification</div>
      <div>Video + text (left right)</div>
      <div>Contact us card</div>
    </div>
  );
};

export default Home;
