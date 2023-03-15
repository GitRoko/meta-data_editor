<template>
  <div v-for="(value, key) in modelValue" key="key" class="my-3">
    <component
      :is="aliasComponentName[renderData.items[0].field.widget]"
      :renderData="renderData.items[0].field.items"
      :componentData="value"
      :id="key"
      :modelValue="modelValue[key]"
      @update="$emit('update:modelValue', $event)"
    ></component>
  </div>
</template>

<script>
// import { computed } from "vue";
// import { useCurrentFileStore } from "@/stores/currentFile";
import FieldUUID from "@/components/widgets/FieldUUID.vue";

export default {
  props: {
    renderData: {
      type: Object,
    },
    modelValue: {
      type: Object,
    },
    keyItem: {
      type: String,
    },
    list: {
      type: Array,
      default: () => [],
    }
  },
  components: { FieldUUID },
  emits: ["update:modelValue"],
  setup: (props) => {
    const aliasComponentName = {
      uuid: 'FieldUUID',
    };
    return {
      aliasComponentName,
    };
  },
};
</script>

<style scoped>
.v-text-field :deep(input) {
  /* font-size: 1em; */
  font-weight: bold;
  /* text-transform: uppercase; */
}
</style>
