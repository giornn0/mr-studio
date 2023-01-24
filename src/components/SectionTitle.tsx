export interface SectionTitleProps {
  title: string;
  detail?: string;
  extra?: JSX.Element;
}

function SectionTitle({
  title,
  detail,
  extra,
}: SectionTitleProps) {
  return (
    <div className="text-center pt-20">
      <h3 className="text-3xl text-bold pt-4 mb-1">
        {title}
      </h3>
      <p className="uppercase text-sm pb-4">{detail}</p>
      {extra}
    </div>
  );
}
export default SectionTitle;
