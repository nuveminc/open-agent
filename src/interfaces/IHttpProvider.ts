import { AxiosResponse } from 'axios';
import { MockResponse } from '@/providers/mockProvider';

export interface IHttpProvider {
  getAll<T>(path: string): Promise<AxiosResponse<T[]> | MockResponse<T[]>>;
  getById<T>(
    path: string,
    id: string
  ): Promise<AxiosResponse | MockResponse<T>>;
  post<T>(path: string, data: T): Promise<AxiosResponse<T> | MockResponse<T>>;
  put<T>(
    path: string,
    id: string,
    data: T
  ): Promise<AxiosResponse<T> | MockResponse<T>>;
  delete<T>(path: string, id: string): Promise<AxiosResponse | MockResponse<T>>;
} // Define the HttpProvider interface with the same methods as the HttpProvider class.
