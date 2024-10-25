'use client';
import Image from "next/image";
import musicIcon from "../../../public/images/music_icon.svg"
import djlats from "../../../public/images/djlats.png"
import Input from "@/components/FormFields/Input";
import Label from "@/components/FormFields/Label";
import { SetStateAction, useEffect, useState } from "react";
import PrimaryButton from "@/components/PrimaryButton";
import { djLatsEventRegErrorType, successDataType } from "@/hooks/types";
import { toast } from "react-toastify";
import { useGeneralQueries } from "@/hooks/generalQueries";
import { AdleryFont, AdleryFont2 } from "../font";

const LatsTheDjData = ()=>{
    const { registerForDjLatsEvents } = useGeneralQueries({ middleware: 'guest' });
    const [name,  setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [processing, setProcessing] = useState(false);
    const [status, setStatus] = useState(0);
    const [errors, setErrors] = useState<djLatsEventRegErrorType>({
        msg: '',
        name: [],
        email: [],
        phone: []
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
            const register = await registerForDjLatsEvents({
                name,
                email,
                phone,
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
        } else if (status === 422 || status === 404) {
            if (errors) {
                toast.error(errors.msg, {
                    position: toast.POSITION.TOP_LEFT,
                });
                setProcessing(false);
            }
        }else if(status === 500){
            toast.error('Sorry an internal server error occured, please contact the technical support team.', {
                position: toast.POSITION.TOP_LEFT,
                
            });
            setProcessing(false);
        }
    }, [status, errors]);

   
    
    return(
        <div className="w-full">
            <div className="flex w-full bg-gradient-to-r from-[#431A56] to-[#2E044E]">
                <div  className="w-[40%] md:w-[20%]">
                    <Image src={djlats} alt="Lats the DJ" className="w-full h-full"/>
                </div>
                <div className="w-[60%] md:w-[80%] py-[40px]">
                    <Image src={musicIcon} alt="music icon" className="mx-auto"/>
                    <div className="text-center text-white mt-1">
                        <h1 className={`leading-normal font-medium text-[69px]`} style={AdleryFont.style}>JOIN THE VIBE WITH</h1>
                        <h1 className="font-medium text-[28px] leading-normal mt-1">LATS THE DJ</h1>
                    </div>
                </div>
            </div>
            <div className="p-5 w-full lg:w-[50%] mx-auto">
                <p  className="text-[19px] font-normal text-[#2E044E]">Be the first to know about exclusive events, special offers, and updates from Lats the DJ. Sign up now and stay connected!</p>
                <form onSubmit={submitForm} method="post" className="block mt-5">
                    <div className="form-group mt-4">
                        <Label htmlFor="name">Name*</Label>
                        <Input
                            id="name"
                            type="text"
                            value={name}
                            className={`block mt-1 w-full px-3 ${errors.name.length > 0 ? 'border-red-500' : ''}`}
                            onChange={(event: { target: { value: SetStateAction<string>; }; }) => setName(event.target.value)}
                            placeholder="Enter your name"
                        /> 
                    </div>
                    <div className="form-group mt-5">
                        <Label htmlFor="phone">Mobile Number*</Label>
                        <Input
                            id="phone"
                            type="phone"
                            value={phone}
                            className={`block mt-1 w-full px-3 ${errors.phone.length > 0 ? 'border-red-500' : ''}`}
                            onChange={(event: { target: { value: SetStateAction<string>; }; }) => setPhone(event.target.value)}
                            placeholder="Enter your mobile number"
                        /> 
                    </div>
                    <div className="form-group mt-5">
                        <Label htmlFor="email">Email*</Label>
                        <Input
                            id="email"
                            type="email"
                            value={email}
                            className={`block mt-1 w-full px-3 ${errors.email.length > 0 ? 'border-red-500' : ''}`}
                            onChange={(event: { target: { value: SetStateAction<string>; }; }) => setEmail(event.target.value)}
                            placeholder="Enter your email"
                        /> 
                    </div>
                    
                    <div className="form-group mt-5">
                        <PrimaryButton type="submit" className="w-full py-3 bg-[#2D034D] border-[#2D034D] rounded-[4px] text-white" disabled={processing}>
                            {processing?(
                                <>Processing...</>
                            ):(
                                <>Register</>
                            )}
                        </PrimaryButton>
                    </div>
                </form>
            </div>
            <div className="w-full pt-20 md:py-10">
                <p className="text-center text-[16px] font-normal text-[#2E044E]">&copy; 2024 Calendive. All Rights Reserved</p>
            </div>
        </div>
    )
}


export default LatsTheDjData;

