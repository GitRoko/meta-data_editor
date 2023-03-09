// import { defineStore } from "pinia";
// import { accessFolder, readDirectory, readFile } from "@/fileSystemAccessApi";
// import Yaml from "yaml";
// import { useCurrentFileStore } from "@/stores/currentFile";
// // const YAML = require('yaml')

// //************************************************** */
// // Using Vue Test Utils in Vitest (need use happy-dom)!!!
// // https://www.youtube.com/watch?v=iNl6TA29hBM


// export const useMetaDirectoryStore = defineStore("metaDirectory", {
//   state: () => ({
//     files: null,
//     index: null,
//     directoryHandle: null,
//     isLoad: false,
//     currentFileName: '',
//     filesNamesList: [],
//   }),
//   getters: {
//     getFiles() {
//       return this.files;
//     },
//     getIndex() {
//       return this.index;
//     },
//     getDirectoryHandle() {
//       return this.directoryHandle;
//     }
//     // getIndexDataWidget() {},

//   },
//   actions: {
//     async accessingFolder() {
//       const result = await accessFolder();
//       console.log(result);
//       if (result) {
//         this.directoryHandle = result;
//         await this.readFolder();
//       } else {
//         throw new Error("You must give permission to folder access");
//       }
//     },
//     async readFolder() {
//       let directoryEntries = [];
//       let result = {};

//       if (this.directoryHandle) {
//         directoryEntries = await readDirectory(this.directoryHandle);
//       } else {
//         await this.accessingFolder();
//       }

//       for await (const entry of directoryEntries) {
//         result[entry.fileName] = {
//           fileData: await this.readingFileData(entry.fileHandle),
//           fileHandle: entry.fileHandle,
//           fileName: entry.fileName,
//         };
//         let parsedData = null;
//         try {
//           parsedData = Yaml.parse(result[entry.fileName].fileData);
//         } catch (e) {
//           console.error(e);
//         }

//         if (parsedData) {
//           result[entry.fileName].fileData = parsedData;
//         } else {
//           throw new Error(`Can't parse file "${entry.fileName}", wrong YAML format or data.`);
//         }
//       }

//       // find index file and separate it from the rest if exists, otherwise return null
//       this.index = result["index.yaml"] ? result["index.yaml"] : null;
//       if (this.index) delete result["index.yaml"];

//       this.files = result;

//       // create list of files names
//       for(const key in this.files) {
//         this.filesNamesList.push(key);
//       }

//       // set current file name
//       this.currentFileName = this.filesNamesList[0];

//       // set current file data
//       const currentFileStore = useCurrentFileStore();
//       currentFileStore.setFileData(this.files[this.currentFileName]);

//       this.isLoad = this.files ? true : false;
//     },

//     async readingFileData(fileHandle) {
//       const result = await readFile(fileHandle);
//       return result;
//     },

//     async verifyPermission(fileHandle, writable) {
//       const opts = {};
//       if (writable) {
//         opts.mode = "readwrite";
//       }

//       if ((await fileHandle.queryPermission(opts)) === "granted") {
//         return true;
//       }

//       if ((await fileHandle.requestPermission(opts)) === "granted") {
//         return true;
//       }

//       return false;
//     },
//   },
// });

import { defineStore } from "pinia";
import { accessFolder, readDirectory, readFile } from "@/fileSystemAccessApi";
import Yaml from "yaml";
import { useCurrentFileStore } from "@/stores/currentFile";
import { ref } from "vue";

export const useMetaDirectoryStore = defineStore("metaDirectory", () => {
  const files = ref(null);
  const index = ref(null);
  const directoryHandle = ref(null);
  const isLoad = ref(false);
  const currentFileName = ref("");
  const filesNamesList = ref([]);

  const getFiles = () => {
    return files;
  };
  const getIndex = () => {
    return index;
  };
  const getDirectoryHandle = () => {
    return directoryHandle;
  };

  const accessingFolder = async () => {
    let result = await accessFolder();
    if (result) {
      directoryHandle.value = result;
      await readFolder();
    } else {
      throw new Error("You must give permission to folder access");
    }
  };
  const readFolder = async () => {
    let directoryEntries = [];
    let result = {};

    if (directoryHandle.value) {
      directoryEntries = await readDirectory(directoryHandle.value);
    } else {
      await accessingFolder();
    }

    for await (const entry of directoryEntries) {
      result[entry.fileName] = {
        fileData: await readingFileData(entry.fileHandle),
        fileHandle: entry.fileHandle,
        fileName: entry.fileName,
      };
      let parsedData = null;
      try {
        parsedData = Yaml.parse(result[entry.fileName].fileData);
      } catch (e) {
        console.error(e);
      }

      if (parsedData) {
        result[entry.fileName].fileData = parsedData;
      } else {
        throw new Error(
          `Can't parse file "${entry.fileName}", wrong YAML format or data.`
        );
      }
      // result[entry.fileName].fileData = Yaml.parse(result[entry.fileName].fileData);
    }
    // find index file and separate it from the rest if exists, otherwise return null
    index.value = result["index.yaml"] ? result["index.yaml"] : null;
    if (index.value) delete result["index.yaml"];

    files.value = result;

    // create list of files names
    for (const key in files.value) {
      filesNamesList.value.push(key);
    }

    // set current file name
    currentFileName.value = filesNamesList.value[0];

    // set current file data
    const currentFileStore = useCurrentFileStore();
    currentFileStore.setFileData(result[currentFileName.value]);

    isLoad.value = files.value ? true : false;
  };
  const readingFileData = async (fileHandle) => {
    const result = await readFile(fileHandle);
    return result;
  };
  const verifyPermission = async (fileHandle, writable) => {
    const result = await fileHandle.queryPermission({ writable });
    return result;
  };

  return {
    files,
    index,
    directoryHandle,
    isLoad,
    currentFileName,
    filesNamesList,
    getFiles,
    getIndex,
    getDirectoryHandle,
    accessingFolder,
    readFolder,
    readingFileData,
    verifyPermission,
  };

  
});
