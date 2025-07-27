interface Props {
  ctaText: string;
}

const CtaSidebar = ({ ctaText }: Props) => {
  const defaultPrice = 1000;
  return (
    <div>
      <p className="text-3xl font-bold text-center mb-4">৳{defaultPrice}</p>
      <button
        className="w-full bg-green-500 text-white font-semibold py-3 px-4 rounded-lg
                   hover:bg-green-600 active:bg-green-700
                   shadow-md transition-all duration-150
                   border-b-4 border-green-700
                   active:translate-y-1 active:border-b-0 active:shadow-none"
      >
        {ctaText}
      </button>
    </div>
  );
};
export default CtaSidebar;
