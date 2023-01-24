export interface WhyUsItemProps {
  title: string;
  detail: string;
}
function WhyUsItem({ title, detail }: WhyUsItemProps) {
  const imgItem =
    "https://globalcgi.eu/wp-content/uploads/2021/12/check-2.svg";
  return (
    <div className="flex flex-row gap-2 py-2">
      <img width="20" src={imgItem} />
      <div>
        <h4 className="text-lg">{title}</h4>
        <p className="text-sm">{detail}</p>
      </div>
    </div>
  );
}
export default WhyUsItem;
