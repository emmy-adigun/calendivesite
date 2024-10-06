import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from '@headlessui/react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faLocationPin, faUsers, faXmark } from "@fortawesome/free-solid-svg-icons";
import PrimaryButton from "@/components/PrimaryButton";
import { useRouter } from "next/navigation";
import { TrainingCalendarModalProps } from "@/hooks/types";
import Link from "next/link";
import { NumericFormat } from "react-number-format";

const TrainingCalendarModal = ({openModal,setOpenModal, data}:TrainingCalendarModalProps) => {
    const router = useRouter();
    const cancelButtonRef = useRef(null)
    const [processing, setProcessing] = useState(false);
    const handleCloseModal = () => {
        setOpenModal(!openModal);
    }
    const date = new Date(data?.start_date);
    const formattedDate = date.toLocaleDateString('en-US', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
    });

    const time  = new Date(`${data?.start_date} ${data?.start_time}`)
    const formattedTime = time.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true,
    });
    
    return(
        <Transition.Root show={openModal} as={Fragment}>
            <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpenModal}>
                <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </Transition.Child>
        
                <div className="fixed inset-0 z-10 overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enterTo="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200" leaveFrom="opacity-100 translate-y-0 sm:scale-100" leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
                            <Dialog.Panel className="md:w-[80%] h-[400px] transform overflow-hidden rounded-xl bg-white text-left shadow-xl transition-all sm:w-full py-4 px-7">
                                <div className="flex">
                                    <div className="grow px-2 md:px-0">
                                        <h1 className="text-[#142989] text-[20px]">{data?.schedules?.schedule_name} <span  className="capitalize">({data?.training_type?.name})</span></h1>
                                    </div>
                                    <div className="flex-none">
                                        <button onClick={()=>setOpenModal(!openModal)} className="text-xl border-none">
                                            <FontAwesomeIcon icon={faXmark}/>
                                        </button>  
                                    </div>
                                </div>
                                <div className="w-[100%] mt-4 mb-2">
                                    <p className="capitalize"><FontAwesomeIcon icon={faUsers}/> &nbsp; &nbsp;{data?.training_type?.name}</p>
                                    <p className="py-2 capitalize"><FontAwesomeIcon icon={faCalendar}/> &nbsp; &nbsp; &nbsp;{formattedDate} {formattedTime}</p>
                                    <p className="capitalize"><FontAwesomeIcon icon={faLocationPin}/> &nbsp; &nbsp; &nbsp;{data?.venue}</p>
                                    <p className="capitalize">&#8358; &nbsp; &nbsp; &nbsp;<NumericFormat value={data?.schedules.pricing?.amount} allowLeadingZeros thousandSeparator="," /></p>
                                </div>
                                <hr />
                                <div className="w-[100%]  my-5">
                                    <p>{data?.schedules?.description.substr(0,400)}</p>
                                </div>
                                <hr />
                                <div className="flex fixed-bottom mt-5">
                                    <div className="grow">
                                        <PrimaryButton type="button" onClick={() => handleCloseModal()} className="border py-1 px-3 bg-[#E5E5E5] hover:border-[#E5E5E5] text-blue-900 hover:text-blue-900" disabled={false}>Close</PrimaryButton>
                                    </div>
                                    <div className="form-group">
                                        <Link href={data?.link} target="_blank" className="border border-[#142989] py-1 px-3 bg-[#E5E5E5] hover:border-[#142989] text-[#142989]  rounded">Learn More</Link>
                                    </div>
                                </div>
                                
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    );
}
export default TrainingCalendarModal