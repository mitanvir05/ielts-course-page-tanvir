import { ChecklistItem } from '@/types/course';
import Image from 'next/image';

interface Props {
  items: Array<{ text: string; icon: string }>;
}

const Checklist = ({ items }: Props) => {
    return (
        <div className="py-4">
            <h3 className="text-xl font-bold mb-4">What's in this course</h3>
            <ul className="space-y-3">
                {items.map((item: any, index: number) => (
                    <li key={index} className="flex items-center space-x-3">
                        <div className="relative h-6 w-6">
                            <Image
                                src={item.icon}
                                alt=""
                                fill
                                style={{ objectFit: 'contain' }}
                            />
                        </div>
                        <span className="text-gray-700">{item.text}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Checklist;