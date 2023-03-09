<template>
  <div>
    <v-card width="100%" class="ma-2">
      <v-card-item>
        <template v-for="(item, index) in items">
      <div>
        <component
          :is="renderRules[fieldNameList[index]]"
          :value="field[fieldNameList[index]]"
          :renderData="item[fieldNameList[index]]"
        ></component>
      </div>
    </template>
      </v-card-item>

     
    </v-card>
   
  </div>
</template>

<script>
import FieldName from "@/components/FieldName.vue";
import JsonType from "@/components/JsonType.vue";

export default {
  props: {
    items: {
      type: Object,
    },
    field: {
      type: Object,
    },
  },
  data: () => ({
    renderRules: {
      field_name: "FieldName",
      json_type: "JsonType",
    },
  }),
  components: {
    FieldName,
    JsonType,
  },
  computed: {
    fieldNameList() {
      let result = [];
      this.items.forEach((item) => {
        result = [...result, ...Object.keys(item)];
      });
      return result;
    },
  },
};
</script>

<style scoped></style>
