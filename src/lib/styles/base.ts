import {ViewStyle} from 'react-native';

export const row: ViewStyle = {
  flexDirection: 'row',
};

export const rowSpaceBetween: ViewStyle = {
  ...row,
  justifyContent: 'space-between',
};

export const centerContent: ViewStyle = {
  alignItems: 'center',
  justifyContent: 'center',
};
