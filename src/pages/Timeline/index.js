/* eslint-disable react/prop-types */
import React from 'react';
import { View, Text } from 'react-native';
import ListTimeline from 'react-native-timeline-flatlist';

import PageHeader from '../../components/PageHeader';

import styles from './styles';

const Timeline = ({ route }) => {
  const { repos, user } = route.params;

  return (
    <>
      <PageHeader />
      <View style={styles.timelineContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>{`Usuário: ${user}`}</Text>
          <Text style={styles.text}>{`Repositórios: ${repos.length}`}</Text>
        </View>
        <ListTimeline
          data={repos}
          circleSize={25}
          circleColor="rgb(196,196,196)"
          lineColor="rgb(142, 142, 142)"
          eventContainerStyle={styles.eventContainer}
          eventDetailStyle={styles.eventDetail}
          lineWidth={5}
          timeContainerStyle={styles.timeContainer}
          descriptionStyle={styles.text}
          titleStyle={styles.text}
          timeStyle={styles.text}
        />
      </View>
    </>
  );
};

export default Timeline;
