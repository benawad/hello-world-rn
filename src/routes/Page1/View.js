import React from 'react';
import { 
  View,
  Text,
  Button,
} from 'react-native';
import { Actions } from 'react-native-router-flux';

export default ({ counter, actions: { incrementCounter } }) => (
  <View>
    <Text>Hello from page1</Text>
    <Button 
      title='Go to Page 2'
      onPress={() => Actions.page2({})} />
    <Button 
      title='Go to Page 3'
      onPress={() => Actions.page3({})} />
    <Button 
      title='Increment'
      onPress={() => incrementCounter()} />
    <Text>{ counter }</Text>
  </View>
);
