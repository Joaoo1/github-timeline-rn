import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, TextInput } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import PageHeader from '../../components/PageHeader';

import styles from './styles';

const Search = () => {
  const { navigate } = useNavigation();

  function handleGenerateTimeline() {
    navigate('Timeline');
  }

  return (
    <>
      <PageHeader />
      <View style={styles.container}>
        <View>
          <Text style={styles.centeredText}>
            Informe seu nome de usuário do GitHub para que possamos buscar seus
            repositórios
          </Text>
          <TextInput
            autoCorrect={false}
            placeholder="Nome de usuário"
            style={styles.textInput}
          />
        </View>
        <RectButton onPress={handleGenerateTimeline} style={styles.button}>
          <Text style={styles.buttonText}>Pesquisar</Text>
        </RectButton>
      </View>
    </>
  );
};

export default Search;
