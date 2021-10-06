import {StyleSheet} from 'react-native';
import {centerContent, white} from '../../lib/styles';

const styles = StyleSheet.create({
  container: {
    ...centerContent,
    flex: 1,
    backgroundColor: white,
  },
  text: {
    fontSize: 20,
  },
});

export default styles;
