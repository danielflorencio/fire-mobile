import { useRouter } from "expo-router";
import { View, Text, StyleSheet } from "react-native";

export default function InitialPage(){
    
    const router = useRouter();

    return(
        <View style={styles.container}>
            <Text>This is the initial page.</Text>

            <View style={styles.button} onTouchEnd={() => router.replace('/login')}>
                <Text>Go to login page</Text>
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
  });
  