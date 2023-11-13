import { useRouter } from "expo-router";
import { Text, View, StyleSheet, Button } from "react-native";
import { LoginForm } from "./components/loginForm";
import { styles } from "./styles";

export default function Page(){

    const router = useRouter();

    return(
        <View style={styles.container}>
            <Text>This is the login page.</Text>
            <View style={styles.loginForm}>
                {/* <Text>Go to home page.</Text> */}
                <LoginForm/>
            </View>

            <Button title='Go to root (/) page.' onPress={() => router.replace('/')}/>
        </View>
    )
}