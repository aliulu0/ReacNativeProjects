import React, {useState} from 'react';
import {View, FlatList} from 'react-native';
import styles from './Jobs.style';
import {API_JOBS_URL} from '@env';

import useFetch from '../../hooks/useFetch';
import JobsCard from '../../components/JobsCard';
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import Button from '../../components/Button';

const Jobs = ({navigation}) => {
  const [page, setPage] = useState(1);
  const {data, loading, error} = useFetch(`${API_JOBS_URL}?page=${page}`);

  const handleSelectJob = (id, name) => {
    navigation.navigate('JobDetailPage', {id, name});
  };

  const renderJobs = ({item}) => (
    <JobsCard job={item} onSelect={() => handleSelectJob(item.id, item.name)} />
  );

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }
  return (
    <View style={styles.container}>
      <FlatList data={data.results} renderItem={renderJobs} />
      <View style={styles.icon_container}>
        <Button
          icon="minus-circle-outline"
          text="Previous Page"
          onPress={() =>
            setPage(prev => {
              if (prev <= 0) {
                return (prev = 0);
              } else {
                return prev - 1;
              }
            })
          }
          disabled={loading}
        />
        <Button
          icon="plus-circle-outline"
          text="Next Page"
          onPress={() =>
            setPage(prev => {
              if (prev >= 5) {
                return (prev = 0);
              } else {
                return prev + 1;
              }
            })
          }
          disabled={loading}
        />
      </View>
    </View>
  );
};

export default Jobs;
