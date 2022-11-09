type Props = {
  html: string;
};

const Markdown = ({ html }: Props) => {
  return (
    <div className="prose max-w-none">
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
};

export default Markdown;
