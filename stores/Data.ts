import { observable, action } from "mobx";
import { useStaticRendering } from "mobx-react";

const isServer = typeof window === "undefined";
// eslint-disable-next-line react-hooks/rules-of-hooks
useStaticRendering(isServer);

export default class Data {
  @observable title: string = "";

  constructor(title = "") {
    this.title = title;
  }

  @action
  async setTitle(newTitle: string) {
    this.title = newTitle;
  }
}
