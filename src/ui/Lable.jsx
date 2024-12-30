const Lable = ({children,lable,id}) => {
  return (
    <div className="flex gap-1 flex-col">
      <label htmlFor={id} className="p">
        {lable}
      </label>
     {children}
    </div>
  );
};
export default Lable;
