import { StyleSheet, View, Text } from "react-native"
// import { Divider } from "@rneui/base"
import { useState } from "react"
import { fetchMonthPreview, fetchYearPreview, fetchSixMonthsPreview } from "../../../../../../APIFunctions/fetchPreview"
import { styles } from "./styles"
import { usePreviewCard } from "./usePreviewCard.hook"

type PreviewCardProps = {
    infoToFetch?: string,
    previewCardTitle: string
}
export function PreviewCard({infoToFetch, previewCardTitle}: PreviewCardProps){

    const {preview, setPreview} = usePreviewCard(infoToFetch);

    return(
        <View style={styles.previewCard}>
            <View style={styles.previewCardHeader}>
                <Text style={styles.previewCardTitle} testID="previewCardTitle">{previewCardTitle}</Text>
            </View>
            {/* <Divider/> */}
            <Text style={styles.previewCardValue} testID="previewCardValue">  
            {
                preview !== undefined ? (Number(preview).toFixed(2)) : (<>API is not online.</>)
            }    
            </Text>
        </View>
    )
}