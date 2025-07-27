import { Section, InstructorItem } from "@/types/course"; //
import Image from "next/image";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";

interface Props {
  section: Section<InstructorItem>;
}

const Instructors = ({ section }: Props) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">{section.name}</h2>
      <div className="space-y-4">
        {section.values?.map((instructor: InstructorItem, index: number) => (
          <div
            key={index}
            className="p-6 bg-white border border-gray-200 rounded-sm "
          >
            <div className="flex items-center space-x-6">
              <div className="flex-shrink-0">
                <Image
                  src={instructor.image}
                  alt={instructor.name}
                  width={70}
                  height={70}
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
                  <h3 className="text-xl text-gray-800">{instructor.name}</h3>
                )}

                <div
                  className="mt-2 text-gray-600 prose prose-sm [&>p:last-child]:mb-0"
                  dangerouslySetInnerHTML={{
                    __html: instructor.description || "",
                  }}
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
