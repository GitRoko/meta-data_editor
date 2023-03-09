<template>
  <div>
    <component
      :is="aliasComponentName[renderData.widget]"
      :name_prop="value"
      :validation="value.validation"
    ></component>
  </div>
</template>

<script>
// import widget
import TextInput from "@/components/widgets/TextInput.vue";

// import { useMetaDirectoryStore } from "../stores/metaDirectory";
// import { storeToRefs } from "pinia";

export default {
  components: {
    TextInput,
  },
  props: {
    value: {
      type: String,
    },
    renderData: {
      type: Object,
    },
  },
  data() {
    return {
      aliasComponentName: {
        text: "TextInput",
      },
    };
  },
};
</script>

<style scoped></style>
