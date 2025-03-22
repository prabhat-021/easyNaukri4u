import { featuresData } from "@/lib/data/features-data";
import FeatureCard from "./feature-card";

const Features = () => {
  return (
    <div id="projects" className="relative z-50 mx-10  my-12 lg:my-24">
      <div className="sticky top-10">
        <div className="w-[80px] h-[80px] bg-gray-300 rounded-full absolute -top-3 left-0 translate-x-1/2 filter blur-3xl opacity-30"></div>
        <div className="flex items-center justify-center relative">
          <span className="bg-gray-600 absolute  w-fit text-white px-5 py-3 text-xl rounded-md">
            Our Main Features
          </span>
          <span className="w-full h-[2px] bg-gray-600"></span>
        </div>
      </div>

      <div className="pt-24">
        <div className="flex flex-col gap-6">
          {featuresData.slice(0, 4).map((feature, index) => (
            <div
              id={`sticky-card-${index + 1}`}
              key={index}
              className="sticky-card w-full mx-auto max-w-2xl sticky"
            >
              <div className="box-border flex items-center justify-center rounded shadow-[0_0_30px_0_rgba(0,0,0,0.3)] transition-all duration-[0.5s]">
                <FeatureCard feature={feature} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
