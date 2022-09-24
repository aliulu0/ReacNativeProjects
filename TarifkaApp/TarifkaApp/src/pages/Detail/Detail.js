import React from 'react';
import {FlatList, View, Linking} from 'react-native';
import styles from './Detail.style';
import useFetch from '../../hooks/useFetch/useFetch';
import {API_DETAIL} from '@env';
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import DetailCard from '../../components/DetailCard';

const Detail = ({route}) => {
  const {idMeal} = route.params;
  console.log(idMeal);

  const {data, loading, error} = useFetch(`${API_DETAIL}${idMeal}`);

  const renderMealDetail = ({item}) => (
    <DetailCard meal={item} onselect={() => Linking.openURL(item.strYoutube)} />
  );
  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={data.meals}
        renderItem={renderMealDetail}
        keyExtractor={item => item.idMeal}
      />
    </View>
  );
};

export default Detail;
