import useGoogleBookApi from "../gapibook.js";

Vue.component("detail", {
  props: ["bookId", "show"],
  template: `
    <table class="striped">
       <tbody>
            <tr> <td> Titre </td> <td> {{detail.volumeInfo.title === undefined? 'Titre non connu' :detail.volumeInfo.title}} </td></tr>
            <tr> <td> Année </td> <td> {{detail.volumeInfo.publishedDate === undefined? 'Année non connu' :detail.volumeInfo.publishedDate.substr(0, 4)}} </td></tr>
            <tr> <td> Pages </td> <td> {{detail.volumeInfo.pageCount === undefined? 'Nombre de pages non-connu' : detail.volumeInfo.pageCount}} </td></tr>
            <tr> <td> Genre </td> <td> {{detail.volumeInfo.categories === undefined? 'Pas de catégorie' : detail.volumeInfo.categories[0]}} </td></tr>
            <tr> <td> Auteur </td> <td> {{detail.volumeInfo.authors === undefined? 'Auteurs non connus' : detail.volumeInfo.authors[0]}} </td></tr>
            <tr> <td> Description </td> <td> {{detail.volumeInfo.description === undefined? 'Description non connu' : detail.volumeInfo.description}} </td></tr>
      </tbody>
  </table>`,
  data: function () {
    return {
      detail: {
        title: null,
        subtitle: null,
        authors: [],
        publisher: null,
        publishedDate: null,
        industryIdentifiers: [],
        language: null,
        country: null,
        amount: null,
        buyLink: null,
        isEbook: null,
      },
    };
  },
  mounted() {
    if (this.bookId != undefined) {
      useGoogleBookApi.byId(this.bookId).then((data) => {
        this.detail = data;
        console.log(data);
      });
    }
  },
});
