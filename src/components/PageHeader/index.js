import React from 'react';
import { Platform, NativeModules, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import BackIcon from '../../assets/svg/arrow-back.svg';
import AboutIcon from '../../assets/svg/about-icon.svg';

import styles from './styles';

// eslint-disable-next-line react/prop-types
const PageHeader = ({ isAbout }) => {
  const { StatusBarManager } = NativeModules;
  const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBarManager.HEIGHT;

  const navigation = useNavigation();

  function handleBack() {
    navigation.goBack();
  }

  function handleNavigateToAbout() {
    navigation.navigate('About');
  }

  return (
    <View style={[styles.container, { marginTop: STATUSBAR_HEIGHT }]}>
      <BackIcon onPress={handleBack} style={styles.icon} />
      <Text style={styles.titleStyle}> GitHub Timeline</Text>
      {isAbout ? (
        // eslint-disable-next-line prettier/prettier
        <Text>     </Text> // Work around to maintain the title centralized
      ) : (
        <AboutIcon onPress={handleNavigateToAbout} style={styles.icon} />
      )}
    </View>
  );
};

export default PageHeader;
