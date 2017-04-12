import React from 'react';
import { 
  View,
  Text,
  Button,
} from 'react-native';
import { Actions } from 'react-native-router-flux';

export default () => (
  <View>
    <Text>Hello from page3</Text>
    <Button 
      title='Go to Page 1'
      onPress={() => Actions.page1({})} />
    <Button 
      title='Go to Page 2'
      onPress={() => Actions.page2({})} />
  </View>
);
