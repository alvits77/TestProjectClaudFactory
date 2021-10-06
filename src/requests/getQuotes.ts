import {runRequest} from '../utils/runRequest';
import {QuotesResponseType} from '../types/quotes';

export const getQuotes = () => {
  return runRequest<QuotesResponseType>('https://poloniex.com/public?command=returnTicker');
};
