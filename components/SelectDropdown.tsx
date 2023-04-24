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
        <View onTouchEnd={handleChangeVisibility} style={styles.dropdownContainer}>
            {visibility === 'visible' ? (
            options.map((option, arrayIndex) => (
                <View key={arrayIndex} style={[styles.dropdownOption, {backfaceVisibility: visibility}]} onTouchEnd={() => handlePressOption(arrayIndex)}>
                    <Text>{option}</Text>
                </View>
            )) ) : (<Text>{choosenCategory}</Text>)
            }
        </View>
    )
}

const styles = StyleSheet.create({
    dropdownContainer: {
        flex: 0,
        height: '10%',
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