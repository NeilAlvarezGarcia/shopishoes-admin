import Image, { ImageProps } from "next/image";
import { FC } from "react";

interface ImgProps extends Omit<ImageProps, "width" | "height" | "loading"> {
  width?: number;
  height?: number;
  loading?: "lazy" | "eager";
}

export const Img: FC<ImgProps> = ({alt = "Image", ...props}) => {
    return (
        <Image
            width={400}
            height={400}
            loading="eager"
            alt={alt}
            {...props}
        />
    );
}