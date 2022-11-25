import { atom } from "recoil";

export const storeNameState = atom<string>({
  key: 'storeNameState',
  default: ''
});

export const category1State = atom<boolean>({
  key: 'category1State',
  default: false
});

export const subCategory1State = atom<string|null>({
  key: 'subCategory1',
  default: null
});
export const subCategory2State = atom<string|null>({
  key: 'subCategory2State',
  default: null
});
export const onlineChannelState = atom<string|null>({
  key: 'onlineChannelState',
  default: null
});
export const returnAddressState = atom<string | number | readonly string[]>({
  key: 'returnAddressState',
  default: null
});

export const marketExpState = atom<boolean>({
  key: 'marketExpState',
  default: false
});

export const onlineExpState = atom<boolean>({
  key: 'onlineExpState',
  default: false
});

export const lightState = atom<boolean>({
  key: 'lightState',
  default: false
});

export const priceAvgState = atom<string|null>({
  key: 'priceAvgState',
  default: '1만원 미만'
});

export const requestState = atom<string|null>({
  key: 'returnAddress',
  default: null
});
