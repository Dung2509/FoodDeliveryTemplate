/* eslint-disable prettier/prettier */
import React from 'react';
import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const ItemType = ({type, image, selected, onSelected, id}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => onSelected(id)}>
      <View style={[styles.imgBg, selected && {backgroundColor: '#D35400'}]}>
        <Image
          source={image}
          resizeMode="contain"
          style={[styles.icon, selected && {tintColor: '#FFF'}]}
        />
      </View>
      <Text style={styles.text}>{type}</Text>
    </TouchableOpacity>
  );
};

export default ItemType;

const styles = StyleSheet.create({
  container: {
    marginRight: 10,
    alignItems: 'center',
    marginVertical: 10,
  },
  text: {
    fontSize: 10,
    alignSelf: 'center',
  },

  imgBg: {
    backgroundColor: '#F1F2F6',
    padding: 10,
    borderRadius: 15,
    width: 50,
    height: 50,
  },
  icon: {
    tintColor: '#222',
  },
});
