type Props = {
  height: number;
  stroke: number;
};

export default function Divider(props: Props) {
  const heightStyle = {
    height: `${props.height}rem`,
    border: `${props.stroke}px solid black`,
  };

  return (
    <div
      style={heightStyle}
      className="md:h-[calc(var(--height) + 1rem)]"
    ></div>
  );
}
