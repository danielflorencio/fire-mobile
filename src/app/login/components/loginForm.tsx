import { useContext, useState } from "react";
import { Button, NativeSyntheticEvent, TextInputChangeEventData, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { defaultHeaders } from "../../../utils/defaultHeaders";
import AuthContext from "../../../store/auth/authContextProvider";
import { styles } from "./styles";

export function LoginForm(){
    
    const { globalLogInDispatch } = useContext(AuthContext)

    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const onSubmit = async (username: string, password: string) => {
        const response = await fetch('http://localhost:8080/auth/login', {
            method: 'POST', 
            headers: defaultHeaders
        });
        if(response.ok){
            const data = await response.json();
            const accessToken = data.accessToken;
            // const userLocalId = data.userLocalId;
            // const expirationDate = data.expiresIn;
            const userLocalId = 1;

            globalLogInDispatch({
                authToken: accessToken,
                userId: userLocalId,
                email: data.email,
                name: data.name
            })
        }
    }

    return(
        <View style={styles.container}>
            <TextInput value={username} placeholder="Username" onChange={(e: NativeSyntheticEvent<TextInputChangeEventData>) => setUsername(e.nativeEvent.text)}/>
            <TextInput value={password} placeholder="Password" onChange={(e: NativeSyntheticEvent<TextInputChangeEventData>) => setPassword(e.nativeEvent.text)}/>
            <Button title='Log in' onPress={() => onSubmit(username, password)}/>
        </View>
    )
}