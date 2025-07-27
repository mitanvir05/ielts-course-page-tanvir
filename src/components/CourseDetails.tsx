'use client'; 

import { useState } from 'react';
import { Section } from "@/types/course";
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

interface Props {
  section: Section;
}

const CourseDetails = ({ section }: Props) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  return (
    <div>
      <h2 className="text-3xl font-bold mb-4">{section.name}</h2>

      <div className="bg-white border border-gray-200 rounded-xl shadow-sm">
        {section.values.map((detail: any, index: number) => (
          <div key={index} className="px-6 py-4">
            {/* **FIX:** Replaced <hr> with a styled <div> for the dotted line */}
            {index > 0 && <div className="border-t border-dotted border-gray-300 my-4"></div>}
            
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full flex justify-between items-center text-left focus:outline-none"
            >
              <div
                className="font-semibold text-lg"
                dangerouslySetInnerHTML={{ __html: detail.title || '' }}
              />
              {activeIndex === index ? (
                <FaChevronUp className="text-gray-500" />
              ) : (
                <FaChevronDown className="text-gray-500" />
              )}
            </button>

            {activeIndex === index && (
              <div className="mt-4">
                <div
                  className="prose max-w-none prose-ul:list-none prose-ul:pl-0"
                  dangerouslySetInnerHTML={{ __html: detail.description || '' }}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseDetails;