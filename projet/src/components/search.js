import useGoogleBookApi from "../gapibook.js";

Vue.component("search", {
  template: `
              <form class="valign-wrapper"   @submit.prevent="handleSubmit">
                    <input class="mx-15" type="text" v-model="recherche" placeholder="Rechercher un livre"/>
                    <input type="submit"  value="Rechercher" class="btn"/>
                        
            </form>`,
  data: function () {
    return {
      recherche: "",
    };
  },
  methods: {
    handleSubmit: function () {
      if (
        document.getElementById("free").checked &&
        document.getElementById("eBook").checked
      ) {
        useGoogleBookApi
          .byEbookFree(this.recherche)
          .then((data) => this.$emit("search-done", data.items));
      } else if (
        document.getElementById("free").checked == false &&
        document.getElementById("eBook").checked
      ) {
        useGoogleBookApi
          .byEbook(this.recherche)
          .then((data) => this.$emit("search-done", data.items));
      } else {
        useGoogleBookApi
          .bySearch(this.recherche)
          .then((data) => this.$emit("search-done", data.items));
      }
    },
  },
});
