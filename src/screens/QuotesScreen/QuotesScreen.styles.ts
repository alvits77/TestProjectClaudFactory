import {StyleSheet} from 'react-native';
import { black, centerContent, greyLight, red, rowSpaceBetween, white } from '../../lib/styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: white,
    flex: 1,
  },
  title: {
    paddingHorizontal: 20,
    fontSize: 20,
    color: black,
  },
  text: {
    color: black,
    fontSize: 13,
  },
  item: {
    ...rowSpaceBetween,
    borderBottomColor: greyLight,
    borderBottomWidth: 1,
    padding: 10,
  },
  error: {
    color: red,
    fontSize: 28,
    padding: 20,
  },
  cell1: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  cell2: {
    flex: 1,
    ...centerContent,
  },
  cell3: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
});

export default styles;
