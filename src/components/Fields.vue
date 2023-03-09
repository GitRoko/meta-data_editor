<template>
  <div>
    <!-- <h2>Widget - {{ name }}</h2> -->
    <!-- <div>{{ renderData }}</div> -->
    <template v-for="item in renderData.items">
      renderData.items: {{ item  }}
      <component
        :is="renderData.widget"
        :item="item"
        :fieldsList="fieldsList"
      ></component>
    </template>
  </div>
</template>

<script>
// import widget
import FieldsList from "@/components/widgets/FieldsList.vue";
import { computed, toRefs } from "vue";
export default {
  name: "Fields",
  components: {
    FieldsList,
  },
  props: {
    renderData: {
      type: Object,
    },
  },
  script: (props) => {
    const { renderData } = toRefs(props);
    const aliasComponentName = {
      list: 'FieldsList',
    };
    // const fieldsList = computed(() => []);
    const fieldsList = computed(() => 1+1);

    return {
      aliasComponentName,
      fieldsList,
      renderData,
    };
  },
};
</script>

<style scoped></style>
