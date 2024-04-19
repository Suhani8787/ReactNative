import axios from 'axios';
import React, {Component} from 'react';
import {ScrollView, Text, View} from 'react-native';
import SWDetails from './SWDetails.js';

export class SWList extends Component {
  state = {SWlist: []};

  componentDidMount() {
    axios.get('https://my-json-server.typicode.com/Suhani8787/mobile/db')
      .then(response => {
        this.setState({SWlist: response.data});
      });
  }
  renderList = () => {
    return this.state.SWlist.map((sw, index) => {
      return <SWDetails key={index} sw={sw} />;
    });
  };

  render() {
    console.log(this.state);
    return <ScrollView>{this.renderList()}</ScrollView>;
  }
}

export default SWList;