interface Props {
  title: string;
}

const Title = ({ title }: Props) => {
  return (
    <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900">
      {title}
    </h1>
  );
};

export default Title;
