function BodyWrapper({
  children,
  classContainer,
  classWrapper,
}: {
  children: JSX.Element;
  classContainer?: string;
  classWrapper?: string;
}) {
  return (
    <div
      className={"flex justify-center mt-3 " + classWrapper}
    >
      <div className={"w-4/6 flex " + classContainer}>
        {children}
      </div>
    </div>
  );
}
export default BodyWrapper;
