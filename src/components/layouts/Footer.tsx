import { useGeneralQueries } from '@/hooks/generalQueries';
import {successDataType, wishListErrorType } from '@/hooks/types';
import { SetStateAction, useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const Footer = () => {
    const { consultMethod } = useGeneralQueries({ middleware: 'guest'})
    const [activeTab, setActiveTab] = useState('vas');
    const [processing, setProcessing] = useState(false);
    const [status, setStatus] = useState(0);
    const [email, setEmail] = useState('');
    const [data, setData] = useState<successDataType>({
        data:[],
        message:'',
        status: ''
    });
    const [errors, setErrors] = useState<wishListErrorType>({
        msg: '',
        email: [],
    });
    
    const handleTabActive = (tabName:string) => {
        setActiveTab(tabName);
    };


    const submitForm = async (event: { preventDefault: () => void; }) => {
        event.preventDefault()
        setProcessing(true);
        setStatus(0);
        
        try {
            const consult = await consultMethod({
                email,
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
            const successStatus = data.status;
            if(successStatus == 'success'){
                setProcessing(false);
                toast.success('Sent successfully! We will get back to you shortly', {
                    position: toast.POSITION.TOP_RIGHT,
                });
            }else{
                toast.error('Sorry an error occured while processing your request, please try again.', {
                    position: toast.POSITION.TOP_RIGHT,
                });
            }
            setProcessing(false);
        } else if (status === 422) {
            if (errors) {
                const errorMessages = Object.values(errors).flat();
                const msg = errorMessages[0];
                toast.error(msg, {
                    position: toast.POSITION.TOP_RIGHT,
                });
               
            }
            setProcessing(false);
        }else if (status === 500){
            toast.error('Sorry an internal server error occured while processing your request, please contact the admin.', {
                position: toast.POSITION.TOP_RIGHT,
            });
            setProcessing(false);
        }
    }, [status, errors, data]);

    return(
        <footer className="form--section w-full" id="consultation">
                <div className="container flex flex-col items-center center">
                    <p className="white--header text--30">Made for the Tomorrow, Available Today.<br /> Talk to our Consultants  </p>
                    
                    <div className="form--section__form mt-6">
                        <form onSubmit={submitForm} name="consult" id="consult" 
                            >
                            <div className="input--section">
                                <input 
                                    type="email" 
                                    id="email1" 
                                    name="email" 
                                    className="input--field"
                                    placeholder="your email address"
                                    value={email}
                                    onChange={(event: { target: { value: SetStateAction<string>; }; }) => setEmail(event.target.value)}
                                />
                            </div>
                            <button type="submit" className="btn input bg-color-blue py-2 px-1 md:py-4 md:px-3" 
                            disabled={processing}
                            >
                                 {processing?'Processing...':'Book a Consultation'}
                                </button>
                        </form>
                    </div>
                </div>
              
        </footer>
    );
}

export default Footer;