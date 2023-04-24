import { useState } from "react"
import { View, Text, StyleSheet} from "react-native";

type SelectDropdownProps = {
    options: string[]
}

export default function SelectDropdown({options}: SelectDropdownProps ){
    
    const [visibility, setVisibility] = useState<'hidden' | 'visible'>('hidden');

    function handleChangeVisibility(){
        if(visibility === 'visible'){
            console.log('function called.')
            setVisibility('hidden')
        } else{
            console.log('function called.')
            setVisibility('visible')
        }
    }

    return(
        <View onTouchEnd={handleChangeVisibility} style={styles.dropdownContainer}>
            {visibility === 'visible' ? (
            options.map((option, index) => (
                <View key={index} style={{backfaceVisibility: visibility}}>
                    <Text>{option}</Text>
                </View>
            )) ) : (<></>)
            }
        </View>
    )
}

const styles = StyleSheet.create({
    dropdownContainer: {
        flex: 0,
        height: '10%',
        borderWidth: 1
    },
    dropdownOption: {
        flex: 0, 
        height: '10%',
        borderWidth: 1,
        position: "absolute"    
    }
})