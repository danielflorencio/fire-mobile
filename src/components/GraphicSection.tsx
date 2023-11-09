import { useEffect, useState } from "react";
// import { Dimensions, View, Text, StyleSheet, Alert } from "react-native";
import { Dimensions, View, Text, StyleSheet } from "react-native";
import { LineChart } from "react-native-chart-kit";
// import {LineChart} from 'react-native-charts-wrapper';
import { Graphic } from "../types/graphic";
import moment from "moment";
import { calculateGraphicData } from "../helpers/calculateGraphicData";

// const showAlert = () =>
//   Alert.alert(
//     'Alert Title',
//     'My Alert Msg',
//     [
//       {
//         text: 'Cancel',
//         onPress: () => Alert.alert('Cancel Pressed'),
//         style: 'cancel',
//       },
//     ],
//     {
//       cancelable: true,
//       onDismiss: () =>
//         Alert.alert(
//           'This alert was dismissed by tapping outside of the alert dialog.',
//         ),
//     },
//   );

export default function GraphicSection(){

    const [displayedTimeFrame, setDisplayedTimeFrame] = useState<'one-month' | 'six-months' | 'one-year'>('six-months');
    const [graphicData, setGraphicData] = useState<Graphic>({labels: [new Date], totalBalance: [0, 0, 0, 0, 0]});

    useEffect(() => {

      const currentDate: Date = new Date(); 
      const finalDateQuery = moment(currentDate).format("YYYY-MM-DD");

      let initialDateQuery; 

      if(displayedTimeFrame === 'one-month'){
        initialDateQuery = moment(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, currentDate.getDate())).format("YYYY-MM-DD");
      } else if(displayedTimeFrame === 'six-months'){
        initialDateQuery = moment(new Date(currentDate.getFullYear(), currentDate.getMonth() - 6, currentDate.getDate())).format("YYYY-MM-DD");
      }else{
        initialDateQuery = moment(new Date(currentDate.getFullYear() - 1, currentDate.getMonth(), currentDate.getDate())).format("YYYY-MM-DD");
      }

      console.log('INITIAL DATE QUERY: ', initialDateQuery);
      console.log('FINAL DATE QUERY: ', finalDateQuery);
      try{
        (async () => {
          const response = await fetch(`http://192.168.0.102:8080/graphicalPreview/getGraphicalPreview?initialDate=${initialDateQuery}&finalDate=${finalDateQuery}`, {
            method: 'GET'
          })
          console.log('IS RESPONSE OK? ', response.ok)
          console.log('Response.status: ', response.status)
          console.log('RESPONSE: ', response)
          if(response.ok){
            const data = await response.json();
            console.log('DATA: ', data)
            const graphiData = calculateGraphicData(data);
            setGraphicData(calculateGraphicData(data));
          }
      })();
      } catch(error){
        console.log('ERROR: ', error)
      }
    }, [displayedTimeFrame])

    const handleSelectTimeFrame = async (newTimeFrame: 'one-month' | 'six-months' | 'one-year') => {
      if(displayedTimeFrame !== newTimeFrame){
        setDisplayedTimeFrame(newTimeFrame)
      }
    }

    const linedata = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
          {
            data: graphicData.totalBalance,
            strokeWidth: 2, // optional
          },
        ],
    };

    return(
        <View style={styles.chartContainer}>
        <View style={styles.viewModesContainer}>
          <View onTouchEnd={() => handleSelectTimeFrame('one-month')} style={displayedTimeFrame === 'one-month' ? ([styles.viewMode, {backgroundColor: '#00ddff'}]) : (styles.viewMode)}><Text style={styles.viewModeText}>1 Month</Text></View>
          <View onTouchEnd={() => handleSelectTimeFrame('six-months')} style={displayedTimeFrame === 'six-months' ? ([styles.viewMode, {backgroundColor: '#00ddff'}]) : (styles.viewMode)}><Text style={styles.viewModeText}>6 Months</Text></View>
          <View  onTouchEnd={() => handleSelectTimeFrame('one-year')} style={displayedTimeFrame === 'one-year' ? ([styles.viewMode, {backgroundColor: '#00ddff'}]) : (styles.viewMode)}><Text style={styles.viewModeText}>12 Months</Text></View>
        </View>
        {/* <LineChart style={styles.chart}
            data={{dataSets:[{label: "demo", values: [{y: 1}, {y: 2}, {y: 1}]}]}}
          /> */}



          {/* https://github.com/indiespirit/react-native-chart-kit/issues/37  */}

        <LineChart
					bezier
					withHorizontalLabels={false}
					withVerticalLabels={false}
					data={{
						labels: [' 1', ' 2', ' 3', ' 4', ' 5', ' 6'],
						datasets: [
							{
								data: [1, 7, 6, 4, 2, 5],
								strokeWidth: 2,
								color: (opacity = 1) => `rgba(255,0,0,${opacity})`, // optional
							},
							{
								data: [2, 4, 6, 8, 8, 2],
								strokeWidth: 2,
								color: (opacity = 1) => `rgba(0,0,102, ${opacity})`, // optional
							},
							{
								data: [9, 4, 7, 8, 2, 4],
								strokeWidth: 2,
								color: (opacity = 1) => `rgba(0,102,0, ${opacity})`, // optional
							},
						],
						legend: ['Maths', 'SOM', 'DS'],
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
    //   backgroundColor: '#00ddff',
      backgroundColor: '#333',
      borderRadius: 12,
      paddingVertical: 3,
      paddingHorizontal: 9,
    },
    viewModeText: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 14
    },
    chart: {
      flex: 1
    }
});

// Library I'm using right now: https://github.com/indiespirit/react-native-chart-kit
// Best Libraries for charts in React Native: https://blog.logrocket.com/top-8-react-native-chart-libraries-2023/ 
// Best recommended library: https://github.com/wuxudong/react-native-charts-wrapper

// D3.Js course: https://www.freecodecamp.org/learn/data-visualization/#data-visualization-with-d3 
// D3.Js tutorial with React Native: https://betterprogramming.pub/d3-and-react-native-an-essential-guide-to-line-graphs-dc1ce392b440 