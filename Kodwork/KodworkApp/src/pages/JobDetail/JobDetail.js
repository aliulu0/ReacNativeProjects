/* eslint-disable no-shadow */
import React from 'react';
import {View, Text, ScrollView, useWindowDimensions, Alert} from 'react-native';
import useFetch from '../../hooks/useFetch';
import styles from './JobDetail.style';
import {API_JOBS_URL} from '@env';
import RenderHTML from 'react-native-render-html';
import {useSelector, useDispatch} from 'react-redux';
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import Button from '../../components/Button';
const JobDetail = ({route}) => {
  const {id} = route.params;
  const {data, loading, error} = useFetch(`${API_JOBS_URL}/${id}`);
  const {width} = useWindowDimensions();
  const favoriteJobs = useSelector(selection => selection.favoriteJobs);
  const dispatch = useDispatch();
  console.log(id);
  const source = {
    html: `${data.contents}`,
  };
  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }

  const isAdded = id => favoriteJobs.some(job => job.id === id);
  const handleFavoriteJob = favoriteJob => {
    if (favoriteJobs.length > 0 && isAdded(favoriteJob.id)) {
      Alert.alert('Job was already added!');
    } else {
      dispatch({type: 'ADD_FAVORITE', payload: {favoriteJob}});
      Alert.alert('Job succesfully added!');
    }
  };

  const handleSubmitJob = () => {
    Alert.alert('Successfully submitted');
  };
  return (
    <View style={styles.container}>
      <View style={styles.header_container}>
        <Text style={styles.header}>{data.name}</Text>
        <View style={styles.location_container}>
          <Text style={styles.locations_title}>Locations : </Text>
          <Text style={styles.locations_text}>{data.locations[0].name}</Text>
        </View>
        <View style={styles.level_container}>
          <Text style={styles.level_title}>Job Level : </Text>
          <Text style={styles.level_text}>{data.levels[0].name}</Text>
        </View>
        <Text style={styles.detail}>Job Detail</Text>
      </View>
      <ScrollView style={styles.description_container}>
        <RenderHTML
          baseStyle={styles.description_container_text}
          contentWidth={width}
          source={source}
        />
      </ScrollView>
      <View style={styles.button_container}>
        <Button icon="send" text="Submit" onPress={handleSubmitJob} />
        <Button
          icon="heart"
          text="Favourite Job"
          onPress={() => handleFavoriteJob(data)}
        />
      </View>
    </View>
  );
};

export default JobDetail;
