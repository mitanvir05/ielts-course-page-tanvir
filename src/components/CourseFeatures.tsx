import { Section } from "@/types/course";
import Image from 'next/image';

const CourseFeatures = ({ section }: any) => {
    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">{section.name}</h2>
           
            <div className="bg-slate-800 text-white p-8 rounded-md shadow-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
                    {section.values?.map((item: any, index: number) => (
                        <div key={index} className="flex items-start space-x-4">
                            <div className="flex-shrink-0">
                               <Image 
                                 src={item.icon} 
                                 alt={item.title} 
                                 width={40}
                                 height={40}
                                 style={{ objectFit: 'contain' }}
                               />
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg leading-tight">{item.title}</h3>
                                <p className="text-sm text-gray-400 mt-1">{item.subtitle}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
export default CourseFeatures;