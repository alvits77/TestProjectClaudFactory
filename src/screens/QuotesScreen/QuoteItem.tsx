import React, {useEffect, useRef} from 'react';
import {View, Text, Animated} from 'react-native';
import {green, red} from '../../lib/styles';
import {QuotationType} from '../../types/quotes';
import styles from './QuotesScreen.styles';

export const QuoteItem: React.FC<QuotationType> = React.memo(
  ({name, last, highestBid, percentChange}) => {
    const controlsFadeValue = useRef(new Animated.Value(1)).current;

    useEffect(() => {
      Animated.timing(controlsFadeValue, {
        toValue: 0.3,
        duration: 500,
        useNativeDriver: true,
      }).start(({finished}) => {
        if (finished) {
          Animated.timing(controlsFadeValue, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true,
          }).start();
        }
      });
    });

    return (
      <Animated.View style={[styles.item, {opacity: controlsFadeValue}]}>
        <View style={styles.cell1}>
          <Text style={styles.text}>{name}</Text>
        </View>
        <View style={styles.cell2}>
          <Text style={styles.text}>{last}</Text>
          <Text style={styles.text}>{highestBid}</Text>
        </View>
        <View style={styles.cell3}>
          <Text style={{color: parseFloat(percentChange) > 0 ? green : red}}>{percentChange}</Text>
        </View>
      </Animated.View>
    );
  },
  (prevProps, nextProps) => {
    return (
      prevProps.name === nextProps.name &&
      prevProps.last === nextProps.last &&
      prevProps.highestBid === nextProps.highestBid &&
      prevProps.percentChange === nextProps.percentChange
    );
  },
);
