const FormatDate = ({dateString}:any) => {
    const date = new Date(dateString);
    return(
        <>
            {date?.toLocaleDateString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
            })}
        </>
    )
       
}
export default FormatDate;