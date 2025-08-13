'use client';
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useFormState } from "react-dom";
import { toast } from "react-toastify";
import { formSubmit } from "@/app/api/action";

const AimaFormData = () =>{
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
        <div>
            {!submitted? (
                <div className="md:flex aima_bg text-white py-20 px-5 md:px-20 min-h-screen w-full drop-shadow-2xl">
                    <div className="order-1 md:order-2 w-full md:w-[50%] drop-shadow-2xl">
                        <div className="w-full text-start space-y-4 p-5 pl-15">
                            <h1 className="uppercase text-2xl tracking-widest text-white font-bold">
                                Aima&apos;s Love Aisland Birthday Celebration - RSVP

                            </h1>
                            <div>
                                <p className="text-sm text-gray-300 font-sans font-semibold leading-[30px] drop-shadow-lg">
                                    We&apos;re excited to celebrate with you. Please complete the form to confirm your attendance. Each guest may bring a +1.
                                </p>
                                <p className="text-yellow-400 text-sm font-sans leading-[30px] font-bold drop-shadow-lg">All plus ones must be verified upon request and approval.</p>

                                <p className="text-sm text-yellow-400 font-bold font-sans italic mt-5 drop-shadow-lg">
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
                <div className="aima_bg_2 text-white py-20 px-5 md:px-20 min-h-screen w-full drop-shadow-2xl">
                    <p className="py-3">Thank you for RSVPing to Aima&apos;s Love Aisland Birthday Celebration, we&apos;re excited to have you on the guest list!</p>

                    <p className="py-3">Please note the following:
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Your unique entry code will be sent to the WhatsApp number you provided.</li>
                            <li>If you indicated that you&apos;re bringing a plus one, please follow up to confirm their verification and approval.</li>
                            <li>Entry will only be granted with a valid code, so be sure to check your WhatsApp messages as the event date approaches.</li>
                        </ul>
                    </p>

                    <p className="py-3">We&apos;re buzzing to party the night away with banging tunes, cheeky vibes, and memories you&apos;ll never forget. Dress to slay, bring your best energy, and let&apos;s make it a night to live for.</p>

                    <p className="pt-3">See you soon!</p>
                </div>
            )}
            <div className="text-center bg-black">
                <p className="text-white">&copy; {new Date().getFullYear()} Calendive. All Rights Reserved</p>
            </div>
        </div>
    );
}
export default AimaFormData;