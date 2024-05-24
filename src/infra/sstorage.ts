import store2, { StoreType } from 'store2';

interface StorageValues {
  'side-menu.open-keys': string[];
}

type StorageKeys = keyof StorageValues;

class SStorage {
  store: StoreType;

  constructor() {
    this.store = store2.namespace('zipperx');
  }

  init() {
  }
  
  set<K extends StorageKeys>(key: K, value: StorageValues[K]) {
    this.store.set(key, value);
  }

  get<K extends StorageKeys>(key: K): StorageValues[K] {
    return this.store.get(key);
  }
}

export const sStorage = new SStorage;
