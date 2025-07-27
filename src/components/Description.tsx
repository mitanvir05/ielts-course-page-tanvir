interface Props {
  htmlContent: string;
}

const Description = ({ htmlContent }: Props) => {
  return (
    <div
      className="prose prose-lg max-w-none text-gray-600"
      dangerouslySetInnerHTML={{ __html: htmlContent || "" }}
    />
  );
};

export default Description;
