import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, TextInput } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import Toast from 'react-native-simple-toast';
import moment from 'moment';

import api from '../../services/api';
import PageHeader from '../../components/PageHeader';

import styles from './styles';

const Search = () => {
  const { navigate } = useNavigation();

  const [user, setUser] = useState('');

  function handleGenerateTimeline() {
    if (user === '') {
      Toast.show('O campo não pode ficar em branco!');
      return;
    }

    api
      .get(`users/${user}/repos`, {
        params: { sort: 'create', direction: 'desc', per_page: 1000 },
      })
      .then((response) => {
        const repos = response.data.map((repo) => ({
          description: repo.description,
          title: repo.name,
          time: moment(new Date(repo.created_at))
            .subtract(3, 'hours')
            .format('DD/MM/YY'),
        }));

        navigate('Timeline', { repos, user });
      })
      .catch((error) => {
        if (error.response) {
          const { status } = error.response;
          if (status === 404) {
            Toast.show('Usuário não encontrado!');
          } else {
            Toast.show('Ocorreu um erro!');
          }
        } else {
          Toast.show('Ocorreu um erro!');
        }
      });
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
            onChangeText={setUser}
            value={user}
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
