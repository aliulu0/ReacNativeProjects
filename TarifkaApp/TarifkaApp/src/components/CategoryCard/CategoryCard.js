import React from 'react';
import {View, Text, Image, TouchableWithoutFeedback} from 'react-native';
import styles from './CategoryCard.style';

const CategoriesCard = ({categories, onSelect}) => {
  return (
    <TouchableWithoutFeedback onPress={onSelect}>
      <View style={styles.container}>
        <Image
          source={{uri: categories.strCategoryThumb}}
          style={styles.image}
        />
        <Text style={styles.title}>{categories.strCategory}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default CategoriesCard;
