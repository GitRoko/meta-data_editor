import { defineStore } from "pinia";
import { ref, computed } from "vue";
import { useMetaDirectoryStore } from "@/stores/metaDirectory";



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
  let version = ref(0);
  let description = ref('');
  let group = ref('');
  let fields = ref(null);
  let handle = ref(null);
  let name = ref('');

  const setFileData = (data) => {
    version.value = data.fileData.version;
    description.value = data.fileData.description;
    group.value = data.fileData.group;
    fields.value = data.fileData.fields;
    handle.value = data.fileHandle;
    name.value = data.fileName;
  }

  // const getFilesListForCurrentFile = () => {
  //   const metaDirectoryStore = useMetaDirectoryStore();
  //   const list = metaDirectoryStore.filesNamesList;
  //   return list.filter(item => item !== name.value);
  // }
  const getFilesListForCurrentFile = computed(() => {
    const metaDirectoryStore = useMetaDirectoryStore();
    const list = metaDirectoryStore.filesNamesList;
    return list.filter(item => item !== name.value) || [];
  });
  return {
    version,
    description,
    group,
    fields,
    handle,
    name,
    setFileData,
    getFilesListForCurrentFile,
  }
})