import { makeAutoObservable } from "mobx";

class AppService {
  auth: string[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  init() {
    this.auth = [];
  }
}

export const appService = new AppService();
