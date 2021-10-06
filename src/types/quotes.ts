export type QuotesResponseType = {
  [key: string]: {
    id: number;
    last: string;
    lowestAsk: string;
    highestBid: string;
    percentChange: string;
    baseVolume: string;
    quoteVolume: string;
    isFrozen: string;
    postOnly: string;
    high24hr: string;
    low24hr: string;
  };
};

export type QuotationType = {
  name: string;
  id: number;
  last: string;
  lowestAsk: string;
  highestBid: string;
  percentChange: string;
  baseVolume: string;
  quoteVolume: string;
  isFrozen: string;
  postOnly: string;
  high24hr: string;
  low24hr: string;
};
