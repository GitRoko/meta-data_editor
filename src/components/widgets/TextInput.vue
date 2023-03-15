<template>
  <div>
    <!-- <p>renderData: {{ renderData }}</p>
    <p>keyItem: {{ keyItem }}</p>
    <p>modelValue: {{ modelValue }}</p> -->
    <v-text-field
      :modelValue="modelValue"
      @update:modelValue="($event) => $emit('update:modelValue', $event)"
      :rules="[
        (v) => rules.regexp(v, renderData.validation.regexp, keyItem),
        (v) => rules.unique(v, renderData.validation.unique, list),
      ]"
      :label="keyItem"
      variant="underlined"
    ></v-text-field>
  </div>
</template>
<script>
export default {
  props: {
    renderData: {
      type: Object,
    },
    modelValue: {
      type: String,
    },
    keyItem: {
      type: String,
    },
    list: {
      type: Array,
      default: () => [],
    }
  },
  emits: ["update:modelValue"],
  setup: () => {
    const rules = {
      regexp: (value, regexp, label) => {
        if (regexp === undefined) {
          return true;
        }
        const pattern = new RegExp(regexp);
        return pattern.test(value) || `Invalid ${label}, use: ${regexp}`;
      },
      unique: (value, isUnique, list = []) => {
        if (isUnique) {
          return !list.includes(value) || `Value ${value} is not unique`;
        } else {
          return true;
        }
      },
    };
    return {
      rules,
    };
  },
};
</script>

<style scoped>
/* .v-text-field :deep(input) {
  font-weight: bold;
} */
</style>
