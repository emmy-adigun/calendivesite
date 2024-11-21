'use client'
import Image from "next/image";
import calendar1 from "../../../public/images/calendar1.png";
import calendar2 from "../../../public/images/calendar2.png";
import calendar3 from "../../../public/images/calendar3.png";
import bell from  "../../../public/images/bell.png";
import location from "../../../public/images/location.png";
import clock from "../../../public/images/clock.png";
import calendar from "../../../public/images/calendar.png"
import chat from "../../../public/images/chat.png";
import trustedby from "../../../public/images/Trustedby.png"
import schedule from "../../../public/images/schedule.png";
import spa from "../../../public/images/spa.png";
import training from "../../../public/images/training.png";
import consulting from "../../../public/images/consulting.png";
import event from "../../../public/images/event.png";
import hr from "../../../public/images/hr.png";
import ConsultationListData from "./consultation-list-data";
import WaitListData from "./waitlist-data";
  

const HomeData = () => {
    return (
        <div className="w-full">
            <section className="grid justify-center my-5 w-full">
                <div className="flex w-[95%] mx-auto">
                    <div className="w-[16%] md:w-[28%]">
                        <div className="grid justify-end mt-[50px] mr-[0px]">
                            <div className="w-[40px] md:w-[45px] h-[40px] md:h-[45px] bg-[#E9A302] rotate-[37.26deg] rounded-[8px] md:rounded-[12px]">
                                <Image src={bell} alt="" />
                            </div>
                        </div> 
                        <div className="mt-[100px] grid justify-end mr-4">
                            <div className="w-[40px] md:w-[45px] h-[40px] md:h-[45px] bg-[#E52D41] rotate-[-29.65deg] rounded-[8px] md:rounded-[12px]">
                                <Image src={location} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="w-[70%] md:w-[44%] mt-[40px] md:mt-[90px]">
                        <h1 className="text-[25px] md:text-[56px] leading-[20px] leading-[67.77px] text-center font-semibold mb-[5px] md:mb-[20px]">Todos & Calendar</h1>
                        <p className="text-[13px] text-[18px] leading-[21.78px] text-center font-normal text-[#656565]">Start organising your workspace and your schedule with Calendive. Setup and manage your calendar bookings, events and your interviews so you never miss a booking.</p>
                        <WaitListData/>
                    </div>
                    <div className="w-[16%] md:w-[28%]">
                    <div className="grid justify-start mt-[20px] md:mt-[30px] ml-[-50px] ml-[-70px]">
                            <div className="w-[40px] md:w-[45px] h-[40px] md:h-[45px] bg-[#ED4756] rotate-[30.83deg] rounded-[8px] md:rounded-[12px]">
                                <Image src={calendar} alt="calendar" />
                            </div>
                        </div>
                        <div className="grid justify-start mt-[40px] md:mt-[20px] ml-0 md:ml-[50px]">
                            <div className="w-[40px] md:w-[45px] h-[40px] md:h-[45px] bg-[#2F92E5] rounded-[8px] md:rounded-[12px]">
                                <Image src={chat} alt="chat" />
                            </div>
                        </div>
                        <div className="mt-[70px]">
                            <div className="w-[40px] md:w-[45px] h-[40px] md:h-[45px] bg-[#FD7467] rotate-[14.51deg] rounded-[8px] md:rounded-[12px]">
                                <Image src={clock} alt="clock" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="w-full mt-[80px]">
                <div className="w-[90%] md:w-[70%] bg-[#D7E8FD] rounded-[10px] md:rounded-[24px] mx-auto relative px-[20px] md:px-[70px] pt-[10px] md:pt-[50px]">
                    <Image src={calendar1} alt="calendar 1" className="mx-auto mt-5 object-scale-down object-contain" />
                </div>
            </section>
            <section className="w-full mt-20">
                <div className="w-[90%] md:w-[70%] h-[362px] mx-auto">
                   <div className="w-full">
                        <h2 className="font-medium text-[16px] leading-[26px] text-[#656565] text-center">Trusted by your favourite companies</h2>
                        <div className="md:w-[40%] grid grid-cols-1 gap-5 md:gap-20 pt-5 md:pt-10 mx-auto">
                            <div>
                                <Image src={trustedby} alt="trustdby" className=""/>
                            </div>
                        </div>
                        
                   </div>
                </div>
            </section>
            <section className="w-full mt-[-200px] md:mt-[-130px]">
                <div className="w-[70%] md:w-[51%] mx-auto">
                    <h2 className="font-semibold text-[20px] md:text-[40px] leading-[30px] md:leading-[48px] text-center">We can help you accomplish <br/>multiple tasks simultaneously.</h2>
                    <p className="text-[#656565] text-[14px] md:text-[18px] leading-[24px] font-normal text-center mt-3">Calendive offers a comprehensive solution for businesses and individuals that includes booking, payment processing, and business management features.</p>
                </div>
            </section>
            <section className="w-full mt-[50px]">
                <div className="w-[90%] md:w-[70%] mx-auto grid md:grid-cols-2 gap-[48px]">
                    <div  className="bg-gradient-to-b from-[#D0DDF8] to-[#EEF3FF] rounded-[16px] pt-10 px-3 md:px-0">
                        <h3  className="text-[24px] font-semibold leading-[32px] text-center">Manage your Events and Bookings</h3>
                        <p className="text-[18px] leading-[24px] font-normal text-center md:px-10 py-5">Say goodbye to paper and spreadsheets for managing your events and bookings. Now you can handle all your events and bookings in one centralized place.</p>
                        <div className="bottom-0 px-5 mt-10">
                            <Image src={calendar2} alt="calendar 2" className="bottom-0 bg-[#C1B2FE] rounded-tl-[10px] rounded-tr-[10px]"/>
                        </div>
                    </div>
                    <div className="bg-gradient-to-b from-[#F9EDCF] to-[#FEF8EB] rounded-[16px] pt-10">
                        <h3  className="text-[24px] font-semibold leading-[32px] text-center ">HR Interviews</h3>
                        <p className="text-[18px] leading-[24px] font-normal text-center md:px-10 py-5">Streamline the interview scheduling process by instantly confirming candidate availabilities and scheduling interviews, eliminating the need for back-and-forth emails.</p>
                        <div className="bottom-0 px-5 pt-10">
                            <Image src={calendar3} alt="calendar 3"/>
                        </div>
                    </div>
                </div>
            </section>
            <section className="w-full mt-[50px]">
                <div className="w-[90%] md:w-[70%] mx-auto bg-gradient-to-b from-[#CFF8E2] to-[#EDFFF5] pt-[40px] rounded-[16px] shadow md:px-20 px-5">
                    <div className="md:w-[50%] mx-auto">
                        <h3 className="font-semibold text-[18px] md:text-[24px] leading-[20px] md:leading-[32px] text-center">Schedule your Daily Tasks & Organise your Calendar</h3>
                    </div>
                    <div className="md:w-[85.5%] text-[14px] md:text-[18px] leadin-[10px] md:leading-[28px] text-center font-normal mx-auto mt-5">
                        <p>Let&apos;s organise your day by setting up your meetings for increased productivity, and help you monitor your schedules and receive notifications for upcoming tasks..</p>
                    </div>
                    <div className="mx-auto mt-[20px] md:mt-[40px]">
                        <Image src={schedule} alt="schedule"/>
                    </div>
                </div>
            </section>
            <section className="w-full mt-[40px] bg-[#F7F8FA] py-10">
                <div className="w-[80%] md:w-[60%] mx-auto">
                    <h2 className="font-semibold text-[20px] md:text-[40px] leading-[20px] md:leading-[48px] text-center">Who We Serve</h2>
                    <p className="text-[14px] md:text-[18px] leading-[17px] md:leading-[24px] font-normal mt-4 text-center">At Calendive, we provide a robust, all-in-one platform designed to meet the needs of a wide range of users. Whether you&apos;re an individual seeking to streamline your booking process or a business looking to integrate payment processing and management solutions, Calendive has you covered.</p>
                </div>
                <div  className="w-[90%] md:w-[70%] my-10 mx-auto">
                    <div className="w-full grid md:grid-cols-3 gap-[24px]">
                        <div className="bg-[#E9F1F9] px-10 py-[30px]">
                            <Image src={hr} alt="spa/beauty" className="mx-auto w-[20%]" />
                            <p className="text-center text-[14px] md:text-[18px] leading-[17px] md:leading-[24px] font-medium mt-[60px]">HR Interview Scheduling</p>
                        </div>
                        
                        <div className="bg-[#E9F1F9] px-10 py-[30px]">
                            <Image src={consulting} alt="spa/beauty" className="mx-auto w-[20%]" />
                            <p className="text-center text-[14px] md:text-[18px] leading-[17px] md:leading-[24px] font-medium mt-[60px]">Consulting Services</p>
                        </div>
                        <div className="bg-[#E9F1F9] px-10 py-[30px]">
                            <Image src={event} alt="spa/beauty" className="mx-auto w-[20%]" />
                            <p className="text-center text-[14px] md:text-[18px] leading-[17px] md:leading-[24px] font-medium mt-[60px]">Event Registrations</p>
                        </div>
                    </div>
                    <div className="w-full grid md:grid-cols-2 gap-[24px] justify-center mt-4 mx-auto">
                        <div className="bg-[#E9F1F9] px-10 py-[30px]">
                            <Image src={spa} alt="spa/beauty" className="mx-auto w-[11%]" />
                            <p className="text-center text-[14px] md:text-[18px] leading-[17px] md:leading-[24px] font-medium mt-[60px]">Spa/Beauty Salon Appointments Bookings </p>
                        </div>
                        <div className="bg-[#E9F1F9] px-10 py-[30px]">
                            <Image src={training} alt="spa/beauty" className="mx-auto w-[11%]"/>
                            <p className="text-center text-[14px] md:text-[18px] leading-[17px] md:leading-[24px] font-medium mt-[60px]">Training Calendar for EdTech Plaforms</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="w-full bg-[#07101B] pt-[100px] pb-20">
                <div  className="w-[90%] md:w-[67% mx-auto">
                    <h2 className="font-semibold text-[18px] md:text-[40px] leading-[24px] md:leading-[48px] text-center text-white">Made for the Tomorrow, Available Today.<br/>Talk to our Consultants</h2>
                    <ConsultationListData/>
                </div>
                <div className="text-center mt-20">
                    <p className="text-white">&copy; {new Date().getFullYear()} Calendive. All Rights Reserved</p>
                </div>
            </section>
        </div>
    )
}

export default HomeData;