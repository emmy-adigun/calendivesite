import { useGeneralQueries } from "@/hooks/generalQueries";
import { successDataType } from "@/hooks/types";
import { useEffect, useState } from "react";

const TimezoneData = () => {
    const { getCountriesMethod } = useGeneralQueries({ middleware: 'guest' });
    const [countries, setCountries] = useState<successDataType>({
        data: [],
        message: '',
        status: ''
    });
    const [status,  setStatus] = useState(0);
   
    useEffect(() => {
      const getData =async () => {
        setStatus(0);
        try {
            const getCountries = await getCountriesMethod({
                setCountries,
                setStatus
            });
        } catch (error) {
          
        }
      };
  
      
        getData();
    }, []);

    return countries.data;
}

export default TimezoneData;