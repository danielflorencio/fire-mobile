import { useRouter } from "expo-router";
import { ReactNode, useContext } from "react"
import { Text, View, Button } from 'react-native'
import AuthContext from "../../store/auth/authContextProvider";

export default function ProtectedRoute({children}: {children: ReactNode}){

    const router = useRouter();

    const { authState } = useContext(AuthContext);

    console.log('AUTH STATE: ', authState)
    if(authState.isLoading){
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text>Loading...</Text>
            </View>
        )
    } else if(!authState.isLoggedIn){
        return(
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text>You are not logged in.</Text>
                <Button title="Press here to log in right now." onPress={() => router.replace('/login')}/>
            </View>
        )
    }

    return children
}