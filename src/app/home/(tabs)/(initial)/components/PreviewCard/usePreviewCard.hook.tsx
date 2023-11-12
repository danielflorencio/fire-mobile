import { useState } from "react";

export const usePreviewCard = (infoToFetch: string | undefined) => {

    const [preview, setPreview] = useState();

    if(infoToFetch){
        if(infoToFetch === 'next-month'){
            (async () => {
                // const response = await fetchMonthPreview('default');
                // setPreview(await response);
            })();            
        } else if(infoToFetch === 'six-months'){
            (async () => {
                // const response = await fetchSixMonthsPreview('default');
                // setPreview(await response);
            })();
        }else if(infoToFetch === 'one-year'){
            (async () => {
                // const response = await fetchYearPreview('default');
                // setPreview(await response);
            })();
        }else {
            console.log('Error, infoToFetch === ', infoToFetch)
        }
    }

    return {preview, setPreview}
}