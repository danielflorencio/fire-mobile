import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
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