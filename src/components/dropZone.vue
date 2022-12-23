<template>
  <div
    @dragenter.prevent
    @dragleave.prevent
    @dragover.prevent
    @drop.prevent="drop($event)"
  >
    <div>
      <span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          width="100"
          height="100"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
          />
        </svg>
      </span>
      <p>Drag a file here</p>
      <p>Or if you prefer</p>
      <!-- File input -->
      <v-btn size="x-large" color="success" @click="accessingFolder">
        Open meta-data directory and get permission
      </v-btn>
    </div>
  </div>
</template>
<script>
import { mapWritableState, mapActions } from "pinia";
import { useMetaDirectoryStore } from "../stores/metaDirectory";

export default {
  data: () => ({
    droppedFolder: null,
  }),
  watch: {
    droppedFolder() {
      if (this.droppedFolder !== null) {
        this.directoryHandle = this.droppedFolder;
        this.readFolder();
      }
    },
  },

  computed: {
    ...mapWritableState(useMetaDirectoryStore, ["directoryHandle"]),
  },
  methods: {
    ...mapActions(useMetaDirectoryStore, ["accessingFolder", "readFolder"]),
    drop(event) {
      [...event.dataTransfer.items]
        .filter((item) => {
          return item.kind === "file";
        })
        .forEach((item) => {
          item.getAsFileSystemHandle().then((dirHandle) => {
            this.droppedFolder = dirHandle;
          });
        });
    },
  },
};
</script>
