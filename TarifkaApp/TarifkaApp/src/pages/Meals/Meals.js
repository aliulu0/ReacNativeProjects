import React from 'react';
import {View, FlatList} from 'react-native';
import styles from './Meals.style';
import MealCard from '../../components/MealCard';
import {API_MEALS} from '@env';
import useFetch from '../../hooks/useFetch/useFetch';
import Loading from '../../components/Loading';
import Error from '../../components/Error';

const Meals = ({route, navigation}) => {
  const {strCategory} = route.params;

  const {data, loading, error} = useFetch(`${API_MEALS}${strCategory}`);

  const handleMealSelect = idMeal => {
    navigation.navigate('DetailPage', {idMeal});
  };
  const renderMeals = ({item}) => (
    <MealCard meals={item} onSelect={() => handleMealSelect(item.idMeal)} />
  );
  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }

  return (
    <View style={styles.container}>
      <FlatList data={data.meals} renderItem={renderMeals} />
    </View>
  );
};

export default Meals;
