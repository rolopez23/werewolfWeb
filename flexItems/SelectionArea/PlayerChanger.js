import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

const PlayerChanger = ({styles, change}) => (
  <View style={styles.playerChanger}>
    <TouchableOpacity
      onPress={() => {
        change(1);
      }}>
      <Image
        style={{height: 25, width: 25}}
        source={require('../../images/upArrow.png')}
      />
    </TouchableOpacity>
    <TouchableOpacity
      onPress={() => {
        change(-1);
      }}>
      <Image
        style={{ height: 25, width: 25 }}
        source={require('../../images/downArrow.png')}
      />
    </TouchableOpacity>
  </View>
);

export default PlayerChanger;
