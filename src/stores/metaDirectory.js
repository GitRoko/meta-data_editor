import { defineStore } from "pinia";
import { accessFolder, readDirectory, readFile } from "@/fileSystemAccessApi";

export const useMetaDirectoryStore = defineStore("metaDirectory", {
  state: () => ({ files: null, directoryHandle: null }),
  getters: {},
  actions: {
    async accessingFolder() {
      const result = await accessFolder();
      console.log(result);
      if (result) {
        this.directoryHandle = result;
        await this.readFolder();
      } else {
        throw new Error("You must give permission to folder access");
      }
    },
    async readFolder() {
      let directoryEntries = [];
      let result = {};

      if (this.directoryHandle) {
        directoryEntries = await readDirectory(this.directoryHandle);
      } else {
        await this.accessingFolder();
      }

      for await (const entry of directoryEntries) {
        result[entry.fileName] = {
          fileData: await this.readingFileData(entry.fileHandle),
          fileHandle: entry.fileHandle,
          fileName: entry.fileName,
        };
      }

      this.files = result;
    },

    async readingFileData(fileHandle) {
      const result = await readFile(fileHandle);
      return result;
    },
  },
});
