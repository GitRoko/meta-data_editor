<template>
  <div>
    <component
      :is="aliasComponentName[renderData.widget]"
      v-model="description"
      :validation="renderData.validation"
      :label="'Description'"
    ></component>
  </div>
</template>

<script>
// import widget
import TextInput from "@/components/widgets/TextInput.vue";

import { useCurrentFileStore } from "@/stores/currentFile";
import { storeToRefs } from "pinia";

export default {
  components: {
    TextInput,
  },
  props: {
    renderData: {
      type: Object,
    },
  },
  setup() {
    const aliasComponentName = {
      text: TextInput,
    };
    const { description } = storeToRefs(useCurrentFileStore());

    return {
      aliasComponentName,
      description,
    };
  },
};
</script>

<style scoped></style>
