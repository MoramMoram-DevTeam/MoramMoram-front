import {atom} from 'recoil';

export const atkState = atom<string>({
  key: "atkState",
  default: "",
});