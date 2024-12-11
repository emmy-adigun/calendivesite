'use client';
import Link from "next/link";
import Image from "next/image";
import Input from "@/components/FormFields/Input";
import Label from "@/components/FormFields/Label";
import { SetStateAction, useEffect, useState } from "react";
import PrimaryButton from "@/components/PrimaryButton";
import { lemonadeDairiesErrorType, successDataType } from "@/hooks/types";
import { toast } from "react-toastify";
import { useGeneralQueries } from "@/hooks/generalQueries";
import { AlluraFont } from "../font";
import glass1 from '../../../public/images/glass1.png';
import glass2 from '../../../public/images/glass2.png';
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const LemonadeDiariesData = ()=>{
    const { registerLemonadeDiariesEvents } = useGeneralQueries({ middleware: 'guest' });
    const [name,  setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [socialHandle, setSocialHandle] = useState('');
    const [hearAboutUs, sethearAboutUs] = useState('');
    const [processing, setProcessing] = useState(false);
    const [status, setStatus] = useState(0);
    const registered = localStorage.getItem('registered')??'false'
    const [errors, setErrors] = useState<lemonadeDairiesErrorType>({
        msg: '',
        name: [],
        email: [],
        phone: [],
        hearAboutUs: [],
        socialHandle: []
    });

    const [data, setData] = useState<successDataType>({
        message:'',
        data: [],
        status: ''
    });

    const submitForm = async (event: { preventDefault: () => void; }) => {
        event.preventDefault()
        setProcessing(true);
        setStatus(0);
        try {
            const register = await registerLemonadeDiariesEvents({
                name,
                email,
                phone,
                hearAboutUs,
                socialHandle,
                setErrors,
                setStatus,
                setData
            });
        } catch (error) {
            setProcessing(false);
        }
    }

    const registerAgain = () => {
        localStorage.setItem('registered', 'false');
        setTimeout(() => {window.location.reload();}, 1000);
    }

    useEffect(() => {
        if (status === 200) {
            setProcessing(false);
            toast.success(data.message, {
                position: toast.POSITION.TOP_RIGHT,
            });
            localStorage.setItem('registered', 'true');
            setTimeout(() => {window.location.reload();}, 3000);
        } else if (status === 422 || status === 404) {
            if (errors) {
                toast.error(errors.msg, {
                    position: toast.POSITION.TOP_LEFT,
                });
                setProcessing(false);
            }
        }else if(status === 500){
            toast.error('Sorry an internal server error occured, please contact the technical spanport team.', {
                position: toast.POSITION.TOP_LEFT,
                
            });
            setProcessing(false);
        }
    }, [status, errors]);

   
    
    return(
        <>
            {registered=='false' ? (
                <div className="w-full">
                    <div className="w-full">
                        <div className="w-full bg-[#FEEAA9] text-center py-10">
                            <h1 className="text-[45px] md:text-[52px] leading-[60px] font-serif">Lemonade <br/> Diaries X Lohn</h1>
                            <h5 className="text-[21px] mt-3">Event RSVP</h5>
                        </div>
                        <div className="w-full px-5 md:px-10 pt-10">
                            <h3 className="font-semibold text-[20px]">Follow us on <FontAwesomeIcon icon={faInstagram} className="bg-black text-white px-1 py-[2.5px] rounded-full text-[14px]"/></h3>
                            <Link href="https://www.instagram.com/latsthedj?igsh=bWFuZHpvaGx4eDYw" target="_blank" className="text-[16px]">@latsthedj</Link><br/>
                            <Link href="https://www.instagram.com/lemonade.diaries?igsh=MXBjd2N2b3pkbnV3" target="_blank" className="text-[16px]">@lemonade.diaries</Link>
                        </div>
                        
                        <form onSubmit={submitForm} method="post" className="block mt-5">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10 px-5 md:px-10">
                                <div className="form-group">
                                    <p className="flex">
                                        <Label htmlFor="name">Full Name</Label><span className="text-red-500">*</span>
                                    </p>
                                    <Input
                                        id="name"
                                        type="text"
                                        value={name}
                                        className={`block mt-1 w-full px-3 bg-[#ECECEC] ${errors.name.length > 0 ? 'border-red-500' : ''}`}
                                        onChange={(event: { target: { value: SetStateAction<string>; }; }) => setName(event.target.value)}
                                    /> 
                                </div>
                                <div className="form-group">
                                    <p className="flex">
                                        <Label htmlFor="email">Email</Label><span className="text-red-500">*</span>
                                    </p>
                                    <Input
                                        id="email"
                                        type="email"
                                        value={email}
                                        className={`block mt-1 w-full px-3 bg-[#ECECEC] ${errors.email.length > 0 ? 'border-red-500' : ''}`}
                                        onChange={(event: { target: { value: SetStateAction<string>; }; }) => setEmail(event.target.value)}
                                    /> 
                                </div>
                                <div className="form-group">
                                    <p className="flex">
                                        <Label htmlFor="phone">Mobile Number (Whatsapp preferred)</Label><span className="text-red-500">*</span>
                                    </p>
                                    <Input
                                        id="phone"
                                        type="phone"
                                        value={phone}
                                        className={`block mt-1 w-full px-3  bg-[#ECECEC] ${errors.phone.length > 0 ? 'border-red-500' : ''}`}
                                        onChange={(event: { target: { value: SetStateAction<string>; }; }) => setPhone(event.target.value)}
                                    /> 
                                </div>
                                
                                <div className="form-group">
                                    <p className="flex">
                                        <Label htmlFor="phone">Instagram / Tiktok Handle</Label>
                                    </p>
                                    <Input
                                        id="socialHandle"
                                        type="text"
                                        value={socialHandle}
                                        className={`block mt-1 w-full px-3  bg-[#ECECEC] ${errors.socialHandle.length > 0 ? 'border-red-500' : ''}`}
                                        onChange={(event: { target: { value: SetStateAction<string>; }; }) => setSocialHandle(event.target.value)}
                                    /> 
                                </div>
                                <div className="form-group">
                                    <p className="flex">
                                        <Label htmlFor="hearAboutUs">How did you hear about Lemonade Diaries X Lohn?</Label>
                                    </p>
                                    <Input
                                        id="hearAboutUs"
                                        type="text"
                                        value={hearAboutUs}
                                        className={`block mt-1 w-full px-3  bg-[#ECECEC] ${errors.hearAboutUs.length > 0 ? 'border-red-500' : ''}`}
                                        onChange={(event: { target: { value: SetStateAction<string>; }; }) => sethearAboutUs(event.target.value)}
                                    /> 
                                </div>
                                <div className="form-group mt-2 md:mt-[30px]">
                                    <PrimaryButton type="submit" className="w-full py-3 bg-[#FEEAA9] border-[#FEEAA9] rounded-[4px] text-black hover:text-black" disabled={processing}>
                                        {processing?(
                                            <>Processing...</>
                                        ):(
                                            <>Register</>
                                        )}
                                    </PrimaryButton>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className={`w-full py-10`}>
                        <p className="text-center text-[16px] font-normal">&copy; 2024 Calendive. All Rights Reserved</p>
                    </div>
                </div>
            ):(
                <div className="w-full md:h-[100vh] bg-[#34461D] text-center text-red-100 px-3 md:px-0">
                    <div className="pt-5 md:pt-20 pb-10">
                        <h1 className="text-[30px] md:text-[40px]">Lohn X <span style={AlluraFont.style}>Lemonade Diaries</span></h1>
                    </div>
                    <div>
                        <h4>PRESENTS</h4>
                        <h1 className="text-[70px] pt-2 pb-3 text-red-100 font-serif">APERITIF</h1>
                        <p>AN EVENING OF MUSIC, CULTURE AND CONNECTION</p>
                    </div>
                    <div  className="py-10">
                        <p className="text-[30px]" style={AlluraFont.style}>Thursday, Dec 12</p>
                    </div>
                    <div className="">
                        <p className="font-medium">6:00 PM - Midnight</p>
                        <p className="font-medium">Lohn Store: 273b Patience Coker Str,</p>
                        <p className="font-medium">Victoria Island. Lagos</p>
                    </div>
                    <div className="py-10 md:pt-10 md:pb-20">
                        <p>Dress Code: Chic</p>
                    </div>
                    <div className="grow md:hidden"> 
                        <p className="font-light text-center text-sm md:text-[16px] mb-[-70px] md:mb-0 z-10">RSVP your attendance <button onClick={()=>registerAgain()} className="underline">here</button></p>
                    </div>
                    <div className="flex bottom-0">
                        <div className="flex-none mt-10 md:mt-[-140px] ml-[-75px]">
                            <Image src={glass2} alt="glass 1" className="w-full h-[25vh] md:h-[40vh]"/>
                        </div>
                        <div className="grow"> 
                            <p className="font-light text-center text-sm md:text-[16px] hidden md:block">RSVP your attendance <button onClick={()=>registerAgain()} className="underline">here</button></p>
                        </div>
                        <div className="flex-none mt-10 md:mt-[-140px] mr-[-60px]">
                            <Image src={glass1} alt="glass 1" className="w-full h-[25vh] md:h-[40vh]"/>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}


export default LemonadeDiariesData;

