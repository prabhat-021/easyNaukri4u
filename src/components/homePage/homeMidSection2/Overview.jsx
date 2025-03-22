import { overviewData } from "@/lib/data/OverviewData";
import ScrollParagraph from "./scroll-paragraph";
import ScrollTextAnimation from "./scroll-text-animation";

export default function Overview() {
  return (
    <div className="px-2">
      {overviewData.map((section, index) => (
        <div
          key={index}
          className="md:flex justify-evenly py-10 border-b border-gray-300"
        >
          <ScrollTextAnimation titleText={section.title} />
          <div className="md:w-1/2">
            {section.paragraphs.map((paragraph, index) => (
              <ScrollParagraph key={index} paragraph={paragraph} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
