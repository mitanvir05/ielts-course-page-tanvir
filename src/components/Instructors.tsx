import { Section } from "@/types/course";
import Image from "next/image";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";

interface Props {
  section: Section;
}

const Instructors = ({ section }: Props) => {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-4">{section.name}</h2>
      <div className="space-y-4">
        {section.values?.map((instructor: any, index: number) => (
          <div key={index} className="p-6 bg-white border border-gray-200 rounded-md ">
            <div className="flex items-start space-x-6">
              
              <div className="flex-shrink-0">
                <Image
                  src={instructor.image}
                  alt={instructor.name}
                  width={80}
                  height={80}
                  className="rounded-full object-cover"
                />
              </div>

              <div className="flex-grow">
                {instructor.has_instructor_page ? (
                  <Link href={`/instructors/${instructor.slug}`} legacyBehavior>
                    <a className="inline-flex items-center space-x-2 text-xl font-bold text-gray-800 hover:text-blue-600 transition-colors">
                      <span>{instructor.name}</span>
                      <FaChevronRight className="h-4 w-4" />
                    </a>
                  </Link>
                ) : (
                  <h3 className="text-xl font-bold text-gray-800">{instructor.name}</h3>
                )}

                <div
                  className="mt-2 text-gray-600 prose prose-sm"
                  dangerouslySetInnerHTML={{ __html: instructor.description || '' }}
                />
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Instructors;