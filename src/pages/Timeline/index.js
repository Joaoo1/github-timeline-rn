import React from 'react';
import { View, Text } from 'react-native';
import ListTimeline from 'react-native-timeline-flatlist';

import PageHeader from '../../components/PageHeader';

import styles from './styles';

const Timeline = () => {
  const data = [
    {
      time: '10/12/2020',
      title: 'Event 1',
      description: 'Event 1 Description',
    },
    {
      time: '10/12/2020',
      title: 'Event 2',
      description: 'Event 2 Description',
    },
    {
      time: '10/12/2020',
      title: 'Event 3',
      description: 'Event 3 Description',
    },
    {
      time: '10/12/2020',
      title: 'Event 4',
      description: 'Event 4 Description',
    },
    {
      time: '10/12/2020',
      title: 'Event 5',
      description: 'Event 5 Description',
    },
  ];

  return (
    <>
      <PageHeader />
      <View style={styles.timelineContainer}>
        <Text style={styles.rightText}>Usuário: Joaoo1</Text>
        <ListTimeline
          data={data}
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
