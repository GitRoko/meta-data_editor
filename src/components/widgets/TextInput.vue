<template>
  <div>
    <v-text-field
    :modelValue="modelValue"
    @input="$emit('update:modelValue', $event)"
    
    
      :rules="[
        rules.regexp(modelValue, validation.regexp, label),
        rules.unique(modelValue, validation.unique, validation.list),
      ]"
      :label="label"
      variant="underlined"
    ></v-text-field>
  </div>
</template>

<script>
export default {
  props: {
    modelValue: {
      type: String,
    },
    label: {
      type: String,
    },
    validation: {
      type: Object,
    },
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
          const result = list.includes(value);
          return result || `Value ${value} is not unique`;
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
.v-text-field :deep(input) {
  /* font-size: 1em; */
  font-weight: bold;
  /* text-transform: uppercase; */
}
</style>

<!-- 
<template>
  <div>
    <v-text-field
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      :rules="[rules.regexp(modelValue, validation.regexp, label), rules.unique(modelValue, validation.unique, validation.list)]"
      :label="label"
      variant="underlined"
      type="input"
    ></v-text-field>
    <p>Child: {{ modelValue }}</p>
  </div>
</template>

<script>
import { toRefs } from "vue";

export default {
  props: {
    modelValue: {
      type: String,
    },
    label: {
      type: String,
    },
    validation: {
      type: Object,
    },
  },
  setup: (props, { emit }) => {
    console.log(props);
    const { modelValue } = toRefs(props);
    const updateValue = (e) => {
      emit("update:modelValue", e.target.value);
    };

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
          const result = list.includes(value);
          return result || `Value ${value} is not unique`;
        } else {
          return true;
        }
      },
    };

    return {
      updateValue,
      modelValue,
      rules,
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
</style> -->
