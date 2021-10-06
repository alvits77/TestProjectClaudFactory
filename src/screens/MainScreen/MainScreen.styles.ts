import {StyleSheet} from 'react-native';
import {black, centerContent, white} from '../../lib/styles';

const styles = StyleSheet.create({
  container: {
    ...centerContent,
    flex: 1,
    backgroundColor: white,
  },
  text: {
    fontSize: 20,
    color: black,
  },
});

export default styles;
