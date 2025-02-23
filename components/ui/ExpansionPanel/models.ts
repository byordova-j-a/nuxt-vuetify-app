export type TComponentProps = {
  width: number;
  header: string;
  icon: string;
  itemList: string[];
}

export type TComponentEmits = {
  (e: 'item-click'): void;
}
