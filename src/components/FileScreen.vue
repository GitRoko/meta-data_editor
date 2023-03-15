<template>
  <v-container class="fill-height">
    <v-row class="fill-height">
      <v-col class="mt-2" cols="12">
        <v-sheet class="fill-height">
          <template
            v-for="(value, key) in index.fileData.module[0].data"
            key="key"
          >
            <!-- <p>Key: {{ key }}</p>
              <p>Value: {{ value }}</p> -->
            <div class="pa-2" >
              <component
                :is="aliasComponentName[key]"
                :renderData="index.fileData.module[0].data[key]"
                v-model="store[key]"
                :keyItem="key"
              ></component>
            </div>
          </template>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import FileName from "@/components/widgets/FileName.vue";
import TextInput from "@/components/widgets/TextInput.vue";
import FieldsList from "@/components/widgets/FieldsList.vue";

import { useMetaDirectoryStore } from "@/stores/metaDirectory";
import { useCurrentFileStore } from "@/stores/currentFile";
import { storeToRefs } from "pinia";

export default {
  name: "FileScreen",
  components: { FileName, TextInput, FieldsList },
  setup() {
    const aliasComponentName = {
      name: 'TextInput',
      description: 'TextInput',
      group: 'TextInput',
      fields: 'FieldsList',
    };
    const { index } = storeToRefs(useMetaDirectoryStore());
    let store = useCurrentFileStore();

    return {
      index,
      aliasComponentName,
      store,
    };
  },
};
</script>

<style scoped></style>
