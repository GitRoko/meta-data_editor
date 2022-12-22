import { defineStore } from "pinia";

export const useMetaDirectoryStore = defineStore("metaDirectory", {
  state: () => ({ files: null, directoryHandle: null }),
  getters: {},
  actions: {},
});
