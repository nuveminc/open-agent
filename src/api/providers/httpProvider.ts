import {
  HttpResponse,
  IHttpProvider,
} from '@/api/types/http-provider.interface';
import axios, { Axios, AxiosError } from 'axios';

const BASE_URL = 'https://localhost:8080'; // Replace with your API base URL

export class HttpProvider implements IHttpProvider {
  constructor(private client: Axios, private baseUrl: string) {}
  public async get<T>(path: string): Promise<Partial<HttpResponse<T>>> {
    try {
      return await this.client.get(this._normalizePath(path));
    } catch (error) {
      this._handleError(error);
    }
  }
  public async post<T>(
    path: string,
    data: T
  ): Promise<Partial<HttpResponse<T>>> {
    try {
      if (!data) {
        throw new Error('Invalid request data');
      }
      return await this.client.post(this._normalizePath(path), data);
    } catch (error) {
      this._handleError(error);
    }
  }
  public async put<T>(
    path: string,
    data: T
  ): Promise<Partial<HttpResponse<T>>> {
    try {
      if (!data) {
        throw new Error('Invalid request data');
      }
      return await this.client.put(this._normalizePath(path), data);
    } catch (error) {
      this._handleError(error);
    }
  }
  public async delete<T>(path: string): Promise<Partial<HttpResponse<T>>> {
    try {
      return await this.client.delete(this._normalizePath(path));
    } catch (error) {
      this._handleError(error);
    }
  }

  private _normalizePath(path: string): string {
    const normalizedPath = path.startsWith('/') ? path.substring(1) : path;
    return `${this.baseUrl}/${normalizedPath}`;
  }

  private _handleError(error: unknown): never {
    if (error instanceof AxiosError) {
      if (error.response?.status === 404) {
        throw new Error('Resource not found');
      }
    }
    throw error;
  }
}

export default new HttpProvider(axios, BASE_URL); // Export the singleton instance of the HTTP client
