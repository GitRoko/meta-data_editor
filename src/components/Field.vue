<template>
  <div>
    <component
      :is="items.widget"
      :items="items.items"
      :field="field"
    ></component>
</div>
</template>

<script>
import UUIDItem from "@/components/widgets/FieldUUID.vue";

export default {
  components: {
    UUIDItem,
  },
  props: {
    items: {
      type: Object,
    },
    field: {
      type: Object,
    },
  },
};
</script>

<style scoped></style>
