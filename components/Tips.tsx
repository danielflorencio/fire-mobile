import { View, Text } from "./Themed";
import { StyleSheet } from "react-native"
export default function Tips(){
    return(
        <View testID="tips">
            <Text>There's no tips available for you at the moment. Keep using the app so we can analyze your data and provide you with the best valuable information as possible.</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    class: {

    },
})