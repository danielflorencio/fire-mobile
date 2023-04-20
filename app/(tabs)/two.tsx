import { StyleSheet } from 'react-native';
// import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
// import YouTube from 'react-native-youtube';
export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hey, this is another tab :{')'} </Text>
      {/* <YouTube
        videoId="C4atterMyF0"
        play={true}
        fullscreen={false}
        loop={true}
        style={{ alignSelf: 'stretch', height: 300 }}
      /> */}
      {/* <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="app/(tabs)/two.tsx" /> */}
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
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
