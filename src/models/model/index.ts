export interface ModelDTO {
  id: string;
  name: string;
  object: string;
  created: number;
  owned_by: string;
  ollama?: OllamaDTO;
  arena?: boolean;
  info?: ArenaInfoDTO;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  actions: any[];
}

export interface OllamaDTO {
  name: string;
  model: string;
  modified_at: string;
  size: number;
  digest: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  details: any;
  urls: (string | number)[];
}

export interface OllamaDetailsDTO {
  parent_model: string;
  format: string;
  family: string;
  families: string[];
  parameter_size: string;
  quantization_level: string;
}

export class ModelCollection extends Array<Model> {
  constructor(items: ModelDTO[]) {
    super();
    Object.setPrototypeOf(this, ModelCollection.prototype);
    if (Array.isArray(items)) {
      items.forEach((item) => this.push(new Model(item)));
    } else {
      throw new TypeError('Expected an array of ModelDTO items');
    }
  }
  // Override map to return a ModelCollection instance instead of an Array
  map<U>(callbackfn: (value: Model, index: number, array: Model[]) => U): U[] {
    const result = super.map(callbackfn);
    return result; // Return a regular array, not a ModelCollection
  }
}

export class ModelCollectionVM extends Array<ModelVM> {
  constructor(items: Model[]) {
    super();
    items.forEach((item) => this.push(new ModelVM(item)));
  }
}

export class ModelVM {
  id: string;
  name: string;
  size: string;
  object: string;
  created: number;
  ownedBy: string;
  ollama?: Ollama;
  arena?: boolean;
  info?: ArenaInfo;
  selected: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  actions: any[];

  constructor(item: Model) {
    this.id = item.id;
    this.name = item.name;
    this.size = this._formatSize(item.size);
    this.object = item.object;
    this.created = item.created;
    this.ownedBy = item.ownedBy;
    this.ollama = item.ollama || undefined;
    this.arena = item.arena || false;
    this.info = item.info || undefined;
    this.actions = item.actions || [];
    this.selected = false;
  }

  private _formatSize(size: number): string {
    if (size >= 1_000_000_000) {
      return `${(size / 1_000_000_000).toFixed(1)}B`;
    } else if (size >= 1_000_000) {
      return `${(size / 1_000_000).toFixed(1)}M`;
    } else {
      return size.toString();
    }
  }
}

export class Model {
  id: string;
  name: string;
  size: number;
  object: string;
  created: number;
  ownedBy: string;
  ollama?: Ollama;
  arena?: boolean;
  info?: ArenaInfo;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  actions: any[];

  constructor(item: ModelDTO) {
    this.id = item.id;
    this.name = item.name;
    this.size = item.ollama ? item.ollama.size : 0;
    this.object = item.object;
    this.created = item.created;
    this.ownedBy = item.owned_by;
    this.ollama = item.ollama ? new Ollama(item.ollama) : undefined;
    this.arena = item.arena || false;
    this.info = item.info ? new ArenaInfo(item.info) : undefined;
    this.actions = item.actions || [];
  }
}

export interface ArenaInfoDTO {
  meta: AreanaInfoMetaDTO;
}

export class ArenaInfo {
  public meta?: AreanaInfoMeta;

  constructor(info: ArenaInfoDTO) {
    if (info && info.meta) {
      this.meta = new AreanaInfoMeta(info.meta);
    }
  }
}

export class AreanaInfoMeta {
  profile_image_url: string;
  description: string;
  model_ids: string[] | null;

  constructor(item: AreanaInfoMetaDTO) {
    this.profile_image_url = item.profile_image_url || '';
    this.description = item.description || '';
    this.model_ids = item.model_ids || null;
  }
}

export class Ollama {
  name: string;
  model: string;
  modifiedAt: string;
  size: number;
  digest: string;
  details: OllamaDetails;
  urls: (string | number)[];

  constructor(item: OllamaDTO) {
    this.name = item.name;
    this.model = item.model;
    this.modifiedAt = item.modified_at;
    this.size = item.size;
    this.digest = item.digest;
    this.details = new OllamaDetails(item.details);
    this.urls = Array.isArray(item.urls) ? item.urls : [];
  }
}

export class OllamaDetails {
  parent_model: string;
  format: string;
  family: string;
  families: string[];
  parameterSize: string;
  quantizationLevel: string;

  constructor(item: OllamaDetailsDTO) {
    this.parent_model = item.parent_model;
    this.format = item.format;
    this.family = item.family;
    this.families = Array.isArray(item.families) ? item.families : [];
    this.parameterSize = item.parameter_size;
    this.quantizationLevel = item.quantization_level;
  }
}

export interface AreanaInfoMetaDTO {
  profile_image_url: string;
  description: string;
  model_ids: string[] | null;
}
