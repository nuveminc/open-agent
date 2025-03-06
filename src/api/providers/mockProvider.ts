import {
  HttpConfig,
  HttpResponse,
  IHttpProvider,
} from '@/api/types/http-provider.interface';
// Import mock data
import { auth, chats, config, models } from '../mock/data';

export class MockResponse<T> implements HttpResponse<T> {
  data: T;
  status: number;
  statusText: string;

  constructor(data: T) {
    this.data = data;
    this.status = 200;
    this.statusText = 'OK';
  }
}

const SIMULATED_API_LATENCY = import.meta.env.VITE_SIMULATED_API_LATENCY || 0;

export class MockProvider implements IHttpProvider {
  private jsonData: Record<string, object | object[]> = {
    chats,
    auth,
    config,
    models,
  };

  public async get<T>(
    path: string,
    config: HttpConfig
  ): Promise<Partial<MockResponse<T>>> {
    const { entityName, id } = this._handlePath(path);

    const entities = this._getEntities(entityName);
    let entity = null;

    if (!Array.isArray(entities) && !(typeof entities === 'object')) {
      return Promise.reject(new Error('Invalid entity type'));
    } else {
      entity = entities;
    }

    if (config && config.isFile && id) {
      return new Promise<MockResponse<T>>((resolve, reject) => {
        try {
          import(`../mock/data/${entityName}/${id}.json`).then((data) => {
            const entity = data.default;
            setTimeout(() => {
              resolve(new MockResponse<T>(entity as T));
            }, SIMULATED_API_LATENCY);
          });
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
          console.log(error);
          reject(new Error('Not Found'));
        }
      });
    } else {
      return new Promise<MockResponse<T>>((resolve, reject) => {
        if (id || entity) {
          if (entity) {
            setTimeout(() => {
              resolve(new MockResponse<T>(entity as T));
            }, SIMULATED_API_LATENCY);
          } else {
            reject(new Error('Not Found'));
          }
        } else {
          const entity = (entities as []).find(
            (item: { id: string }) => item.id === id
          );
          if (entity) {
            setTimeout(() => {
              resolve(new MockResponse<T>(entity as T));
            }, SIMULATED_API_LATENCY);
          } else {
            reject(new Error('Not Found'));
          }
        }
        setTimeout(() => {
          resolve(new MockResponse<T>(entities as T));
        }, SIMULATED_API_LATENCY);
      });
    }
  }

  public async put<T>(path: string, data: T): Promise<MockResponse<T>> {
    const { entityName, id } = this._handlePath(path);
    const entities = this._getEntities(entityName);
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
    } else {
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

  public async post<T>(path: string, data: T): Promise<MockResponse<T>> {
    const { entityName } = this._handlePath(path);
    const entities = this._getEntities(entityName);

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

  public async delete<T>(path: string): Promise<MockResponse<T>> {
    const { entityName, id } = this._handlePath(path);
    let entities = this._getEntities(entityName);
    let deletedEntity = null;

    if (!Array.isArray(entities)) {
      return Promise.reject(new Error('Invalid entity type'));
    }

    if (id) {
      deletedEntity = (entities as []).find(
        (item: { id: string }) => item.id === id
      );
      if (deletedEntity) {
        entities = (entities as []).filter(
          (item: { id: string }) => item.id !== id
        );
      } else {
        return Promise.reject(new Error('Entity Not Found'));
      }
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

  private _getEntities(path: string): object | object[] | null {
    path = path.replaceAll('/', '');
    return this.jsonData[path] || null;
  }

  /**
   * Handles the URL path to extract the entity name and id.
   * @private
   *
   * @param path the url path
   * @returns an object containing the entity name and id
   */
  private _handlePath(path: string): { entityName: string; id: string | null } {
    const normalizedPath = path.startsWith('/') ? path.substring(1) : path;

    let entityName = normalizedPath;
    let id = null;

    if (normalizedPath.indexOf('/') > -1) {
      [entityName, id] = normalizedPath.split('/');
    }
    return { entityName, id };
  }
}

export default new MockProvider(); // Export the singleton instance of the HTTP client
