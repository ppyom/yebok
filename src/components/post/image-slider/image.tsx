import NextImage from 'next/image';

interface Props {
  src: string;
  alt: string;
  isFirstImage?: boolean;
}

export const Image = ({ src, alt, isFirstImage }: Props) => {
  return (
    <NextImage
      className="object-cover object-center"
      src={src}
      alt={alt}
      fill={true}
      priority={isFirstImage}
      sizes="(max-width: 500px) 100vw, 500px"
    />
  );
};
