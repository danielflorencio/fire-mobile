import { StyleSheet, Text } from 'react-native';
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
      <Text style={styles.previewsSectionTitle}>Your previewed finances</Text>
      <View style={styles.moveCardsLeftContainer}>
        <PreviewCard previewCardTitle='In 1 Month ' infoToFetch='next-month'/>
        <PreviewCard previewCardTitle='In 6 Months ' infoToFetch='six-months'/>
        <PreviewCard previewCardTitle='In 1 Year ' infoToFetch='one-year'/>
      </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  previewsSectionTitle: {
    // textAlign: 'left',
    width: '90%',
    fontSize: 22,
    marginBottom: 12
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  moveCardsLeftContainer: {
    width: '90%',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 22,
    height: 1,
    width: '100%',
  }
});