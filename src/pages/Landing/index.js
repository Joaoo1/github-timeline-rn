import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import Image from '../../assets/svg/landing.svg';

import styles from './styles';

const Landing = () => {
  const { navigate } = useNavigation();

  function handleNavigateToSearch() {
    navigate('Search');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>GitHub Timeline</Text>
      <Image style={styles.image} />
      <Text style={styles.centeredText}>
        Este é um aplicativo para você conseguir visualizar todos os seus
        repositórios que estão no GitHub seguindo uma linha do tempo.
      </Text>
      <RectButton style={styles.button} onPress={handleNavigateToSearch}>
        <Text style={styles.buttonText}>Prosseguir</Text>
      </RectButton>
    </View>
  );
};

export default Landing;
