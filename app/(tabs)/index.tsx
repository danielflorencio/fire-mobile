import { Dimensions, StyleSheet, Text } from 'react-native';
import { View } from '../../components/Themed';
import WelcomeMessage from '../../components/WelcomeMessage';
import {PreviewCard} from '../../components/PreviewCard';
import BalanceInfo from '../../components/BalanceInfo';
import { LineChart } from 'react-native-chart-kit';

export default function TabOneScreen() {

  const linedata = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
        strokeWidth: 2, // optional
      },
    ],
  };

  return (
    <>
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
      <View style={styles.chartContainer}>
      <Text style={{textAlign: 'center'}}>
        Bezier Line Chart
      </Text>
      <LineChart
        data={linedata}
        // width={Dimensions.get('window').width} // from react-native
        width={Dimensions.get('window').width*0.9} // from react-native
        height={220}
        yAxisLabel={'$'}
        chartConfig={{
          backgroundColor: '#e26a00',
          backgroundGradientFrom: '#fb8c00',
          backgroundGradientTo: '#ffa726',
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16
          }
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16
        }}
      />
    </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  chartContainer: {
    width: '90%',
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