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
      <v-container class="fill-height">
        <v-row class="fill-height">
          <v-col class="mt-2" cols="12">
            <v-sheet class="fill-height d-flex align-center justify-center">
              <div
                class="bg-gray-50 w-full min-h-screen flex items-center justify-center dark:bg-gray-900"
              >
                <div class="flex flex-col items-center justify-center">
                  <DropZone></DropZone>
                </div>
              </div>
              <!-- <v-btn size="x-large" color="success" @click="accessingFolder">
                Open meta-data directory and get permission
              </v-btn> -->
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
// import { mapState, mapActions } from "pinia";
// import { useMetaDirectoryStore } from "@/stores/metaDirectory";
import DropZone from "./components/DropZone.vue";

export default {
  data: () => ({ drawer: null }),
  components: {
    DropZone,
  },
  // computed: {
  //   ...mapState(useMetaDirectoryStore, ["files", "directoryHandle"]),
  // },
  // methods: {
  //   ...mapActions(useMetaDirectoryStore, ["accessingFolder"]),
  // },
};
</script>
