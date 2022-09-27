import React from 'react';
import {View, FlatList, Alert} from 'react-native';
import styles from './FavoritedJob.style';
import JobsCard from '../../components/JobsCard';
import Button from '../../components/Button';
import {useDispatch, useSelector} from 'react-redux';

const FavoritedJob = ({navigation}) => {
  const jobs = useSelector(s => s.favoriteJobs);
  const dispatch = useDispatch();
  console.log(jobs);
  const removeJob = id => {
    dispatch({type: 'REMOVE_FAVORITE', payload: {id}});
    Alert.alert('Jobs', 'Removed Job ');
  };

  const handleJobDetail = (id, name) => {
    navigation.navigate('JobDetailPage', {id, name});
  };

  const renderFavoritedJob = ({item}) => (
    <View style={styles.inner_container}>
      <JobsCard
        job={item}
        onSelect={() => handleJobDetail(item.id, item.name)}
      />
      <View style={styles.button_container}>
        <Button
          icon="delete"
          text="Remove Job"
          onPress={() => removeJob(item.id)}
        />
      </View>
    </View>
  );
  return (
    <View>
      <FlatList
        style={styles.container}
        data={jobs}
        renderItem={renderFavoritedJob}
      />
    </View>
  );
};

export default FavoritedJob;
