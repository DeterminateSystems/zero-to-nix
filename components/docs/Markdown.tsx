// We're not using this yet but it may come in handy
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
