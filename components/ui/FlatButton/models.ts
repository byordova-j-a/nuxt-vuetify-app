export type TComponentProps = {
  color?: string;
  text: string;
}

export type TComponentEmits = {
  (e: 'click'): void;
}

export const defaultProps = {
  color: '#42D3924D',
};
