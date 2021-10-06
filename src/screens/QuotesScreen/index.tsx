import React, {useCallback, useRef} from 'react';
import {Text, FlatList, ListRenderItem, SafeAreaView, ActivityIndicator} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';
import {observer} from 'mobx-react-lite';
import {useStore} from '../../store';
import {QuotationType} from '../../types/quotes';
import {QuoteItem} from './QuoteItem';
import {orange} from '../../lib/styles';
import styles from './QuotesScreen.styles';

const ITEM_HEIGHT = 55;

const QuotesScreen: React.FC = () => {
  const timerRef = useRef<ReturnType<typeof setInterval> | number>();
  const {quotesStore} = useStore();

  useFocusEffect(
    useCallback(() => {
      timerRef.current = setInterval(() => {
        quotesStore.fetchQuotes();
      }, 5000);

      return () => {
        console.log('clear interval');
        clearInterval(timerRef.current as number);
      };
    }, []),
  );

  const _renderItem: ListRenderItem<QuotationType> = ({item}) => {
    return <QuoteItem {...item} />;
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Котировки</Text>
      {quotesStore.iteration === 1 && quotesStore.state === 'pending' ? (
        <ActivityIndicator size={'large'} animating={true} color={orange} style={{flex: 1}} />
      ) : (
        <FlatList
          getItemLayout={(data, index) => ({
            length: ITEM_HEIGHT,
            offset: ITEM_HEIGHT * index,
            index,
          })}
          keyExtractor={item => String(item.id)}
          data={quotesStore.quotes}
          renderItem={_renderItem}
          ListHeaderComponent={() =>
            quotesStore.state === 'error' ? <Text style={styles.error}>Ошибка!</Text> : <></>
          }
        />
      )}
    </SafeAreaView>
  );
};

export default observer(QuotesScreen);
