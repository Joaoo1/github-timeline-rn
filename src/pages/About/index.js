import React from 'react';
import { View, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import Toast from 'react-native-simple-toast';

import PageHeader from '../../components/PageHeader';

import styles from './styles';

const About = () => {
  function handleRateInStore() {
    // TODO: Do rate
    Toast.show('Disponível em breve');
  }

  return (
    <>
      <PageHeader isAbout />
      <View style={styles.container}>
        <View>
          <Text style={styles.centeredText}>
            GitHub Timeline - Linha do tempo de seus repositórios
          </Text>
          <Text style={styles.centeredText}>1.0.0</Text>
          <RectButton onPress={handleRateInStore} style={styles.button}>
            <Text style={styles.buttonText}>Avalie na loja</Text>
          </RectButton>
        </View>
        <View>
          <Text style={styles.rightText}>
            Desenvolvido por João Vitor da Silva
          </Text>
          <Text style={styles.rightText}>silva.joao1@outlook.com.br</Text>
        </View>
      </View>
    </>
  );
};

export default About;
