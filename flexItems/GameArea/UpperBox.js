import React from 'react';
import {View, Text} from 'react-native';

const UpperBox = ({styles, village}) => {
  const vanillaWolf =
    village.werewolves - village.direwolf - village.specialWerewolves;
  const specialWerewolves = village.roleList.filter(
    role => role.roleType === 'specialWerewolf',
  );
  const werewolfSupport = village.roleList.filter(
    role => role.roleType === 'werewolfSupport',
  );

  const switchers = village.roleList.filter(
    role => role.roleType === 'teamSwitcher',
  );

  return (
    <View style={[styles.topbox, styles.border]}>
      <View style={[styles.wolfbox]}>
        <Text style={[styles.wolfTitle, styles.shadow]}>Werewolf Team</Text>
        <Text style={[styles.wolf, styles.text, styles.shadow]}>
          {vanillaWolf} Werewolf
        </Text>
        {village.direwolf === 1 ? (
          <Text style={[styles.wolf, styles.text, styles.shadow]}>
            Direwolf
          </Text>
        ) : null}
        {specialWerewolves.map(role => (
          <Text style={[styles.wolf, styles.text, styles.shadow]}>
            {role.roleName}
          </Text>
        ))}
        {werewolfSupport.map(support => (
          <Text style={[styles.wolf, styles.text, styles.shadow]}>{support.roleName}</Text>
        ))}
      </View>
      <View style={styles.upperGutter} />
      <View style={[styles.wolfbox]}>
        {village.thirdParty ? (
          <Text style={[styles.titleText, styles.switch, styles.shadow]}>
            Wildcard
          </Text>
        ) : null}
        {village.thirdParty ? (
          <Text style={[styles.text, styles.switch, styles.shadow]}>
            {switchers[0].roleName}
          </Text>
        ) : null}
      </View>
    </View>
  );
};

export default UpperBox;
