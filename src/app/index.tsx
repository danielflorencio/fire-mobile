import { useRouter } from 'expo-router';
import * as SQLite from 'expo-sqlite';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';

import { StyleSheet, Text, View } from 'react-native';

export default function Page() {

  const router = useRouter();

  const navigateToLogin = () => {
    router.replace('/login');
  }

  return (
    <View style={styles.container}>
      {/* Auth Context Provider */}
      {/* Expenses Context Provider */}
      {/* Analytics Context Provider */}
      <Text>Open up App.tsx to start working on your app!</Text>
      {/* <StatusBar style="auto" /> */}
      <View style={styles.button} onTouchEnd={() => navigateToLogin()}>
        <Text>Go to login page</Text>
      </View>

      <View style={styles.button} onTouchEnd={() => router.replace('/home')}>
        <Text>Go to initial page.</Text>
      </View>

    </View>
  );
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
