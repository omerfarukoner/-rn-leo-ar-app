import React from 'react';
import { Text, View, Image } from 'react-native';

import { STRINGS } from '../../constants/Strings';
import styles from './styles';

export interface TrackProps {
  track: {
    name: string;
    artistName: string;
    thumbUrl: string;
    tags: string[];
  };
}

const list = (array: any[]) => {
  let temp = '';
  array.map((item) => {
    temp += item + ' #';
  });
  return temp;
};

const TrackCard: React.FC<TrackProps> = ({ track }: TrackProps) => {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.innerContainer}>
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: track.thumbUrl,
            }}
            style={styles.image}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.trackText}>{track.name}</Text>
          <Text style={styles.trackSubText} numberOfLines={1}>
            {track.artistName}
          </Text>
          <Text style={styles.trackSubText} numberOfLines={1}>
            #{list(track.tags)}
          </Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <Text style={styles.buttonText}>{STRINGS.choose}</Text>
      </View>
    </View>
  );
};

export { TrackCard };
