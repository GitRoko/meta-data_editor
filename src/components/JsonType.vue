<template>
  <div>
    <div>JsonType: {{ value }}</div>
    <!-- <component
      :is="value.widget"
      :name_prop="fileData.description"
      :validation="value.validation"
      :name="name"
    ></component> -->
  </div>
</template>

<script>
// import widget
// import text from "@/components/widgets/text.vue";

// import { useMetaDirectoryStore } from "../stores/metaDirectory";
// import { storeToRefs } from "pinia";

export default {
  // components: {
  //   text,
  // },
  props: {
    value: {
      type: String,
    },
    renderData: {
      type: Object,
    },
  },
 
};
</script>

<style scoped></style>
