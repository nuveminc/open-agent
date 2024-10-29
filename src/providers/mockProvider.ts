import { IHttpProvider } from '@/interfaces/IHttpProvider';
import { Chat } from '@/api/models/chat.class';
import { AnyType } from '../types';
import chats from '@/api/mock/data/chats.json'; // Import mock data

export class MockResponse {
  data: AnyType;
  status: number;
  statusText: string;

  constructor(data: AnyType) {
    this.data = data;
    this.status = 200;
    this.statusText = 'OK';
  }
}

export class MockProvider implements IHttpProvider {
  private jsonData: Record<string, object[]> = {
    chats: chats as Chat[],
  };

  public async getAll(path: string): Promise<MockResponse> {
    const entities: AnyType = this.jsonData[path];

    if (!Array.isArray(entities)) {
      return Promise.reject(new Error('Invalid entity type'));
    }

    return new Promise<MockResponse>((resolve, reject) => {
      if (entities) {
        resolve(new MockResponse(entities));
      } else {
        reject(new Error('Not Found'));
      }
    });
  }

  public async getById(path: string, id?: string): Promise<MockResponse> {
    const entities: AnyType = this.jsonData[path];
    let response = null;

    if (!Array.isArray(entities)) {
      return Promise.reject(new Error('Invalid entity type'));
    }

    if (id) {
      response = (entities as []).find(
        (item: { id: string }) => item.id === id
      );
    }
    return new Promise<MockResponse>((resolve, reject) => {
      if (response) {
        resolve(new MockResponse(response));
      } else {
        reject(new Error('Not Found'));
      }
    });
  }

  public async post(path: string, data: AnyType): Promise<MockResponse> {
    const entities: AnyType[] = this.jsonData[path];

    console.log('POST:', path, entities);

    if (!Array.isArray(entities)) {
      return Promise.reject(new Error('Invalid entity type'));
    }
    if (data) {
      entities.push(data as object);
    }
    return new Promise<MockResponse>((resolve, reject) => {
      if (data) {
        resolve(new MockResponse(data));
      } else {
        reject(new Error('Post failed'));
      }
    });
  }

  public async put(
    path: string,
    id: string,
    data: AnyType
  ): Promise<MockResponse> {
    const entities: AnyType[] = this.jsonData[path];
    let entity = null;

    if (!Array.isArray(entities)) {
      return Promise.reject(new Error('Invalid entity type'));
    }

    if (id) {
      entity = (entities as []).map((item: { id: string }) => {
        if (item.id === id) {
          return { ...item, ...(data as object) };
        }
        return item;
      });
    }

    if (entity) {
      entities.push(data as object);
    }
    return new Promise<MockResponse>((resolve, reject) => {
      if (data) {
        resolve(new MockResponse(data));
      } else {
        reject(new Error('Post failed'));
      }
    });
  }

  public async delete(path: string, id: string): Promise<MockResponse> {
    let entities: AnyType[] = this.jsonData[path];
    let deletedEntity = null;

    if (!Array.isArray(entities)) {
      return Promise.reject(new Error('Invalid entity type'));
    }

    if (id) {
      deletedEntity = (entities as []).find(
        (item: { id: string }) => item.id === id
      );
      entities = (entities as []).filter(
        (item: { id: string }) => item.id !== id
      );
    }
    (this.jsonData[path] as AnyType[]) = entities;

    return new Promise<MockResponse>((resolve, reject) => {
      if (deletedEntity) {
        resolve(new MockResponse(deletedEntity));
      } else {
        reject(new Error('Delete failed'));
      }
    });
  }
}

export default new MockProvider(); // Export the singleton instance of the HTTP client
