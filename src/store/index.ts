import {createContext, useContext} from 'react';
import QuotesStore from './QuotesStore';

export interface IStore {
  quotesStore: typeof QuotesStore;
}

export const store: IStore = {
  quotesStore: QuotesStore,
};

export const StoreContext = createContext(store);

export const useStore = () => {
  return useContext(StoreContext);
};
