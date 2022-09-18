/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Image, Text} from 'react-native';
import styles from './StoreCard.style';

const StoreCard = ({product}) => {
  return (
    <View style={styles.container}>
      <Image source={{uri: product.imageURL}} style={styles.image} />
      <View style={styles.inner_container}>
        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.price}>{product.price}</Text>
        <Text style={styles.stock}>{!product.inStock && 'STOKTA YOK'}</Text>
      </View>
    </View>
  );
};

export default StoreCard;
