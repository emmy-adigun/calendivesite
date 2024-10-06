import Image from "next/image";
import { SetStateAction, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { successDataType, wishListErrorType } from "@/hooks/types";
import { useGeneralQueries } from "@/hooks/generalQueries";

const Header = () => {
    const { waitListMethod } = useGeneralQueries({ middleware: 'guest'})
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

    const submitForm = async (event: { preventDefault: () => void; }) => {
        event.preventDefault()
        setProcessing(true);
        setStatus(0);
        
        setErrors({
            msg: '',
            email: [],
        });
        try {
            const consult = await waitListMethod({
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
    const textArray = ["WorkSpace", "Appointments", "Calendar", "Events", "Interviews"];
    
    return(
        <header className="header-section w-full">
            <section className="md:flex md:justify-center md:items-center relative">
                {/* <!-- Top Left Icon --> */}
                <div className="icon bell-icon">
                    <Image src="assets/icons/svg/bell.svg" alt="Bell Icon" width={56} height={56}/>
                </div>
                {/* <!-- Top Right Icon --> */}
                <div className="icon calendar-icon">
                    <Image src="assets/icons/svg/calendar.svg" alt="Calendar icon" width={56} height={56}/>
                </div>
                <div className="icon chat-icon">
                    <Image src="assets/icons/svg/chat.svg" alt="Chat icon" width={50} height={50}/>
                </div>
                {/* <!-- Bottom Left Icon --> */}
                <div className="icon location-icon">
                    <Image src="assets/icons/svg/location.svg" alt="Location Icon" width={56} height={56}/>
                </div>
                {/* <!-- Bottom Right Icon --> */}
                <div className="icon clock-icon">
                    <Image src="assets/icons/svg/clock.svg" alt="Icon 4" width={56} height={56}/>
                </div>
                <div className="w-full md:w-[580px] flex flex-col items-center text-center mt-5">
                    <h3 className="header--section__text1 mb-3 text-[30px] md:text-[40px]">Todos & Calendar</h3>
                    <p className="main--text--14 px-5">
                        Start organising your workspace and your schedule with Calendive. Setup and manage your calendar
                        bookings, events and your interviews so you never miss a booking.
                    </p>
                </div>
            </section>
            <section className="w-full md:w-[50%] mx-auto mt-5 md:mt-0">
                <div className="mt-6 px-5 w-full">
                    <form onSubmit={submitForm} name="consult" id="consult">
                        <div className="flex w-full">
                            <div className="grow">
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="w-full border py-3 px-3"
                                    placeholder="your email address"
                                    value={email}
                                    onChange={(event: { target: { value: SetStateAction<string>; }; }) => setEmail(event.target.value)}
                                />
                            </div>
                            
                            <button type="submit" className="bg-color-blue py-2 px-1 md:py-1 md:px-3 flex-none leading-tight input">
                                Join the <br/>Waitlist
                            </button>
                        
                        </div>
                    </form>
                </div>
            </section>
        </header>

    );

}

export default Header;