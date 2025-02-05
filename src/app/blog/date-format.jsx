export const formatDate = (dateString) => {
        if (!dateString) return ""; 
    
        const date = new Date(dateString.trim());
        if (isNaN(date.getTime())) return "Invalid Date"; 
    
        const day = date.getDate();
        const month = date.toLocaleString('en-US', { month: 'short' }); 
        const year = date.getFullYear();
    
        const getOrdinalSuffix = (day) => {
            if (day > 3 && day < 21) return "th";
            switch (day % 10) {
                case 1: return "st";
                case 2: return "nd";
                case 3: return "rd";
                default: return "th";
            }
        };
    
        return `${day}${getOrdinalSuffix(day)} ${month}, ${year}`;
    };

    
    