import { ImageIconProps } from "@/hooks/types";
import Image from "next/image";

const ImageIcons = ({ imageUrl, className, alt }:ImageIconProps) => {
    return (
        <Image src={imageUrl} alt={alt} className={className} priority={true} height={40} width={40}/>
    );
}

export default ImageIcons;