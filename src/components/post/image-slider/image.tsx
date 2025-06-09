import NextImage from 'next/image';

interface Props {
  src: string;
  alt: string;
}

export const Image = ({ src, alt }: Props) => {
  return (
    <NextImage
      className="aspect-square object-cover object-center"
      src={src}
      alt={alt}
      width={1080}
      height={1440}
    />
  );
};
