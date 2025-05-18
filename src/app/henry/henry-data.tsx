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
    const [submitted, setSubmitted] = useState(true);
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
        <div className="bg-black text-white py-20 px-5 md:px-20 min-h-screen w-full">
            {!submitted? (
                <div className="md:flex w-full gap-20">
                    <div className="order-1 md:order-2 w-full md:w-[50%]">
                        <div className="w-full text-start space-y-4 p-5 pl-15">
                            <h1 className="uppercase text-2xl tracking-widest text-white font-bold">
                                Henry&apos;s Birthday Soirée - RSVP
                            </h1>
                            <div>
                                <p className="text-sm text-gray-300 font-sans leading-[30px]">
                                    We&apos;re excited to celebrate with you. Please complete the form to confirm your attendance. Each guest may bring a +1. 
                                </p>
                                <p className="text-yellow-400 text-sm font-sans leading-[30px]">All plus ones must be verified upon request and approval.</p>

                                <p className="text-sm text-yellow-400 font-sans italic mt-5">
                                    Note: A WhatsApp phone number with the correct country code is required to receive your entry code.
                                </p>
                                
                            </div>
                        </div>
                    </div>

                    <div className="order-2 md:order-1 text-white p-6 w-full md:w-[50%]">
                        <form onSubmit={handleSubmit} className="w-full rounded-xl shadow-lg block">
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
                                        value="Yes"
                                        onChange={() => setBringingPlusOne(true)}
                                        className="text-black"
                                    />
                                    <span>Yes</span>
                                    </label>
                                    <label className="flex items-center mb-3">
                                    <input
                                        type="radio"
                                        name="plusOne"
                                        value="No"
                                        onChange={() => setBringingPlusOne(false)}
                                        className="text-black"
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
                    </div>
                </div>
            ):(
                <div className="text-white py-20 md:w-[80%] mx-auto">
                    <p className="py-3">Thank you for RSVPing to Henry&apos;s Birthday Soirée, we&apos;re excited to have you on the guest list!</p>

                    <p className="py-3">Please note the following:
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Your unique entry code will be sent to the WhatsApp number you provided.</li>
                            <li>If you indicated that you&apos;re bringing a plus one, please follow up to confirm their verification and approval.</li>
                            <li>Entry will only be granted with a valid code, so be sure to check your WhatsApp messages as the event date approaches.</li>
                        </ul>
                    </p>

                    <p className="py-3">We can&apos;t wait to celebrate with great music, good vibes, and unforgettable moments. Dress to impress and get ready for a night to remember.</p>

                    <p className="pt-3">See you soon!</p>
                </div>
            )}
        </div>
    );
}
export default HenryData;