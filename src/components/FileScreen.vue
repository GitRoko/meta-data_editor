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
              ></component>
              <!-- <component
                :is="aliasComponentName[key]"
                :value="value"
                :name="key"
                :renderData="index.fileData.module[0].data[key]"
                :fileData="fileData"
              ></component> -->
            </div>
            
          </template>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { useMetaDirectoryStore } from "@/stores/metaDirectory";
import Name from "@/components/Name.vue";
import FileDescription from "@/components/FileDescription.vue";
import FileGroup from "@/components/FileGroup.vue";
import Fields from "@/components/Fields.vue";
import { useCurrentFileStore } from "@/stores/currentFile";

import { storeToRefs } from "pinia";

export default {
  name: "FileScreen",
  components: { Name, FileDescription, FileGroup, Fields },
  setup() {
    const aliasComponentName = {
      name: 'Name',
      description: 'FileDescription',
      group: 'FileGroup',
      fields: 'Fields',
    };
    const { index } = storeToRefs(useMetaDirectoryStore());
    const { description } = storeToRefs(useCurrentFileStore());


    return {
      index,
      aliasComponentName,
      description
    };
  },
};
</script>

<style scoped></style>
