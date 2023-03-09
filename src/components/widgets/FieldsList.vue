<template>
  <p>

    FieldsList: {{ item }}
  </p>
    <!-- <div v-for="field in fields">
      <template v-for="fieldList in fieldsList">
        <div v-for="item in fieldList">
          <component :is="item" :items="items[item]" :field="field"></component>
        </div>
      </template>
    </div> -->
  <!-- <div v-if="fieldsList">
    <template v-for="field in fields">
      <template v-for="fieldList in fieldsList">
        <div v-for="item in fieldList">
          <component :is="item" :items="items[item]" :field="field"></component>
        </div>
      </template>
    </template>
  </div> -->
</template>

<script>
import FieldUUID from "@/components/widgets/FieldUUID.vue";
import { computed } from "vue";

export default {
  components: {
    FieldUUID,
  },
  props: {
    item: {
      type: Object,
    },
    // fieldsList: {
    //   type: Array,
    // },
    // fields: {
    //   type: Object,
    // },
  },
  setup: (props) => {
    // const fieldsIDList = computed(() => Object.keys(props.fields));

    // return {
    //   fieldsIDList,
    // };
  },
};
</script>

<style scoped></style>
