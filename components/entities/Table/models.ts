export enum EHeaderValue {
  NAME = 'name',
  ID = 'id',
  EMAIL = 'email',
  TELEPHONE = 'telephone',
}
export type TItem = {
  [EHeaderValue.NAME]: string;
  [EHeaderValue.ID]: number;
  [EHeaderValue.EMAIL]: string;
  [EHeaderValue.TELEPHONE]: string;
};

export type TComponentProps = {
  currentPage: number;
  itemsPerPage?: number;
  items?: TItem[];
}

export const defaultProps = {
  itemsPerPage: 1,
  items: ()=> [],
};

export const headers = [
  {
    value: EHeaderValue.NAME,
    title: 'Имя',
    width: '25%',
  },
  {
    value: EHeaderValue.ID,
    title: 'id',
    width: '25%',
  },
  {
    value: EHeaderValue.EMAIL,
    title: 'email',
    width: '25%',
  },
  {
    value: EHeaderValue.TELEPHONE,
    title: 'телефон',
    width: '25%',
  },
];
