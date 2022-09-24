import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableWithoutFeedback,
} from 'react-native';
import styles from './MealCard.style';

const MealCard = ({meals, onSelect}) => {
  return (
    <TouchableWithoutFeedback onPress={onSelect}>
      <View style={styles.container}>
        <ImageBackground
          borderRadius={10}
          source={{uri: meals.strMealThumb}}
          style={styles.image}>
          <View style={styles.inner_container}>
            <View style={styles.info_container}>
              <Text style={styles.title}>{meals.strMeal}</Text>
            </View>
          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default MealCard;
