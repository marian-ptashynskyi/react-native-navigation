import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import Profile from '../components/Profile';

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'My Profile',
  };

  render() {
    return <Profile />;
  }
}