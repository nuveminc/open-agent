import { AxiosResponse } from 'axios';
import { MockResponse } from '@/providers/mockProvider';
import { AnyType } from '@/types';

export interface IHttpProvider {
  getAll(path: string): Promise<AxiosResponse | MockResponse>;
  getById(path: string, id: string): Promise<AxiosResponse | MockResponse>;
  post(path: string, data: AnyType): Promise<AxiosResponse | MockResponse>;
  put(
    path: string,
    id: string,
    data: AnyType
  ): Promise<AxiosResponse | MockResponse>;
  delete(path: string, id: string): Promise<AxiosResponse | MockResponse>;
} // Define the HttpProvider interface with the same methods as the HttpProvider class.
