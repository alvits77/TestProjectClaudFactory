import {flow, makeAutoObservable} from 'mobx';
import {getQuotes} from '../requests/getQuotes';
import {map} from 'lodash';
import {QuotationType, QuotesResponseType} from '../types/quotes';

class QuotesStore {
  quotes: QuotationType[] = [];
  state: 'pending' | 'success' | 'error' = 'pending';
  iteration: number = 1;

  constructor() {
    makeAutoObservable(this, {
      fetchQuotes: flow,
    });
  }

  *fetchQuotes(this: QuotesStore) {
    try {
      this.state = 'pending';
      const quotes: QuotesResponseType = yield getQuotes();
      this.state = 'success';
      this.iteration += 1;
      this.quotes = map(quotes, (value, name) => {
        return {
          ...value,
          name,
        };
      });
    } catch (error) {
      this.state = 'error';
      console.log('fetchQuotes Error', error);
    }
  }
}

export default new QuotesStore();
