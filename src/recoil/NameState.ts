import {atom} from 'recoil';

export const NameState = atom<string>({
  key: "NameState",
  default: "",
});