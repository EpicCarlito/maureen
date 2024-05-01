type Props = {
  alwaysTall?: boolean;
  alwaysShort?: boolean;
};

export default function Divider(props: Props) {
  let className = "";
  if (props.alwaysTall == true) {
    className = `border h-[6rem] w-[1px]`;
  } else if (props.alwaysShort == true) {
    className = `border-t h-[1px] w-full`;
  } else {
    className = `border-t md:border h-[1px] md:h-[6rem] w-full md:w-[1px]`;
  }
  return <div className={`${className} border-black`}></div>;
}
