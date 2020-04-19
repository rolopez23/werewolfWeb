import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const customButton = ({label, styles, onPress, fade}) => (
  <TouchableOpacity style={[styles.button, styles[fade]]} onPress={onPress}>
    <View style={styles.center}>
      <Text style={[styles.text, styles[fade]]}>{label}</Text>
    </View>
  </TouchableOpacity>
);

export default customButton;
