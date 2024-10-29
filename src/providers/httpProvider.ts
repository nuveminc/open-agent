import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { IHttpProvider } from '@/interfaces/IHttpProvider';
import { AnyType } from '../types';

class HttpProvider implements IHttpProvider {
  private httpClient;

  constructor(provider: { create(config: AxiosRequestConfig): AxiosInstance }) {
    this.httpClient = provider.create({
      baseURL: 'https://api.example.com', // Replace with your API base URL
      timeout: 10000, // Set a timeout for requests
    });
  }

  public async getAll(
    path: string
    // tslint:disable-next-line: no-unused-vars
  ): Promise<AxiosResponse> {
    const data: AnyType = {
      path: path,
    };
    return { data } as AxiosResponse;
  }

  public async getById(path: string, id: string): Promise<AxiosResponse> {
    const data: AnyType = {
      path: path,
      id: id,
    };
    return { data } as AxiosResponse;
  }

  public post = async (path: string, data: AnyType): Promise<AxiosResponse> => {
    return this.httpClient.post(path, data);
  };

  public put = async (path: string, data: AnyType): Promise<AxiosResponse> => {
    return this.httpClient.put(path, data);
  };

  public delete = async (path: string, id: string): Promise<AxiosResponse> => {
    return this.httpClient.delete(path + '/' + id);
  };
}

export default new HttpProvider(axios); // Export the singleton instance of the HTTP client
