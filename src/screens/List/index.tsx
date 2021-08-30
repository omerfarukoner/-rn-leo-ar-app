import PropTypes from 'prop-types';
import React, { useEffect, useRef, useState } from 'react';
import { View, Text } from 'react-native';

import { DATA, STRINGS, STYLES } from '../../constants';
import { TrackCard, GenreList } from '../../components';
import styles from './styles';
import { FlatList } from 'react-native';

export type Props = {
  navigation: any;
};

const List: React.FC<Props> = ({ navigation }) => {
  List.propTypes = {
    navigation: PropTypes.any,
  };

  const flatlistRef = useRef<any>();

  useEffect(() => {
    navigation.setOptions({
      title: STRINGS.chooseMusic,
      headerTransparent: false,
      headerLeft: () => <Text style={STYLES.headerSide}>{STRINGS.cancel}</Text>,
      headerRight: () => <Text style={STYLES.headerSide}>{STRINGS.done}</Text>,
    });
  }, []);

  const [chosenGenre, setChosenGenre] = useState<string>('All');

  const [trackList, setTrackList] = useState<any>([]);
  const [filteredData, setFilteredData] = useState<any>([]);

  const filter = () => {
    const filteredList = trackList.filter(function (item: { tags: string | string[] }) {
      return item.tags.includes(chosenGenre.toLowerCase());
    });
    setFilteredData(filteredList);
  };

  useEffect(() => {
    setTrackList(Object.values(DATA));
  }, []);

  useEffect(() => {
    filter();
  }, [chosenGenre]);

  return (
    <View style={styles.centeredView}>
      <GenreList chosenGenre={chosenGenre} setChosenGenre={setChosenGenre} />
      <FlatList
        ref={flatlistRef}
        data={chosenGenre === 'All' ? trackList : filteredData}
        renderItem={({ item }) => <TrackCard track={item} />}
        contentContainerStyle={styles.list}
        keyExtractor={(item, index) => String(index)}
        onEndReachedThreshold={0}
      />
    </View>
  );
};

export default List;
