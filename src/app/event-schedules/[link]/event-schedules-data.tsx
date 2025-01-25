'use client';
import Input from "@/components/FormFields/Input";
import Label from "@/components/FormFields/Label";
import TextArea from "@/components/FormFields/TextArea";
import PrimaryButton from "@/components/PrimaryButton";
import VanillaCalendar from "@/components/VanillaCalendar";
import { candidateInfoErrorType, successDataType } from "@/hooks/types";
import { faArrowLeft, faCalendar, faCheckCircle, faClock, faEnvelope, faGlobe, faMapPin, faPhoneAlt, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SetStateAction, useEffect, useState } from "react";
import FormatDate from '@/components/FormatDate';
import ScheduledEventData from "@/data/scheduled-event";
import { toast } from "react-toastify";
import { useGeneralQueries } from "@/hooks/generalQueries";
import Link from "next/link";

const EventSchedulesData = ({params}:any) => {
    const { sendCandidateAvailabilityMethod } = useGeneralQueries({ middleware: 'guest' });
    const scheduledEvent = ScheduledEventData(params.link);
    const scheduleData = scheduledEvent?.schedule_dates;
    const scheduleDate = scheduledEvent?.dates;
    console.log(scheduleDate);
    const options: never[] = [];
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [comment, setComment] = useState('');
    const [timezone, setTimezone] = useState('');
    const [amount, setAmount] = useState(scheduledEvent.price);
    const [transaction_reference, setTransactionReference] = useState('');
    const [step, setStep] = useState(1);
    const [status, setStatus] = useState(0);
    const [selectedDate, setSelectedDate]  = useState('');
    const [selectedTime, setSelectedTime] = useState('');
    const [duration, setDuration] = useState(scheduledEvent.time_interval);
    const [filteredTimes, setFilteredTimes] = useState<string[]>([]);

    const [processing, setProcessing] =  useState(false);
    const today = new Date();
    const startDate = scheduledEvent?.start_date? scheduledEvent?.start_date : today;
    const endDate = scheduledEvent?.end_date? scheduledEvent?.end_date : today;
    const schedule_id =  scheduledEvent.schedule_id;

    const [errors, setErrors] = useState<candidateInfoErrorType>({
        msg: '',
        email: [],
        name: [],
        phone: [],
        comment: [],
        selectedDate: [],
        selectedTime: [],
        schedule_id:  [],
        duration: []
    })

    const [data, setData] = useState<successDataType>({
        message:'',
        data: [],
        status: ''
    });

    const handdleBackNext = (type:string) => {
        if(type === 'back'){
            setStep(1);
        }else if(type === 'next'){
            if(selectedTime  == '' || selectedDate == ''){
                toast.error('Please select a date and time', {
                    position: toast.POSITION.TOP_LEFT,
                });
                return
            }
            setStep(2);
        }
    }

    const handleDateSelection = (date: string) => {
        if (selectedDate !== date) {
            setSelectedDate(date);
            const selectedSchedule = scheduleData.find((item: any) => item.date === date);
            setFilteredTimes(selectedSchedule ? selectedSchedule.time : []);
        }
    };
    
    const submitForm = async (event: { preventDefault: () => void; }) => {
        event.preventDefault()
        setProcessing(true);
        setStatus(0);
        try {
            const sendAvailability = await sendCandidateAvailabilityMethod({
                name,
                email,
                phone,
                comment,
                selectedDate,
                selectedTime,
                schedule_id,
                duration,
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
            if(scheduledEvent.price != 0){
                setAmount(scheduledEvent.price);
                setTransactionReference(data.data.transaction_reference);
                setStep(3);
            }else{
                setStep(4);
            }
            setProcessing(false);
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
    const sn  =  1;
    

    return(
        <div className="w-full">
            {scheduledEvent != ""? (
                <>
                    <div className="py-5 bg-[#4285F4]">
                        <h1 className="text-center text-white text-[30px]">{scheduledEvent.name}</h1>
                    </div>
                    <div className="py-10 container">
                        {step === 1 && (
                            <div className="md:flex gap-20">
                                <div className="grow border-r">
                                    <p>{scheduledEvent.name}</p>
                                    <FontAwesomeIcon icon={faClock}/>  
                                    <span>
                                        {scheduledEvent.time_interval} Minutes
                                    </span>
                                </div>
                                <div className="md:grid md:grid-cols-2 gap-20">
                                    <div className="">
                                        <h3>Select Date and Time</h3>
                                        <div className="ml-[-30px]">
                                            <VanillaCalendar
                                                config={{
                                                    settings: {
                                                        range: {
                                                            disableAllDays: true,
                                                            enabled: scheduleDate,
                                                        },
                                                        selected: {
                                                            dates: [selectedDate],
                                                        },
                                                    },
                                                    actions: {
                                                        clickDay(event, self) {
                                                            const clickedDate = self.selectedDates[0];
                                                            if (clickedDate) {
                                                                handleDateSelection(clickedDate);
                                                            }
                                                        },
                                                    },
                                                }}
                                            />
                                        </div>
                                        <div>
                                            <p>Timezone</p><FontAwesomeIcon icon={faGlobe}/>
                                            <select name="timezone" id="timezone">
                                                <option value="wat">West Africa Time {`(${today.getHours()}:${today.getMinutes()})`}</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="mt-10 md:mt-0">
                                        <p>
                                            {selectedDate && <FormatDate dateString={selectedDate} />}
                                        </p>
                    
                                        {filteredTimes.length > 0 ? (
                                            filteredTimes.map((time, index) => (
                                                <div
                                                    key={index}
                                                    className={`border border-blue-300 p-3 text-center font-bold text-blue-500 ${
                                                        selectedTime === time
                                                            ? "bg-blue-500 text-white"
                                                            : ""
                                                    }`}
                                                >
                                                    <button onClick={() => setSelectedTime(time)}>
                                                        {time}
                                                    </button>
                                                </div>
                                            ))
                                        ) : (
                                            <p>Please select your availability date.</p>
                                        )}
                    
                                        <div className="mt-5">
                                            <button
                                                type="button"
                                                className="w-[40%] py-2 rounded-xl bg-blue-500 text-white border border-[#0169FF] hover:text-[#0169FF]"
                                                onClick={() => handdleBackNext('next')}
                                                disabled={!selectedTime}
                                            >
                                                Next
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                        {step === 2 && (
                            <div className="md:flex gap-30">
                                <div className="flex-none border-r pr-0 md:pr-20">
                                    <div>
                                        <button onClick={()=>handdleBackNext('back')}>
                                            <p className="border border-blue-300 p-[10px] w-[40px] h-[42px] rounded-full">
                                                <FontAwesomeIcon icon={faArrowLeft} className="text-blue-500"/>
                                            </p>
                                        </button>
                                    </div>
                                    <div className="mt-10 pt-5 font-semibold text-gray-900">
                                        <p className="mb-5">{scheduledEvent.name}</p>
                                        <FontAwesomeIcon icon={faClock}/>  <span className="mx-2">1hr</span>
                                    </div>
                                    <div className="mt-10">
                                        <p>
                                            <FontAwesomeIcon icon={faCalendar}/> 
                                            <span className="mx-3">{selectedTime}, <FormatDate dateString={selectedDate}/></span>
                                        </p>
                                    </div>
                                    <div className="mt-5">
                                        <p>
                                            <FontAwesomeIcon icon={faMapPin}/>
                                            <span className="mx-3">West African Time</span>
                                        </p>
                                    </div>
                                </div>
                                <div className="grow p-5">
                                    <p>
                                        {scheduledEvent.price != '0' && (
                                            <>This is a paid event, please note that you will be redirected to make payment to continue.</>
                                        )}
                                    </p>
                                    <h1 className="font-semibold">Enter  Details</h1>
                                
                                    <form  onSubmit={submitForm} className="form">
                                        <div className="form-group mt-4">
                                            <Label htmlFor="name">Name*</Label>
                                            <Input
                                                id="name"
                                                type="text"
                                                value={name}
                                                className={`block mt-1 w-full md:w-[80%] px-3 ${errors.name.length > 0 ? 'border-red-500' : ''}`}
                                                onChange={(event: { target: { value: SetStateAction<string>; }; }) => setName(event.target.value)}
                                            /> 
                                        </div>
                                        <div className="form-group mt-5">
                                            <Label htmlFor="email">Email*</Label>
                                            <Input
                                                id="email"
                                                type="email"
                                                value={email}
                                                className={`block mt-1 w-full md:w-[80%] px-3 ${errors.email.length > 0 ? 'border-red-500' : ''}`}
                                                onChange={(event: { target: { value: SetStateAction<string>; }; }) => setEmail(event.target.value)}
                                            /> 
                                        </div>
                                        <div className="form-group mt-5">
                                            <Label htmlFor="phone">Phone Number*</Label>
                                            <Input
                                                id="phone"
                                                type="phone"
                                                value={phone}
                                                className={`block mt-1 w-full md:w-[80%] px-3 ${errors.phone.length > 0 ? 'border-red-500' : ''}`}
                                                onChange={(event: { target: { value: SetStateAction<string>; }; }) => setPhone(event.target.value)}
                                            /> 
                                        </div>
                                        <div className="form-group mt-5">
                                            <Label htmlFor="phone">Please share anything that will help prepare for our meeting.</Label>
                                            <TextArea 
                                                name="comment" 
                                                id="comment" 
                                                className={`block mt-1 w-full md:w-[80%] px-3 ${errors.comment.length > 0 ? 'border-red-500' : ''}`}
                                                value={comment}
                                                onChange={(event: { target: { value: SetStateAction<string>; }; }) => setComment(event.target.value)}
                                                rows={4}
                                            />
                                        </div>
                                        <div className="form-group mt-5">
                                            <PrimaryButton type="submit" className="w-[30%] py-3 bg-blue-500 text-white rounded border border-[#0169FF] hover:text-[#0169FF]" disabled={processing}>
                                                {processing?(
                                                    <>Processing...</>
                                                ):(
                                                    <>Schedule Event</>
                                                )}
                                            </PrimaryButton>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        )}

                        {step === 3 && (
                             <div className="md:flex gap-30">
                                <div className="flex-none border-r pr-0 md:pr-20">
                                    <h2>
                                        <FontAwesomeIcon icon={faUser}/>
                                        <span className="mx-3">{name}</span>
                                    </h2>
                                    <h2>
                                        <FontAwesomeIcon icon={faEnvelope}/>
                                        <span className="mx-3">{email}</span>
                                    </h2>
                                    <h2 className="mt-3">
                                        <FontAwesomeIcon icon={faClock}/>
                                        <span className="mx-3">{selectedTime}, <FormatDate dateString={selectedDate}/></span>
                                    </h2>
                                    <h2 className="mt-3">
                                        <FontAwesomeIcon icon={faMapPin}/>
                                        <span className="mx-3">West African Time</span>
                                    </h2>
                                    <h2 className="mt-3">
                                        <FontAwesomeIcon icon={faPhoneAlt}/>
                                        <span className="mx-3">{phone}</span>
                                    </h2>
                                </div>
                                <div className="grow p-5">
                                    <h1 className="font-semibold">Confirm Payment Details</h1>
                                    <p>You are about to pay the amount below for this event.</p>
                                    <form action={process.env.NEXT_PUBLIC_INTERSWITCH_PAYMENT_ACTION_URL} method="post" className="form">
                                        <input name="merchant_code" value={process.env.NEXT_PUBLIC_INTERSWITCH_MERCHANT_CODE} type="hidden"/>
                                        <input name="pay_item_id" value={scheduledEvent.schedule_id} type="hidden"/>
                                        <input name="site_redirect_url" value={process.env.NEXT_PUBLIC_INTERSWITCH_PAYMENT_REDIRECT_URL} type="hidden"/>
                                        <input name="txn_ref" value={transaction_reference} type="hidden"/>
                                        <input name="currency" value="566" type="hidden" />
                                        <div className="form-group mt-4">
                                            <Label htmlFor="name">Amount*</Label>
                                            <Input
                                                id="amount"
                                                type="number"
                                                value={amount}
                                                className={`block mt-1 w-full md:w-[80%] px-3 ${errors.name.length > 0 ? 'border-red-500' : ''}`}
                                                onChange={(event: { target: { value: SetStateAction<string>; }; }) => setAmount(event.target.value)}
                                            /> 
                                        </div>
                                        <div className="form-group mt-5">
                                            <PrimaryButton type="submit" className="w-[30%] py-3 bg-blue-500 text-white rounded border border-[#0169FF] hover:text-[#0169FF]" disabled={processing}>
                                                {processing?(
                                                    <>Processing...</>
                                                ):(
                                                    <>Click Here to Proceed.</>
                                                )}
                                            </PrimaryButton>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        )}

                        {step === 4 && (
                            <div className="mt-10 w-full">
                                <div className="text-center">
                                    <h1 className="font-semibold">
                                        <FontAwesomeIcon icon={faCheckCircle} className="text-green-800" />
                                        <span>You are scheduled</span>
                                    </h1>
                                    <p className="mt-10">A calendar invitation has been sent to your email address</p>
                                </div>
                                <div className="border mt-20 md:w-[50%] mx-auto py-10 px-5">
                                    <h2>
                                        <FontAwesomeIcon icon={faUser}/>
                                        <span className="mx-3">{name}</span>
                                    </h2>
                                    <h2>
                                        <FontAwesomeIcon icon={faEnvelope}/>
                                        <span className="mx-3">{email}</span>
                                    </h2>
                                    <h2 className="mt-3">
                                        <FontAwesomeIcon icon={faClock}/>
                                        <span className="mx-3">{selectedTime}, <FormatDate dateString={selectedDate}/></span>
                                    </h2>
                                    <h2 className="mt-3">
                                        <FontAwesomeIcon icon={faMapPin}/>
                                        <span className="mx-3">West African Time</span>
                                    </h2>
                                    <h2 className="mt-3">
                                        <FontAwesomeIcon icon={faPhoneAlt}/>
                                        <span className="mx-3">{phone}</span>
                                    </h2>
                                </div>
                            </div>
                        )}
                    </div>
                </>
            ):(
                <div className="mt-[200px]  text-center">
                    <h1>
                       Loading...
                    </h1>
                    <div className="my-5">
                        <Link href="/" className="px-10 py-5 bg-[#4285F4] text-white">Home</Link>
                    </div>
                </div>
            )}
        </div>
    )
}

export default EventSchedulesData;