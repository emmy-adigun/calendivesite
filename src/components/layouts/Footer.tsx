"use client"
import ConsultationListData from '@/app/home-data/consultation-list-data';

const Footer = () => {
    

    return(

        <footer className="w-full bg-[#07101B] pt-[100px] pb-20">
                <div  className="w-[90%] md:w-[67% mx-auto">
                    <h2 className="font-semibold text-[18px] md:text-[40px] leading-[24px] md:leading-[48px] text-center text-white">Made for the Tomorrow, <span className="block md:inline">Available Today.</span> <span className="inline md:block">Talk to our Consultants</span></h2>
                    <ConsultationListData/>
                </div>
                <div className="text-center mt-20">
                    <p className="text-white">&copy; {new Date().getFullYear()} Calendive. All Rights Reserved</p>
                </div>
            </footer>
        
    );
}

export default Footer;