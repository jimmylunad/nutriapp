export interface IHeader {
  title: string,
  button: boolean,
  button_detail: IButtonDetail,
  back: boolean
}

export interface IButtonDetail {
  icon: string;
  action: boolean;
  route: string;
}
