import chats from '@/api/mock/data/chats.json'; // Import mock data
import { HttpResponse, IHttpProvider } from '@/interfaces/IHttpProvider';

export class MockResponse<T = any> implements HttpResponse {
  data: T;
  status: number;
  statusText: string;

  constructor(data: any) {
    this.data = data;
    this.status = 200;
    this.statusText = 'OK';
  }
}

export class MockProvider implements IHttpProvider {
  private jsonData: Record<string, object[]> = {
    chats,
  };

  public async get<T>(path: string): Promise<MockResponse<T[]>> {
    const entities = this._getEntities(path);

    if (!Array.isArray(entities)) {
      return Promise.reject(new Error('Invalid entity type'));
    }

    return new Promise<MockResponse<T[]>>((resolve, reject) => {
      if (entities) {
        resolve(new MockResponse<any[]>(entities));
      } else {
        reject(new Error('Not Found'));
      }
    });
  }

  // public async getAll(path: string): Promise<MockResponse<T[]>> {
  //   const entities = this._getEntities(path);

  //   if (!Array.isArray(entities)) {
  //     return Promise.reject(new Error('Invalid entity type'));
  //   }

  //   return new Promise<MockResponse<T[]>>((resolve, reject) => {
  //     if (entities) {
  //       resolve(new MockResponse<T[]>(entities));
  //     } else {
  //       reject(new Error('Not Found'));
  //     }
  //   });
  // }

  // public async getById(path: string, id?: string): Promise<MockResponse<T>> {
  //   const entities = this._getEntities(path);
  //   let response = null;

  //   if (!Array.isArray(entities)) {
  //     return Promise.reject(new Error('Invalid entity type'));
  //   }

  //   if (id) {
  //     response = (entities as []).find(
  //       (item: { id: string }) => item.id === id
  //     );
  //   }
  //   return new Promise<MockResponse<T>>((resolve, reject) => {
  //     if (response) {
  //       resolve(new MockResponse(response));
  //     } else {
  //       reject(new Error('Not Found'));
  //     }
  //   });
  // }

  public async post<T>(path: string, data: T): Promise<MockResponse<T>> {
    const entities = this._getEntities(path);

    if (!Array.isArray(entities)) {
      return Promise.reject(new Error('Invalid entity type'));
    }
    if (data) {
      entities.push(data as object);
    }
    return new Promise<MockResponse<T>>((resolve, reject) => {
      if (data) {
        resolve(new MockResponse(data));
      } else {
        reject(new Error('Post failed'));
      }
    });
  }

  public async put<T>(
    path: string,
    data: T
  ): Promise<MockResponse<T>> {
    const entities = this._getEntities(path);
    let entity = null;

    if (!Array.isArray(entities)) {
      return Promise.reject(new Error('Invalid entity type'));
    }

    const id = path.split('/').pop();

    if (id) {
      entity = (entities as []).map((item: { id: string }) => {
        if (item.id === id) {
          return { ...item, ...(data as object) };
        }
        return item;
      });
    } else{
      throw new Error('Invalid entity id');
    }

    if (entity) {
      entities.push(data as object);
    }
    return new Promise<MockResponse<T>>((resolve, reject) => {
      if (data) {
        resolve(new MockResponse(data));
      } else {
        reject(new Error('Post failed'));
      }
    });
  }

  public async delete<T>(path: string, id: string): Promise<MockResponse<T>> {
    let entities = this._getEntities(path);
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

    this.jsonData[path] = entities;

    return new Promise<MockResponse<T>>((resolve, reject) => {
      if (deletedEntity) {
        resolve(new MockResponse(deletedEntity));
      } else {
        reject(new Error('Delete failed'));
      }
    });
  }

  private _getEntities(path: string): object[] | null {
    path = path.replaceAll('/', '');
    return (this.jsonData[path]) || null;
  }
}

export default new MockProvider(); // Export the singleton instance of the HTTP client
