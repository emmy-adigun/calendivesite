import { useGeneralQueries } from "@/hooks/generalQueries";
import { successDataType, wishListErrorType } from "@/hooks/types";
import { SetStateAction, useEffect, useState } from "react";
import { toast } from "react-toastify";

const WaitListData = () => {
    const { waitListMethod } = useGeneralQueries({ middleware: 'guest' });
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState(0);
    const [processing, setProcessing] = useState(false);
    const [errors, setErrors] = useState<wishListErrorType>({
        email: [],
        msg: ''
    });

    const [data, setData] = useState<successDataType>({
        data: [],
        message: '',
        status: ''
    });
        
    
    const submitForm = async (event: { preventDefault: () => void; }) => {
        event.preventDefault()
        setProcessing(true);
        setStatus(0);
        try {
            const sendWaitlist = await waitListMethod({
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
            setProcessing(false);
            toast.success('Your request has been processed successfully, we will get back to you shortly.', {
                position: toast.POSITION.TOP_LEFT,
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
    return (
        <form method="post" onSubmit={submitForm}>
            <div className="mx-auto h-14 flex mt-[30px] relative">
                <div className="grow">
                    <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        className="w-full pl-3 h-full border-[0.5px] border-[#AFAFAF] rounded-tl-[12px] rounded-bl-[12px]"
                        placeholder="Email Address"
                        value={email}
                        required
                        onChange={(event: { target: { value: SetStateAction<string>; }; }) => setEmail(event.target.value)}
                    />
                </div>
                <div className="bg-[#0A70E0] text-center h-full flex px-2 md:px-4  rounded-tr-[12px] rounded-br-[12px] relative">
                    <button type="submit" className="text-white leading-tight" disabled={processing}>
                        {processing?(
                            'Processing...'
                        ):(
                            'Join Waitlist'
                        )}
                    </button>
                </div>
            </div>
        </form>
    );
}
export default WaitListData;