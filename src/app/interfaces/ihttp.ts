export interface IHttpCustomResponse<T> {
  success: boolean;
  body: IHttpCustomBodyResponse<T>;
  error: IHttpCustomErrorResponse;
}
export interface IHttpCustomBodyResponse<T> {
  successMessage: string;
  data: T;
}
export interface IHttpCustomErrorResponse {
  errorCode: number;
  errorMessage: string;
  errorMessageDetail: string;
}