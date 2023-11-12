import {StyleSheet} from 'react-native'

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