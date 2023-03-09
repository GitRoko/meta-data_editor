import { defineStore } from "pinia";
import { ref } from "vue";


// export const useCurrentFileStore = defineStore('currentFile', {
//   state: () => ({ 
//     version: 0,
//     description: '',
//     group: '',
//     fields: null,
//     handle: null,
//     name: '',
//   }),
//   getters: {
//     // doubleCount: (state) => state.count * 2,
//   },
//   actions: {
//     setFileData(data) {
//       this.version = data.fileData.version;
//       this.description = data.fileData.description;
//       this.group = data.fileData.group;
//       this.fields = data.fileData.fields;
//       this.handle = data.fileHandle;
//       this.name = data.fileName;
//     },
//   },
// })
export const useCurrentFileStore = defineStore('currentFile', () => {
  const version = ref(0);
  const description = ref('');
  const group = ref('');
  const fields = ref(null);
  const handle = ref(null);
  const name = ref('');

  const setFileData = (data) => {
    console.log(data);
    version.value = data.fileData.version;
    description.value = data.fileData.description;
    group.value = data.fileData.group;
    fields.value = data.fileData.fields;
    handle.value = data.fileHandle;
    name.value = data.fileName;
  }

  return {
    version,
    description,
    group,
    fields,
    handle,
    name,
    setFileData,
  }
})