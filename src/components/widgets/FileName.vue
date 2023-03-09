<template>
  <div>
    <v-text-field
      :model-value="name"
      :label="label"
      variant="underlined"
      readonly
      @input="$emit('update:name', $event.target.value)"
      :rules="[
        rules.regexp(name, validation.regexp, label),
        rules.unique(name, validation.unique, list),
      ]"
    ></v-text-field>
  </div>
</template>

<script>
import { toRefs } from "vue";

export default {
  props: {
    list: {
      type: Array,
    },
    name: {
      type: String,
    },
    label: {
      type: String,
    },
    validation: {
      type: Object,
    },
  },
  emits: ["update:name"],
  setup: (props) => {
    const { name } = toRefs(props);
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
          const newList = list.filter((item) => item !== value);
          const result = newList.includes(value);
          if (!result) {
            return true;
          } else {
            return `Value ${value} is not unique`;
          }
        }
      },
    };
    return {
      rules,
      name,
    };
  },

  // data: () => ({
  //   value: "",
  //   rules: {
  //     regexp: (value, regexp, label) => {
  //       if (regexp === undefined) {
  //         return true;
  //       }
  //       const pattern = new RegExp(regexp);
  //       return pattern.test(value) || `Invalid ${label}, use: ${regexp}`;
  //     },
  //     unique: (value, isUnique, list = []) => {
  //       if (isUnique) {
  //         const result = list.includes(value);
  //         return result || `Value ${value} is not unique`;
  //       } else {
  //         return true;
  //       }
  //     },
  //   },
  // }),
  // mounted() {
  //   this.value = this.propValue.value;
  // },
};
</script>

<style scoped>
.v-text-field :deep(input) {
  font-size: 1.2em;
  font-weight: bold;
}
</style>
