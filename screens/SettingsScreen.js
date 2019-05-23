import React from 'react';
import Preferences from '../components/Preferences';

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'Preferences',
  };

  render() {
    return <Preferences />;
  }
}
