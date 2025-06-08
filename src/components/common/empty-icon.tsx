interface Props {
  size: number;
}

export const EmptyIcon = ({ size }: Props) => {
  return <div style={{ width: size, height: size }} />;
};
