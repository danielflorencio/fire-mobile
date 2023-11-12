// import { Dimensions, View, Text, StyleSheet, Alert } from "react-native";
import { Dimensions, View, Text } from "react-native";
import { LineChart } from "react-native-chart-kit";
// import {LineChart} from 'react-native-charts-wrapper';
import { styles } from "./styles";
import { useGraphicSection } from "./graphicSection.hook";

export default function GraphicSection(){

  const { handleSelectTimeFrame, displayedTimeFrame } = useGraphicSection();

  return(
    <View style={styles.chartContainer}>
      <View style={styles.viewModesContainer}>
        <View onTouchEnd={() => handleSelectTimeFrame('one-month')} style={displayedTimeFrame === 'one-month' ? ([styles.viewMode, {backgroundColor: '#00ddff'}]) : (styles.viewMode)}><Text style={styles.viewModeText}>1 Month</Text></View>
        <View onTouchEnd={() => handleSelectTimeFrame('six-months')} style={displayedTimeFrame === 'six-months' ? ([styles.viewMode, {backgroundColor: '#00ddff'}]) : (styles.viewMode)}><Text style={styles.viewModeText}>6 Months</Text></View>
        <View onTouchEnd={() => handleSelectTimeFrame('one-year')} style={displayedTimeFrame === 'one-year' ? ([styles.viewMode, {backgroundColor: '#00ddff'}]) : (styles.viewMode)}><Text style={styles.viewModeText}>12 Months</Text></View>
      </View>

      <LineChart
        bezier
        withHorizontalLabels={false}
        withVerticalLabels={false}
        data={{
          labels: [' 1', ' 2', ' 3', ' 4', ' 5', ' 6'],
          datasets: [
            {
              data: [1, 7, 6],
              strokeWidth: 2,
              color: (opacity = 1) => `rgba(255,0,0,${opacity})`, // optional
            },
            {
              data: [1, 7, 6, 8, 8, 2],
              strokeWidth: 2,
              color: (opacity = 1) => `rgba(0,0,102, ${opacity})`, // optional
            },
          ],
          legend: [
            'Previous', 
            'Future', 
            // 'DS'
          ],
        }}
        width={Dimensions.get('window').width - 16}
        height={200}
        chartConfig={{
          backgroundColor: '#1cc910',
          backgroundGradientFrom: '#eff3ff',
          backgroundGradientTo: '#efefef',
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 16,
          },
        }}
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
      {/* <LineChart
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
          color: (opacity = 1, number = 0) => `rgba(255, 255, 255, ${opacity}) `,
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
      /> */}
    </View>
  )
}



// https://github.com/indiespirit/react-native-chart-kit/issues/37 

// Library I'm using right now: https://github.com/indiespirit/react-native-chart-kit
// Best Libraries for charts in React Native: https://blog.logrocket.com/top-8-react-native-chart-libraries-2023/ 
// Best recommended library: https://github.com/wuxudong/react-native-charts-wrapper

// D3.Js course: https://www.freecodecamp.org/learn/data-visualization/#data-visualization-with-d3 
// D3.Js tutorial with React Native: https://betterprogramming.pub/d3-and-react-native-an-essential-guide-to-line-graphs-dc1ce392b440 