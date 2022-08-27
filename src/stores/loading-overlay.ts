import { defineStore } from "pinia"

export const storeLoading = defineStore({
  id: "store",
  state: () => ({
    isLoading: false,
    fullPage: true,
  }),
});