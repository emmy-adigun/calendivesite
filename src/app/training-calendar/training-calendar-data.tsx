'use client';
import SelectOptionField from "@/components/FormFields/SelectOptionField";
import PrimaryButton from "@/components/PrimaryButton";
import TrainingCalendar from "@/components/TrainingCalendar";
import CountriesData from "@/data/CountriesData";
import TimezoneData from "@/data/TimezoneData";
import TrainingCourseCategoryData from "@/data/TrainingCourseCategoryData";
import TrainingTypeData from "@/data/TrainingTypeData";
import { useGeneralQueries } from "@/hooks/generalQueries";
import { errorDataType, filterTrainingErrorDataType, successDataType } from "@/hooks/types";
import { useEffect, useState } from "react";
import TrainingCalendarModal from "@/components/Modals/TrainingCalendarModal";

const TraingCalendarData = () => {
    const { getAllTraingSchdeulesMethod } = useGeneralQueries({ middleware: 'guest' });
    const trainingType = TrainingTypeData();
    const courseCategory = TrainingCourseCategoryData();
    const getCountry = CountriesData();
    const getTimezone = TimezoneData();

    const [training_type, setTrainingType] = useState("");
    const [course_category, setCourseCategory] = useState("");
    const [country, setCountry] = useState("");
    const [timezone, setTimezone] = useState("");
    const [getInfo, setGetInfo] = useState<successDataType>({
        data:[],
        message:'',
        status: ''
    })
    const [errors, setErrors] = useState<filterTrainingErrorDataType>({
        msg: '',
        course_category: [],
        country: [],
        training_type: []
    })
    const [dataStatus, setDataStatus] = useState(0);

    const getData = async () => {
        setDataStatus(0);
        setGetInfo({
            data: [],
            message: '',
            status: ''
        });
        try {
            const allEvents = await getAllTraingSchdeulesMethod({
                training_type,
                course_category,
                country,
                setErrors,
                setDataStatus,
                setGetInfo
            });
        } catch (error) {
            console.error('Error:', error);
        }
    }

    useEffect(()=>{ 
        getData();
    }, []);

    console.log(getInfo);
  

   

    const submitForm = async (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        getData();
    }

    

    const [openModal, setOpenModal] = useState(false);
    const [eventData, setEventData] = useState<any>();
    const clickedEvent = (event:any) => {
        setOpenModal(true);
        const activeEvent = getInfo?.data[1].find((item:any)=> item.id == event.event.id);
        if(activeEvent){
            setEventData(activeEvent);
        }
    }

    return (
        <>
            <div className="w-[100%] md:h-[19vh] bg-[#EFEFEF] p-2">
                    <div className="bg-[#142989] w-[100%] rounded">
                        <form onSubmit={submitForm}>
                            <div className="w-[100%] bg-white rounded">
                                <div className="w-[100%] md:flex">
                                    <div className="form-group m-3 grow">
                                        <SelectOptionField 
                                            name="training_type"
                                            id="training_type" 
                                            options={trainingType}
                                            onChange={(selectedOptionValue) => setTrainingType(selectedOptionValue)}
                                            previousOption={""}
                                            placeholder="Type"
                                            className=""               
                                        />
                                    </div>
                                    <div className="form-group m-3  grow">
                                        <SelectOptionField 
                                            name="course_category"
                                            id="course_category" 
                                            options={courseCategory}
                                            onChange={(selectedOptionValue) => setCourseCategory(selectedOptionValue)}
                                            previousOption={""}
                                            placeholder="Course Category" 
                                            className=""                
                                        />
                                    </div>
                                    <div className="form-group m-3 grow">
                                        <SelectOptionField 
                                            name="country"
                                            id="country" 
                                            options={getCountry}
                                            onChange={(selectedOptionValue) => setCountry(selectedOptionValue)}
                                            previousOption={""}
                                            placeholder="Country" 
                                            className=""                
                                        />
                                    </div>
                                    <div className="flex-none">
                                        <div className="flex">
                                            <div className="form-group grow m-3">
                                                <PrimaryButton type="button" className="border py-1 px-3 bg-gray-400 hover:border-[#E5E5E5] text-white hover:text-[#142989]" disabled={false}>Reset</PrimaryButton>
                                            </div>
                                            <div className="form-group m-3">
                                                <PrimaryButton type="submit" className="border py-1 px-3 bg-[#142989] hover:border-[#142989] hover:text-blue-900" disabled={false}>Apply</PrimaryButton>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                            <div className="w-[100%] p-3">
                                <div className="form-group w-[100%] md:w-[40%]">
                                    <SelectOptionField 
                                        name="timezone"
                                        id="timezone" 
                                        options={getTimezone}
                                        onChange={(selectedOptionValue) => setTimezone(selectedOptionValue)}
                                        previousOption={""}
                                        placeholder="(UTC-08:00) Pacific Time (US & Canada)"
                                        className="bg-[#142989]"                
                                    />
                                </div>
                            </div>
                        </form>
                    </div>
            </div>
            <div className="w-[100%] p-2 overflow-x-auto">
                <TrainingCalendar eventData={getInfo.data[0]} clickedEvent={clickedEvent}/>
                <TrainingCalendarModal openModal={openModal} setOpenModal={setOpenModal} data={eventData}/>
            </div>
            
            
        </>
    )
}

export default TraingCalendarData;
