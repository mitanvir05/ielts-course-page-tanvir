import { Section } from "@/types/course";
import { FaCheck } from "react-icons/fa";

interface Props {
  section: Section;
}

const WhatYouWillLearn = ({ section }: Props) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">{section.name}</h2>

      <div className="bg-white p-8 border border-gray-200 rounded-md">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
          {section.values?.map((item: any, index: number) => (
            <div key={index} className="flex items-start">
              <FaCheck className="text-blue-500 mt-1 mr-3 flex-shrink-0" />
              <p className="text-gray-700">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatYouWillLearn;
