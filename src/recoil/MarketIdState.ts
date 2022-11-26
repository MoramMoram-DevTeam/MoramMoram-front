import {atom} from 'recoil';

export const MarketIdState = atom<number | null>({
  key: "MarketIdState",
  default: null,
});