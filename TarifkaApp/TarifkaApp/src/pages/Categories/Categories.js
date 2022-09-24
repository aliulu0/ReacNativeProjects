import React from 'react';
import {View, FlatList} from 'react-native';
import styles from './Categories.style';
import {API_CATEGORIES} from '@env';
import CategoryCard from '../../components/CategoryCard';
import useFetch from '../../hooks/useFetch/useFetch';
import Loading from '../../components/Loading';
import Error from '../../components/Error';

const Categories = ({navigation}) => {
  const {data, loading, error} = useFetch(API_CATEGORIES);
  const handleMealSelect = strCategory => {
    navigation.navigate('MealsPage', {strCategory});
  };
  const renderCategories = ({item}) => (
    <CategoryCard
      categories={item}
      onSelect={() => handleMealSelect(item.strCategory)}
    />
  );
  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }
  return (
    <View style={styles.container}>
      <View style={styles.body_container}>
        <FlatList
          data={data.categories}
          renderItem={renderCategories}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default Categories;
