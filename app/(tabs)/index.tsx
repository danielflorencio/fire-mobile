import { StyleSheet } from 'react-native';
// import EditScreenInfo from '../../components/EditScreenInfo';
import { View } from '../../components/Themed';
// import { Divider } from '@rneui/base';
import WelcomeMessage from '../../components/WelcomeMessage';
import {PreviewCard} from '../../components/PreviewCard';
import BalanceInfo from '../../components/BalanceInfo';

export default function TabOneScreen() {
  return (
    <>
    <View style={styles.container}>
      {/* <Text style={styles.title}>Tab One - Test one.</Text> */}
      <WelcomeMessage/>
      <BalanceInfo/>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />      
      {/* <EditScreenInfo path="app/(tabs)/index.tsx" /> */}
      <PreviewCard previewCardTitle='Next Month Preview: ' infoToFetch='next-month'/>
      <PreviewCard previewCardTitle='Next 6 Months Preview: ' infoToFetch='six-months'/>
      <PreviewCard previewCardTitle='Next Year Preview: ' infoToFetch='one-year'/>
    </View>
    </>
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
  }
});