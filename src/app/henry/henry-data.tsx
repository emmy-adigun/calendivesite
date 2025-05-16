'use client';
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useFormState } from "react-dom";
import { toast } from "react-toastify";
import { formSubmit } from "./action";

const HenryData = () =>{
    const router = useRouter();
    const [bringingPlusOne, setBringingPlusOne] = useState<boolean | null>(null);
    const [processing, setProcessing] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [state, formAction] = useFormState(formSubmit, {
        error: '',
        success: false
    });

    useEffect(()=>{
        const getSubmitted = localStorage.getItem('submitted');
        if(getSubmitted === 'true'){
            setSubmitted(true);
        }
    }, []);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setProcessing(true);
        const formData = new FormData(e.target as HTMLFormElement);
        formAction(formData);
    };

    useEffect(() => {
        const { error, success } = state;
        if (success) {
            localStorage.setItem('submitted', 'true');
            setProcessing(false);
            toast.success('Processed successfully',{
                position: 'top-center',
            });
            setTimeout(()=>{
                window.location.reload();
            }, 3000) 
        }

        if (error !== '') {
            toast.error(error, {
                position: 'top-center',
            }); 
            setProcessing(false);
        }
    }, [state, router]);
    return(
        <div className="md:flex w-full gap-20 bg-black text-white py-20 px-5 md:px-20 min-h-screen">
            {/* Invite Session */}
            <div className="order-1 md:order-2 w-full md:w-[50%]">
                <div className="w-full text-start space-y-4 p-5 pl-15">

                    {/* Decorative Top Text */}
                    <div className="uppercase text-lg tracking-widest text-white font-light">
                    You Are Invited
                    </div>

                    {/* Main Heading */}
                    <div>
                    <h1 className="text-3xl md:text-2xl font-bold text-white tracking-wide font-sans">              
                        <p>HENRY</p>
                        <p>IS TURNING</p>
                        <p>TWENTY ONE</p>
                    </h1>
                    </div>

                    {/* Event Details */}
                    <div className="space-y-1 text-sm text-gray-300 uppercase font-sans tracking-wide">
                    <p className="text-white font-semibold text-base py-2">
                        3PM On Saturday <span className="text-white">02 November, 2025</span>
                    </p>
                    <p className="text-yellow-500">123 ANYWHERE ST., ANY CITY</p>
                    <div className="">
                        <span>123-456-7890</span> 
                    </div>
                    
                    </div>

                    <div>
                    <p className="text-sm text-gray-300 font-sans leading-[30px]">
                        We&apos;re excited to celebrate with you. Please complete the form to confirm your attendance. Each guest may bring one +1. All plus ones must be verified upon request and approval.
                    </p>

                    <p className="text-sm text-yellow-400 font-sans italic mt-5">
                        Note: A WhatsApp phone number is required to receive your entry code.
                    </p>
                    </div>

                    {/* Footer Hashtag */}
                    <div className="mt-6 text-white font-semibold tracking-widest text-sm">
                    #CLUBNAME
                    </div>
                </div>
            </div>

            {/* Form Session */}
            <div className="order-2 md:order-1 text-white p-6 w-full md:w-[50%]">
                {!submitted? (
                    <form onSubmit={handleSubmit} className="w-full rounded-xl shadow-lg block">
                        <h1 className="text-2xl font-bold md:text-center py-4">Henry&apos;s Birthday Soirée – RSVP</h1>
                        <p className="text-sm text-gray-400 md:text-center py-4">
                            Please complete the form below to confirm your attendance. Each guest is allowed one +1.
                        </p>

                        <div className="py-4">
                            <label htmlFor="name" className="block text-sm font-medium mb-3">
                                Full Name (Primary Guest)
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                placeholder="Enter your first and last name"
                                className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-white"
                            />
                        </div>

                        <div className="py-4">
                            <label htmlFor="phone" className="block text-sm font-medium mb-3">
                                WhatsApp Phone Number
                            </label>
                            <input
                                type="tel"
                                id="phone"
                                required
                                name="phone"
                                placeholder="We&apos;ll use this to send your entry code via WhatsApp"
                                className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-white"
                            />
                        </div>

                        <div className="py-4">
                            <label className="block text-sm font-medium mb-3">
                                Will you be bringing a plus one?
                            </label>
                            <div className="flex items-center space-x-4">
                                <label className="flex items-center mb-3">
                                <input
                                    type="radio"
                                    name="plusOne"
                                    value="yes"
                                    onChange={() => setBringingPlusOne(true)}
                                    className="accent-white"
                                />
                                <span>Yes</span>
                                </label>
                                <label className="flex items-center mb-3">
                                <input
                                    type="radio"
                                    name="plusOne"
                                    value="no"
                                    onChange={() => setBringingPlusOne(false)}
                                    className="accent-white"
                                />
                                <span>No</span>
                                </label>
                            </div>
                        </div>

                        {bringingPlusOne && (
                        <div className="py-4">
                            <div className="">
                                <label htmlFor="plusOneName" className="block text-sm font-medium mb-3">
                                    Full Name of Plus One
                                </label>
                                <input
                                    type="text"
                                    id="plusOneName"
                                    name="plusOneName"
                                    required
                                    placeholder="First and last name"
                                    className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-white"
                                />
                            </div>

                            <div className="py-4">
                                <label htmlFor="instagram" className="block text-sm font-medium mb-2">
                                    Instagram Handle of Plus One
                                </label>
                                <input
                                    type="text"
                                    id="instagram"
                                    name="instagram"
                                    required
                                    placeholder="@username (for verification only)"
                                    className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-white"
                                />
                            </div>
                        </div>
                        )}

                        <button type="submit" className="w-full py-3 bg-white text-black font-semibold rounded hover:bg-gray-200 transition" disabled={processing}>
                            {processing?(
                                'Processing'
                            ):(
                                'Confirm RSVP'
                            )}
                        </button>
                    </form>
                ):(
                    <div className="text-center">
                        <p className="text-green-300">Thank you for RSVPing to Henry&apos;s Birthday Soirée. Your entry code will be sent via WhatsApp before the event. We look forward to celebrating with you.</p>
                    </div>
                )}
            </div>
        </div>
    );
}
export default HenryData;