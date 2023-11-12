import { useState } from "react";
import { NativeSyntheticEvent, TextInputChangeEventData, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";

export default function LoginForm(){
    
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    return(
        <View>
            <TextInput value={username} placeholder="Username" onChange={(e: NativeSyntheticEvent<TextInputChangeEventData>) => setUsername(e.nativeEvent.text)}/>
            <TextInput value={password} placeholder="Password" onChange={(e: NativeSyntheticEvent<TextInputChangeEventData>) => setPassword(e.nativeEvent.text)}/>
        </View>
    )
}