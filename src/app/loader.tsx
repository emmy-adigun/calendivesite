import Image from "next/image";

export default function Loading() {
    
    return (
        <div className="preloader">
            <div className="logo">
                <Image src="/favicon.ico" width={50} height={50} alt="Logo"  priority={true} className="loaderImage"/>
            </div>
            <div className="circle"></div>
        </div>
    )
}