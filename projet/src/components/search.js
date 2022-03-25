import useGoogleBookApi from "../gapibook.js";

Vue.component("search", {
  template: `<form  @submit.prevent="handleSubmit">
                    <input type="text" v-model="bookTitle"/>
                    <input type="submit" value="SEARCH" class="btn"/>
            </form>`,
  data: function () {
    return {
      bookTitle: "",
    };
  },
  methods: {
    handleSubmit: function () {
      useGoogleBookApi
        .bySearch(this.bookTitle)
        .then((data) => this.$emit("search-done", data.items));
    },
  },
});
