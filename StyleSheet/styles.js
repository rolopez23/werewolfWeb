import { StyleSheet, TouchableWithoutFeedback } from 'react-native';

const styles = StyleSheet.create({
  app: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderRadius: 10,
    borderColor: 'white',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  border: {
    borderWidth: 1,
    borderColor: 'white',
  },
  fade: {
    opacity: 0.5,
  },
  gameSetup: {
    flex: 0.4,
    justifyContent: 'space-between',
    flexDirection: 'column',
  },
  gutter: {
    flex: 0.05,
    backgroundColor: '#484848',
  },
  gameSummary: {
    flex: 0.45,
    backgroundColor: '#484848',
  },
  settings: {
    flex: 0.3, 
  },
  timerBar: {
    flex: 0.2,
    flexDirection: 'row',
    backgroundColor: '#484848',
  },
  timer: {
    flex: 0.3,
  },
  text: {
    fontSize: 20,
    color: 'white',
  },
  titleText: {
    fontSize: 25,
    color: 'yellow',
  },
});

export default styles;
