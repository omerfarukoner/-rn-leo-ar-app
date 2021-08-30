import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import styles from './styles';

export type GenreItemProps = {
  item: any;
  isChosenGenre: boolean;
  setChosenGenre: any;
};

const GenreItem: React.FC<GenreItemProps> = ({
  item,
  isChosenGenre,
  setChosenGenre,
}: GenreItemProps) => {
  return (
    <TouchableOpacity onPress={() => setChosenGenre(item)}>
      <Text style={isChosenGenre ? styles.chosenText : styles.text}>{item}</Text>
    </TouchableOpacity>
  );
};

export { GenreItem };
