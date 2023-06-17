import { StyleSheet } from "react-native"
import { View, Text } from "./Themed"
// import { Divider } from "@rneui/base"
import { useState } from "react"
import { fetchMonthPreview, fetchYearPreview, fetchSixMonthsPreview } from "../APIFunctions/fetchPreview"
type PreviewCardProps = {
    infoToFetch?: string,
    previewCardTitle: string
}
export function PreviewCard({infoToFetch, previewCardTitle}: PreviewCardProps){

    const [preview, setPreview] = useState();

    if(infoToFetch){
        if(infoToFetch === 'next-month'){
            (async () => {
                const response = await fetchMonthPreview('default');
                setPreview(await response);
            })();            
        } else if(infoToFetch === 'six-months'){
            (async () => {
                const response = await fetchSixMonthsPreview('default');
                setPreview(await response);
            })();
        }else if(infoToFetch === 'one-year'){
            (async () => {
                const response = await fetchYearPreview('default');
                setPreview(await response);
            })();
        }else {
            console.log('Error, infoToFetch === ', infoToFetch)
        }
    }

    return(
        <View style={styles.previewCard}>
            <View style={styles.previewCardHeader}>
                <Text style={styles.previewCardTitle} testID="previewCardTitle">{previewCardTitle}</Text>
            </View>
            {/* <Divider/> */}
            <View style={styles.previewCardBottom}>
                <Text style={styles.previewCardValue} testID="previewCardValue">  
                {
                    preview !== undefined ? (Number(preview).toFixed(2)) : (<>API is not online.</>)
                }    
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    previewCard: {
        // backgroundColor: '#ffffff',
        width: '90%',
        // height: '13%',
        // borderRadius: 12,
        display: 'flex',
        // flexDirection: 'column',
        // alignItems: 'center',
        // justifyContent: 'space-around',
        // marginBottom: 16,
        // paddingVertical: 4,
        // elevation: 4,
        // shadowColor: '#52006A',
    },
    previewCardHeader: {
        // backgroundColor: '#ffffff',
        // width: '100%',
        // borderRadius: 12,
        // paddingLeft: 12
    },
    previewCardBottom: {
        // backgroundColor: '#ffffff',
        // width: '100%',
        // borderRadius: 12,
        // paddingLeft: 12
    },
    previewCardTitle: {
        fontSize: 16,
        color: 'gray'
        // fontWeight: 'bold'
    },
    previewCardValue: {
        // fontSize: 18,
        // fontWeight: '500'
    }
})