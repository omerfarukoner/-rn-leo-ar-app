import React, { useEffect, useState } from 'react';
import { View, FlatList } from 'react-native';

import { DATA } from '../../constants';
import styles from './styles';

import { GenreItem } from '../../components';
interface GenreListProps {
  chosenGenre: string;
  setChosenGenre: any;
}

const GenreList: React.FC<GenreListProps> = ({ chosenGenre, setChosenGenre }: GenreListProps) => {
  const [genres, setGenres] = useState<string[]>();

  useEffect(() => {
    let tempGenreList: string[] = ['All'];
    Object.values(DATA).map((item: any) => {
      tempGenreList = [...new Set([...tempGenreList, ...item.tags])];
    });
    setGenres(tempGenreList);
  }, []);

  return (
    <View style={styles.flatListContainer}>
      <FlatList
        horizontal={true}
        showsVerticalScrollIndicator={false}
        data={genres}
        renderItem={({ item }) => (
          <GenreItem
            setChosenGenre={setChosenGenre}
            isChosenGenre={chosenGenre == item ? true : false}
            item={item}
          />
        )}
        style={styles.flatList}
        keyExtractor={(index) => String(index)}
        onEndReachedThreshold={0}
      />
    </View>
  );
};

export { GenreList };
