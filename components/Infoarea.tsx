type Props = {
    currentMonth: string,
    onMonthChange: (newMonth: string) => void;
    income: number;
    expense: number;
}
export default function InfoArea({currentMonth, onMonthChange, income, expense} : Props){

    const handlePrevMonth = () => {
        let [year, month] = currentMonth.split('-');
        let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1);
        currentDate.setMonth(currentDate.getMonth() - 1);
        onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`)
    }

    const handleNextMonth = () => {
        let [year, month] = currentMonth.split('-');
        let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1);
        currentDate.setMonth(currentDate.getMonth() + 1);
        onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`)
    }
    
    return(
        <>
        </>
    )
}