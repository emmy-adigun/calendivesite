import axios from '@/lib/axios'
import { AuthProps, candidateInfoProp, contactInfoProp, getCountriesProps, getInfoDataProps, getScheduledEventDataProps, getTrainingCourseCategoryProps, getTrainingTypeProps } from './types'

export const useGeneralQueries =  ({ middleware, redirectIfAuthenticated } : AuthProps = {}) => {
    const csrf = () => axios.get('/sanctum/csrf-cookie')

    const getTraingingTypesMethod = async ({setCountries, setStatus}: getTrainingTypeProps) =>{
        await csrf();
    
        axios
            .get('/api/get-training-types')
            .then((response)=>{
                setStatus(response.status);
                setCountries({
                    data: response.data.data,
                    message: response.data.message,
                    status: response.data.status
                });
            })
            .catch(error=>{
                console.log(error);
            })
    }

    const getCourseCategoriesMethod = async ({setCountries, setStatus}: getTrainingCourseCategoryProps) =>{
        await csrf();
    
        axios
            .get('/api/get-training-course-category')
            .then((response)=>{
                setStatus(response.status);
                setCountries({
                    data: response.data.data,
                    message: response.data.message,
                    status: response.data.status
                });
            })
            .catch(error=>{
                console.log(error);
            })
    }


    const getCountriesMethod = async ({setCountries, setStatus}: getCountriesProps) =>{
        await csrf();
    
        axios
            .get('/api/get-countries')
            .then((response)=>{
                setStatus(response.status);
                setCountries({
                    data: response.data.data,
                    message: response.data.message,
                    status: response.data.status
                });
            })
            .catch(error=>{
                console.log(error);
            })
    }

    const getAllTraingSchdeulesMethod = async({setErrors, setDataStatus, setGetInfo, ...props} : getInfoDataProps) => {
        await csrf();
        setErrors({
            msg: '',
            course_category: [],
            country: [],
            training_type: []
        })
        axios
            .post('/api/get-all-scheduled-trainings', props)
            .then((response)=>{
                setDataStatus(response.status);
                setGetInfo({
                    data: response.data.data,
                    message: response.data.message,
                    status: response.data.status
                });
            })
            .catch(error=>{
                setDataStatus(error.response.status)
                if (error.response.status === 422) {
                    setErrors({
                        msg: error.response.data.message, 
                        course_category: error.response.data.errors.course_category || [],
                        country: error.response.data.errors. country || [],
                        training_type: error.response.data.errors.training_type || []
                    });
                }else{
                    setErrors({
                        msg: 'An error occurred. Please contact the administrator or technical team.',
                        course_category: [],
                        country: [],
                        training_type: []
                    });
                }
            })
    }

    const consultMethod = async({setErrors, setStatus, setData, ...props} : contactInfoProp) => {
        await csrf();
        setErrors({
            msg: '',
            email: [],
        })
        axios
            .post('/api/book-consultation', props)
            .then((response)=>{
                setStatus(response.status);
                setData({
                    data: response.data.data,
                    message: response.data.message,
                    status: response.data.status
                });
            })
            .catch(error=>{
                setStatus(error.response.status)
                if (error.response.status === 422) {
                    setErrors({
                        msg: error.response.data.message, 
                        email: error.response.data.errors?.email || [],
                    });
                }else{
                    setErrors({
                        msg: 'An error occurred. Please contact the administrator or technical team.',
                        email: [],
                    });
                }
            })
    }

    const waitListMethod = async({setErrors, setStatus, setData, ...props} : contactInfoProp) => {
        await csrf();
        setErrors({
            msg: '',
            email: [],
        })
        axios
            .post('/api/wait-list', props)
            .then((response)=>{
                setStatus(response.status);
                setData({
                    data: response.data.data,
                    message: response.data.message,
                    status: response.data.status
                });
            })
            .catch(error=>{
                setStatus(error.response.status)
                if (error.response.status === 422) {
                    setErrors({
                        msg: error.response.data.message, 
                        email: error.response.data.errors?.email || [],
                    });
                }else{
                    setErrors({
                        msg: 'An error occurred. Please contact the administrator or technical team.',
                        email: [],
                    });
                }
            })
    }

    const getScheduledEventMethod = async({setStatus, setScheduledEvent,  ...props}: getScheduledEventDataProps) => {
        await csrf();
        console.log(props);
        axios
            .post('/api/get-scheduled-event',props)
            .then((response)=>{
                setStatus(response.status);
                setScheduledEvent({
                    data: response.data.data,
                    message: response.data.message,
                    status: response.data.status
                });
            })
            .catch(error=>{
                console.log(error);
            })
    }

    const sendCandidateAvailabilityMethod = async({setErrors, setStatus, setData, ...props} : candidateInfoProp)  => {
        await csrf();
        setErrors({
            msg: '',
            email: [],
            name: [],
            phone: [],
            comment: [],
            selectedDate: [],
            selectedTime: [],
            schedule_id: [],
        })
        axios
            .post('/api/save-candidate-availability', props)
            .then((response)=>{
                setStatus(response.status);
                setData({
                    data: response.data.data,
                    message: response.data.message,
                    status: response.data.status
                });
            })
            .catch(error=>{
                setStatus(error.response.status)
                if (error.response.status === 422) {
                    setErrors({
                        msg: error.response.data.message, 
                        email: error.response.data.errors?.email || [],
                        name: error.response.data.errors?.name || [],
                        phone: error.response.data.errors?.phone ||[],
                        comment: error.response.data.errors?.comment ||[],
                        selectedDate: error.response.data.errors?.selectedDate ||[],
                        selectedTime: error.response.data.errors?.selectedTime ||[],
                        schedule_id: error.response.data.errors?.schedule_id || []
                    });
                }else{
                    setErrors({
                        msg: 'An error occurred. Please contact the administrator or technical team.',
                        email: [],
                        name: [],
                        phone: [],
                        comment: [],
                        selectedDate: [],
                        selectedTime: [],
                        schedule_id:  []
                    });
                }
            })
    }


   

    
    return {
        getTraingingTypesMethod,
        getCourseCategoriesMethod,
        getCountriesMethod,
        getAllTraingSchdeulesMethod,
        consultMethod,
        waitListMethod,
        getScheduledEventMethod,
        sendCandidateAvailabilityMethod
    }
}

