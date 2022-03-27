import useGoogleBookApi from "../gapibook.js";
//Composant pour la gestion de l'auteur
Vue.component("author", {
  data: function () {
    return {
      author: "",
    };
  },
    template: `
  <input class="mx-15" type="text" id="searchAuthor" v-model="author" placeholder="Nom de l'auteur"/>`,
  //Ce template s'affiche que si l'on coche le bouton auteur
  
});
