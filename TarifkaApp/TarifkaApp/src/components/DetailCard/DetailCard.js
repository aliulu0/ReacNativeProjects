import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './DetailCard.style';

const DetailCard = ({meal, onselect}) => {
  return (
    <View style={styles.container}>
      <Image source={{uri: meal.strMealThumb}} style={styles.image} />
      <View style={styles.inner_container}>
        <Text style={styles.title}>{meal.strMeal}</Text>
        <Text style={styles.area}>{meal.strArea}</Text>
      </View>
      <View style={styles.separator} />
      <Text style={styles.description}>{meal.strInstructions}</Text>
      <TouchableOpacity style={styles.button} onPress={onselect}>
        <Text style={styles.button_link}>Watch on Youtube</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DetailCard;
