import { serviceData } from "@/lib/data/serviceData";
import ServiceCard from "./service-card";

const Services = () => {
  return (
    <div id="projects" className="relative z-50 mx-10 py-12 lg:py-24">
      <div className="sticky top-10">
        <div className="w-[80px] h-[80px] bg-gray-300 rounded-full absolute -top-3 left-0 translate-x-1/2 filter blur-3xl opacity-30"></div>
        <div className="flex items-center justify-center relative">
          <span className="bg-gray-600 absolute  w-fit text-white px-5 py-3 text-xl rounded-md">
            Our Best Services
          </span>
          <span className="w-full h-[2px] bg-gray-600 "></span>
        </div>
      </div>
      <div className="pt-24 ">
        <div className="flex flex-col gap-6">
          {serviceData.slice(0, 6).map((service, index) => (
            <div
              id={`sticky-card-${index + 1}`}
              key={index}
              className="sticky-card w-full mx-auto max-w-5xl sticky"
            >
              <div className="box-border flex items-center justify-center rounded shadow-[0_0_30px_0_rgba(0,0,0,0.3)] transition-all duration-[0.5s]">
                <ServiceCard service={service} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
