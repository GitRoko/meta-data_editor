<template>
  <div>
    <component
      :is="aliasComponentName[renderData.widget]"
      v-model="group"
      :validation="renderData.validation"
      :label="'Group'"
    ></component>
  </div>
</template>

<script>
// import widget
import TextInput from "@/components/widgets/TextInput.vue";
// import store
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
    const { group } = storeToRefs(useCurrentFileStore());

    return {
      aliasComponentName,
      group,
    };
  },
};
</script>

<style scoped></style>
