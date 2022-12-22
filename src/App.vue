<template>
  <v-app id="inspire">
    <v-app-bar>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Meta-data editor</v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" temporary>
      <!--  -->
    </v-navigation-drawer>

    <v-main class="bg-grey-lighten-2">
      <v-container>
        <v-row>
            <v-col class="mt-2" cols="12">
              <v-sheet>
                <div>
                  Main
                </div>
              </v-sheet>
            </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { useMetaDirectoryStore } from "@/stores/metaDirectory";
import { storeToRefs } from "pinia";


export default {
  data: () => ({ drawer: null }),
  setup() {
    const store = useMetaDirectoryStore();
    const { files, directoryHandle } = storeToRefs(store);

    return { files, directoryHandle };
  },
};
</script>
