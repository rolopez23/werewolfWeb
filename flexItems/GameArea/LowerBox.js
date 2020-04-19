import React from 'react';
import {View, Text} from 'react-native';

const LowerBox = ({styles, village}) => {
  const specials = village.roleList.filter(
    role => role.roleType === 'specialVillager',
  );

  return (
    <View style={[styles.villagebox]}>
      <Text style={[styles.titleText, styles.village, styles.shadow]}>Village Team</Text>
      {specials.map(special => (
        <Text style={[styles.text, styles.village, styles.shadow]}>
          {special.roleName}
        </Text>
      ))}
      <Text style={[styles.text, styles.village, styles.shadow]}>{`${
        village.villagers
      } Villagers`}</Text>
    </View>
  );
};

export default LowerBox;
