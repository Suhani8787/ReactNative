import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import Item from './Item.js';
import ItemSection from './ItemSection.js';

const SWDetails = (props) => {
  const {headContainer, headerText, imageStyle} = styles;
  const {sw} = props;
  return (
    <Item>
      <ItemSection>
        <View style={headContainer}>
          <Text style={headerText.text}>Brand: {props.sw.brand}</Text>
          <Text style={headerText.text}>Model: {props.sw.model}</Text>
          <Text style={headerText.text}>URL: {props.sw.url}</Text>
        </View>
      </ItemSection>
    </Item>
  );
};

styles = {
  headContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },

  headerText: {
    fontSize: 20,
    fontWeight: 500,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },

  imageStyle: {
    height: 300,
    flex: 1,
  },
};

export default SWDetails;