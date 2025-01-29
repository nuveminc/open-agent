export interface IHttpProvider {
  get(path: string): Promise<Partial<HttpResponse>>;
  post(path: string, data: any): Promise<Partial<HttpResponse>>;
  put(path: string, data: any): Promise<Partial<HttpResponse>>;
  delete(path: string, id: string): Promise<Partial<HttpResponse>>;
}

export interface HttpResponse<T = any> {
  data: T;
  status: number;
  statusText: string;
  headers?: ResponseHeaders;
  config?: RequestConfig;
  request?: any;
}

export interface RequestConfig {
  headers: RequestHeaders;
}

type ResponseHeadersList = 'Server' | 'Content-Type' | 'Content-Length' | 'Cache-Control'| 'Content-Encoding';

type RequestHeadersList = 'Accept' | 'Content-Length' | 'User-Agent' | 'Content-Encoding' | 'Authorization';

type HeaderValues = string | string[] | number | boolean | null;

type ContentType = 'text/html' | 'text/plain' | 'multipart/form-data' | 'application/json' | 'application/x-www-form-urlencoded' | 'application/octet-stream';


export type RequestHeaders = Partial<Headers & {
  [Key in RequestHeadersList]: HeaderValues;
} & {
  'Content-Type': ContentType
}>;

interface Headers {
  [key: string]: HeaderValues;
}

export type ResponseHeaders = {
  [Key in ResponseHeadersList]: HeaderValues;
} & {
  "set-cookie": string[];
};
