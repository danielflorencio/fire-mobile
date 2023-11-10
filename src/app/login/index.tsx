import { useRouter } from "expo-router";
import { Text, View, StyleSheet } from "react-native";

export default function Page(){

    const router = useRouter();

    const navigateToLogin = () => {
      router.replace('/');
    }

    return(
        <View style={styles.container}>
            <Text>This is the login page.</Text>
            <View style={styles.button} onTouchEnd={() => navigateToLogin()}>
                <Text>Go to home page.</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        paddingVertical: 8,
        paddingHorizontal: 14,
        backgroundColor: 'pink',
        borderRadius: 16,
        marginTop: 22
    }
})