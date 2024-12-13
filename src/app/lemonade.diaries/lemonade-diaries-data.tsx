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

    useEffect(() => {
        if (status === 200) {
            setProcessing(false);
            toast.success(data.message, {
                position: toast.POSITION.TOP_RIGHT,
            });
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
        <div className="w-full">
            <div className="w-full">
                <div className="w-full bg-[#FEEAA9] text-center py-10">
                    <h1 className="text-[60px] md:text-[64px] leading-[60px] font-serif">Lemonade <br/> Diaries</h1>
                    <h5 className="text-[21px] mt-3">Event RSVP</h5>
                </div>
                <div className="w-full md:w-[50%] mx-auto px-5 md:px-10 pt-10 md:flex">
                    <h3 className="font-semibold text-[20px]">Follow us on <FontAwesomeIcon icon={faInstagram} className="bg-black text-white px-1 py-[2.5px] rounded-full text-[14px]"/></h3>
                    <Link href="https://www.instagram.com/latsthedj?igsh=bWFuZHpvaGx4eDYw" target="_blank" className="text-[16px] mx-0 md:mx-10 mt-0 md:mt-1">@latsthedj</Link><br/>
                    <Link href="https://www.instagram.com/lemonade.diaries?igsh=MXBjd2N2b3pkbnV3" target="_blank" className="text-[16px] mt-0 md:mt-1">@lemonade.diaries</Link>
                </div>
                
                <form onSubmit={submitForm} method="post" className="block mt-5">
                    <div className="grid grid-cols-1 gap-4 md:gap-10 px-5 md:px-10 w-full md:w-[50%] mx-auto">
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
    )
}


export default LemonadeDiariesData;

