import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function ModalScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hey, my name is Daniel, and this is one of my portfolio's apps :{')'}</Text>
      <Text>This React Native app, in particular, is part of a larger project called Fire, your financial independence advisor.</Text>
      <Text>It is being developed right now in two different main stacks: </Text>
      <Text>The web application stack, which was originally built in pure React, but I will make turn it into a next Js project for search engine optimization {'(SEO)'} purposes.</Text>
      <Text>And the mobile stack, which is being built in React Native, so it can be brought to both IOS and Android devices with one single codebase.</Text>
      <Text>I still didn't make a choice wether I'm going to use MongoDB or PostgreSQL as a database, but I'm probably going to use PostgreSQL.</Text>
      <Text>If you want to see the main repositories of the projects, they're gonna be right below so you can take a look at the code. </Text>
      <Text>The main{'(old)'} React repository: </Text>
      <Text>The new Next JS web application repository: </Text>
      <Text>And the React Native version you are seeing right now: </Text>
      {/* <Text>The major goal of this project, at the moment, is to help me get a job in the tech industry as a software developer. but once it is completely, there will be nothing stopping me from bringing this code to production and actually creating a business from it.</Text> */}





      {/* <Text style={styles.title}>Modal</Text> */}
      {/* <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" /> */}
      {/* <EditScreenInfo path="app/modal.tsx" /> */}
      {/* Use a light status bar on iOS to account for the black space above the modal */}
      {/* <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    width: '90%'
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});