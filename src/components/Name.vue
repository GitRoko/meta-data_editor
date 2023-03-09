<template>
  <div>
    <component
      :is="aliasComponentName[renderData.widget]"
      v-model:list="filesNamesList"
      v-model:name="name"
      :validation="renderData.validation"
      :label="'File name'"
    ></component>
  </div>
</template>

<script>
// import widget
import FileName from "@/components/widgets/FileName.vue";
// import store
import { useMetaDirectoryStore } from "@/stores/metaDirectory";
import { useCurrentFileStore } from "@/stores/currentFile";
// import { mapState } from 'pinia'
import { storeToRefs } from "pinia";

import { toRefs } from "vue";

export default {
  name: "Name",
  components: { FileName },
  props: {
    renderData: {
      type: Object,
    },
  },

  setup(props) {
    const { renderData } = toRefs(props);
    const aliasComponentName = {
      filename: FileName,
    };
    const { name } = storeToRefs(useCurrentFileStore());
    const { filesNamesList } = storeToRefs(useMetaDirectoryStore());

    return {
      filesNamesList,
      aliasComponentName,
      name,
      renderData,
    };
  },
};
</script>

<style scoped></style>
