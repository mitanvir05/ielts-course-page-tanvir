import { Section } from "@/types/course";
import Image from "next/image";
import { FaCheck } from "react-icons/fa";

interface Props {
  section: Section;
}

const CourseExclusiveFeatures = ({ section }: Props) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">{section.name}</h2>

      <div className="p-8 bg-white border border-gray-200 rounded-md">
        <div className="space-y-8">
          {section.values?.map((feature: any, index: number) => (
            <div key={index}>
              {index > 0 && (
                <div className="border-t border-dotted border-gray-200 my-8"></div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                <div className="md:col-span-2">
                  <h3 className="text-2xl font-semibold mb-4">
                    {feature.title}
                  </h3>
                  <ul className="space-y-3">
                    {feature.checklist?.map((item: string, idx: number) => (
                      <li key={idx} className="flex items-start">
                        <FaCheck className="text-blue-500 mt-1 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="relative h-48 w-full">
                  <Image
                    src={feature.file_url}
                    alt={feature.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    style={{ objectFit: "contain" }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseExclusiveFeatures;
