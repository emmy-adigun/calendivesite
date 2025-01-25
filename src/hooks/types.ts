import { IOptions } from "vanilla-calendar-pro/types";
import {HTMLAttributes} from 'react';

export interface LayoutProps{
    children: React.ReactNode;
}

export interface ImageIconProps{
    imageUrl:string;
    className:string;
    alt:string;
}

export interface AuthProps {
    middleware?: any;
    redirectIfAuthenticated?: any;
}

export interface SelectOptionFieldProps{
    name:string;
    id:any;
    onChange: (selectedOptionValue: string) => void; 
    options:any;
    previousOption:any
    placeholder:string;
    className:string;
}

export interface MobileSelectOptionFieldProps{
    name:string;
    id:any;
    onChange: (selectedOptionValue: string) => void; 
    previousOption:any
    placeholder:string;
    className:string
    required: boolean;
}

export interface successDataType{
    data: any,
    message: string,
    status: string
}

export interface getTrainingTypeProps{
    setCountries: (countries:successDataType) => void;
    setStatus: (status: number) => void;
}

export interface getTrainingCourseCategoryProps{
    setCountries: (countries:successDataType) => void;
    setStatus: (status: number) => void;
}

export interface getCountriesProps{
    setCountries: (countries:successDataType) => void;
    setStatus: (status: number) => void;
}

export interface PrimaryButtonProps{
    className: string;
    disabled: any;
    children: React.ReactNode;
    [key: string]: any;
}

export interface errorDataType{
    message: string,
    status: string
}

export interface contactInfoErrorType{
    msg: string;
    email: string[];
}

export interface wishListErrorType{
    msg: string;
    email: string[];
}




export interface contactInfoProp{
    email: string;
    setStatus : (dataStatus : number) => void;
    setErrors: (errors: wishListErrorType) => void;
    setData: (data: successDataType) => void;
}


export interface filterTrainingErrorDataType{
    msg: string;
    course_category: string[];
    country: string[];
    training_type: string[];
}

export interface getInfoDataProps{
    course_category: string;
    country: string;
    training_type: string;
    setDataStatus : (dataStatus : number) => void;
    setErrors: (errors: filterTrainingErrorDataType) => void;
    setGetInfo: (getInfo: successDataType) => void;
}


export interface TrainingCalendarModalProps{
    setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
    openModal: boolean;
    data:  any;
}

export interface VanillaCalendarProps extends HTMLAttributes<HTMLDivElement> {
    config?: IOptions,
}

export interface candidateInfoErrorType{
    msg: string;
    email: string[];
    name: string[];
    phone: string[];
    comment: string[];
    selectedDate: string[];
    selectedTime: string[];
    schedule_id: string[],
    duration: string[]
}

export interface getScheduledEventDataProps{
    param: string;
    setStatus : (status : number) => void;
    setScheduledEvent: (scheduledEvent: successDataType) => void;
}

export interface EventParams{
    params: { link: string }
}

export interface candidateInfoProp{
    email:string;
    name: string;
    phone: string;
    comment: string;
    selectedDate: string;
    selectedTime: string;
    schedule_id: string;
    duration: string;
    setStatus : (status : number) => void;
    setErrors: (errors: candidateInfoErrorType) => void;
    setData: (data: successDataType) => void;
}

export interface djLatsEventRegErrorType{
    msg: string;
    email: string[];
    name: string[];
    phone: string[];
}

export interface djLatsEventRegProp{
    email:string;
    name: string;
    phone: string;
    setStatus : (status : number) => void;
    setErrors: (errors: djLatsEventRegErrorType) => void;
    setData: (data: successDataType) => void;
}

export interface lemonadeDairiesErrorType{
    msg: string;
    email: string[];
    name: string[];
    mobile_code: string[],
    phone: string[];
    hearAboutUs: string[];
    socialHandle: string[];
}

export interface lemonadeDairiesRegProps{
    email:string;
    name: string;
    mobile_code: string;
    phone: string;
    hearAboutUs: string;
    socialHandle: string;
    setStatus : (status : number) => void;
    setErrors: (errors: lemonadeDairiesErrorType) => void;
    setData: (data: successDataType) => void;
}