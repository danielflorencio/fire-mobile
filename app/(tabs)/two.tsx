import { StyleSheet, Linking } from 'react-native';
import { Text, View } from '../../components/Themed';
import { AntDesign } from '@expo/vector-icons';

export default function TabTwoScreen() {
  
  const handlePress = () => {
    Linking.openURL('https://youtu.be/C4atterMyF0');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hey, this feature hasn't been ported to the app yet. {'\n\n'} Press the button below to see it working live. :{')'} {'\n'}</Text>
      <AntDesign size={64} name='youtube' color={'red'} onPress={handlePress}/>
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
    fontSize: 14,
    fontWeight: 'bold',
    width: '90%',
    textAlign: 'center'
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});