import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const customButton = ({label, styles, onPress}) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <View style={styles.center}>
      <Text style={[styles.text]}>{label}</Text>
    </View>
  </TouchableOpacity>
);

export default customButton;
