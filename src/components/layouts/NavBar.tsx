import Link from "next/link"
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBoxArchive } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {

    return (
        <>
            <nav className="container border-b-2 border-gray-100 flex flex-col pb-5 md:pb-0 md:flex-row center md:my-0">
                <div className="logo">
                    <a href="/">
                        <Image src="assets/images/calendive.svg" alt="logo" width={200} height={200} priority={true}/>
                    </a>
                </div>
                <div className="md:flex md:space-x-4">
                    <div>
                        <a className="" href="#">
                            Home
                        </a>
                    </div>
                    <div>
                        <a className="text-slate-400" href="#">
                            Feature
                        </a>
                    </div>
                </div>
                <div className="flex flex-col items-center space-y-2 md:flex-row md:space-y-0 md:space-x-4">
                    <div className="md:my-3">
                        <a className="text-slate-400" href="#consultation">
                            Login
                        </a>
                    </div>
                    <div className="bg-color-blue border-radius-padded">
                        <a className="" href="#consultation">
                            <FontAwesomeIcon icon={faBoxArchive}></FontAwesomeIcon>
                            &nbsp; Book Consultation
                        </a>
                    </div>
                </div>
            </nav>
        </>
    )
}
export default NavBar;