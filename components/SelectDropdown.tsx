import { useState } from "react"
import { View, Text, StyleSheet} from "react-native";

type SelectDropdownProps = {
    options: string[],
    choosenCategory: string, 
    setChoosenCategory: (arg: string) => void; 
}

export default function SelectDropdown({options, choosenCategory, setChoosenCategory}: SelectDropdownProps ){
    
    const [visibility, setVisibility] = useState<'hidden' | 'visible'>('hidden');

    function handleChangeVisibility(){
        if(visibility === 'visible'){
            setVisibility('hidden')
        } else{
            setVisibility('visible')
        }
    }

    function handlePressOption(arrayIndex: number){
        setChoosenCategory(options[arrayIndex]);
    }

    return(
        // <View style={styles.dropdownOuterContainer}>
        <View onTouchEnd={handleChangeVisibility} style={styles.dropdownInnerContainer}>
            {visibility === 'visible' ? (
            options.map((option, arrayIndex) => (
                <View key={arrayIndex} style={[styles.dropdownOption, {backfaceVisibility: visibility}]} onTouchEnd={() => handlePressOption(arrayIndex)}>
                    <Text>{option}</Text>
                </View>
            )) ) : (<Text>{choosenCategory}</Text>)
            }
        </View>
        // {/* </View> */}
    )
}

const styles = StyleSheet.create({
    // dropdownOuterContainer: {
    //     width: '90%',
    //     height: 50
    // },
    dropdownInnerContainer: {
        flex: 0,
        // width: '100%',
        height: 30,
        zIndex: 1
    },
    dropdownOption: {
        width: '100%',
        display: 'flex',
        height: '100%',
        backgroundColor: 'white',
        borderWidth: 1,
    }
})