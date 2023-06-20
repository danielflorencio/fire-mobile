import { Dimensions, StyleSheet, Text, ScrollView } from 'react-native';
import { View } from '../../components/Themed';
import WelcomeMessage from '../../components/WelcomeMessage';
import {PreviewCard} from '../../components/PreviewCard';
import BalanceInfo from '../../components/BalanceInfo';
import { LineChart } from 'react-native-chart-kit';
import { useState } from 'react';
import GraphicSection from '../../components/GraphicSection';

export default function TabOneScreen() {

  const [displayedTimeFrame, setDisplayedTimeFrame] = useState<'one-month' | 'six-months' | 'one-year'>();

  const handleSelectTimeFrame = async (newTimeFrame: 'one-month' | 'six-months' | 'one-year') => {
    if(displayedTimeFrame !== newTimeFrame){
      // const response = await fetch()

    }
  } 


  const linedata = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
        strokeWidth: 2, // optional
      },
    ],
  };

  return (
    <ScrollView>
    <View style={styles.container}>
      <WelcomeMessage/>
      <BalanceInfo/>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />      
      <Text style={styles.previewsSectionTitle}>Your previewed finances</Text>
      <View style={styles.moveCardsLeftContainer}>
        <PreviewCard previewCardTitle='In 1 Month ' infoToFetch='next-month'/>
        <PreviewCard previewCardTitle='In 6 Months ' infoToFetch='six-months'/>
        <PreviewCard previewCardTitle='In 1 Year ' infoToFetch='one-year'/>
      </View>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <GraphicSection/>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  chartContainer: {
    width: '90%',
  },
  viewModesContainer: {
    marginVertical: 6,
    marginTop: 12,
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  viewMode: {
    backgroundColor: '#00ddff',
    borderRadius: 12,
    paddingVertical: 3,
    paddingHorizontal: 9,
  },
  viewModeText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14
  },
  previewsSectionTitle: {
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