import moment from "moment";
import { useEffect, useState } from "react";
import { getCustomGraphicalPreview } from "../../../../../../APIFunctions/fetchPreview";
import { LineChartGraphic } from "../../../../../../types/graphic";

export const useGraphicSection = () => {
    const [displayedTimeFrame, setDisplayedTimeFrame] = useState<'one-month' | 'six-months' | 'one-year'>('six-months');
    const [graphicData, setGraphicData] = useState<LineChartGraphic>();
    const [alert, setAlert] = useState<{isOpen: boolean, message: string}>({isOpen: false, message: ''});

    useEffect(() => {

        const currentDate: Date = new Date(); 
  
        const finalDateQuery: string = moment(currentDate).format("YYYY-MM-DD");
        
        let initialDateQuery: string; 
  
        if(displayedTimeFrame === 'one-month'){
            initialDateQuery = moment(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, currentDate.getDate())).format("YYYY-MM-DD");
        } else if(displayedTimeFrame === 'six-months'){
            initialDateQuery = moment(new Date(currentDate.getFullYear(), currentDate.getMonth() - 6, currentDate.getDate())).format("YYYY-MM-DD");
        }else{
            initialDateQuery = moment(new Date(currentDate.getFullYear() - 1, currentDate.getMonth(), currentDate.getDate())).format("YYYY-MM-DD");
        }
  
        console.log('INITIAL DATE QUERY: ', initialDateQuery);
        console.log('FINAL DATE QUERY: ', finalDateQuery);
        try{
            let graphicData: LineChartGraphic | false = false;

            (async () => {
                graphicData = await getCustomGraphicalPreview(initialDateQuery, finalDateQuery);
            })();
  
        if(!graphicData){
            setAlert({isOpen: true, message: 'Could not connect to the server. Try again later.'})
        }
  
        } catch(error){
            setAlert({isOpen: true, message: 'Could not connect to the server. Try again later.'})
            console.log('ERROR: ', error)
        }
    }, [displayedTimeFrame])
  
        const handleSelectTimeFrame = async (newTimeFrame: 'one-month' | 'six-months' | 'one-year') => {
        if(displayedTimeFrame !== newTimeFrame){
            setDisplayedTimeFrame(newTimeFrame)
        }
    }
    
    
    return { handleSelectTimeFrame, displayedTimeFrame }
      
}