import {StyleSheet, TouchableWithoutFeedback} from 'react-native';

const styles = StyleSheet.create({
  app: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  backgroundColor: {
    backgroundColor: '#21263a',
  },
  box: {
    flex: 0.5,
    flexDirection: 'row',
  },
  topbox: {
    flex: 0.4,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderRadius: 10,
    opacity: 1,
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
    color: '#111111',
    textShadowColor: 'yellow',
    textShadowRadius: 2,
    textShadowOffset: {height: 2, width: 2},
  },
  fadeBorder: {
    borderStyle: 'solid',
    color: '#F5F5F5',
    borderColor: '#F5F5F5',
  },
  fullScreen: {
    height: '100%',
    width: '100%',
  },
  gameSetup: {
    flex: 0.4,
    justifyContent: 'space-between',
    flexDirection: 'column',
  },
  gutter: {
    flex: 0.05,
  },
  gameSummary: {
    flex: 0.6,
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  normal: {
    opacity: 1,
    color: '#FFFDAF',
    borderColor: '#FFFDAF',
    textShadowColor: 'black',
    textShadowRadius: 2,
    textShadowOffset: {height: 2, width: 2},
  },
  players: {
    flex: 0.3,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  playerChanger: {
    flexDirection: 'column',
  },
  settings: {
    flex: 0.3,
  },
  selectionArea: {
    flex: 0.2,
  },
  switch: {
    color: '#FF00FF',
  },
  teams: {
    flex: 0.4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  timerBar: {
    flex: 0.2,
    flexDirection: 'row',
  },
  timer: {
    flex: 0.3,
  },
  title: {
    flex: 0.1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  sets: {
    flex: 0.3,
    flexDirection: 'row',
  },
  selection: {
    flex: 0.2,
  },
  shadow: {
  },
  text: {
    fontSize: 22,
  },
  titleText: {
    fontSize: 28,
  },
  upperGutter: {
    flex: 0.1,
  },
  village: {
    color: 'blue',
    textShadowColor: '#FFFDAF',
    textShadowRadius: 2,
    textShadowOffset: {height: 2, width: 2},
  },
  villagebox: {
    flex: 0.5,
    flexDirection: 'column',
  },
  wolfTitle: {
    color: 'red',
    fontSize: 28,
    opacity: 1,
  },
  wolf: {
    color: 'red',
    textShadowColor: 'black',
    textShadowRadius: 2,
    textShadowOffset: {height: 2, width: 2},
  },
  wolfBox: {
    flex: 0.45,
    flexDirection: 'column',
  },
});

export default styles;
