import { useGeneralQueries } from "@/hooks/generalQueries";
import { successDataType } from "@/hooks/types";
import { useEffect, useState } from "react";

const ScheduledEventData = (param:any) => {
    const { getScheduledEventMethod } = useGeneralQueries({ middleware: 'guest' });
    const [scheduledEvent, setScheduledEvent] = useState<successDataType>({
        data: [],
        message: '',
        status: ''
    });
    const [status,  setStatus] = useState(0);
    console.log(param);
    useEffect(() => {
        const getData =async () => {
            setStatus(0);
            try {
                const getEvent = await getScheduledEventMethod({
                    param,
                    setStatus,
                    setScheduledEvent
                });
            } catch (error) {
            
            }
        };
        getData();
    }, []);

    return scheduledEvent.data;
}

export default ScheduledEventData;