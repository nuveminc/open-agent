import { HttpResponse, IHttpProvider } from "@/interfaces/IHttpProvider";
import axios, { Axios } from "axios";

const BASE_URL = 'https://localhost:8080'; // Replace with your API base URL

export class HttpProvider implements IHttpProvider {  
  constructor(private client: Axios, private baseUrl: string) {}
  public async get(path: string): Promise<Partial<HttpResponse>> {
    return this.client.get(`${this.baseUrl}/${path}`);
  };
  public async post(path: string, data: any): Promise<Partial<HttpResponse>> {
    return this.client.post(`${this.baseUrl}/${path}`, data);
  };
  public async put(path: string, data: any): Promise<Partial<HttpResponse>> {
    return this.client.put(`${this.baseUrl}/${path}`, data);
  };
  public async delete(path: string, id: string): Promise<Partial<HttpResponse>> {
    return this.client.delete(`${this.baseUrl}/${path}/${id}`);
  };  
}

export default new HttpProvider(axios, BASE_URL); // Export the singleton instance of the HTTP client