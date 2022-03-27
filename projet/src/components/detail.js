import useGoogleBookApi from "../gapibook.js";
// Composant détail servatn a afficher les détails d'un livre séléctionné -->
Vue.component("detail", {
  props: ["bookId", "show"],
  template: `
    <table class="striped">
       <tbody>
       <!-- Ici nous avons tous les détails que nousa vons choisis d'afficher -->
            <tr> <td> Titre </td> <td> {{detail.volumeInfo.title === undefined? 'Titre non connu' :detail.volumeInfo.title}} </td></tr>
            <tr> <td> Prix </td> <td> {{detail.saleInfo.listPrice === undefined? 'Gratuit' : detail.saleInfo.listPrice.amount }}<span v-if="detail.saleInfo.listPrice != undefined">€</span>  </td></tr>
            <tr> <td> Année </td> <td> {{detail.volumeInfo.publishedDate === undefined? 'Année non connu' :detail.volumeInfo.publishedDate.substr(0, 4)}} </td></tr>
            <tr> <td> Pages </td> <td> {{detail.volumeInfo.pageCount === undefined? 'Nombre de pages non-connu' : detail.volumeInfo.pageCount}} </td></tr>
            <tr> <td> Genre </td> <td> {{detail.volumeInfo.categories === undefined? 'Pas de catégorie' : detail.volumeInfo.categories[0]}} </td></tr>
            <tr> <td> Auteur </td> <td> {{detail.volumeInfo.authors === undefined? 'Auteurs non connus' : detail.volumeInfo.authors[0]}} </td></tr>
            <tr> <td> Description </td> <td> {{detail.volumeInfo.description === undefined? 'Description non connu' : detail.volumeInfo.description}} </td></tr>
      </tbody>
  </table>`,
  data: function () {
    return { // Toutes les données d'un livre qui nous semble importante
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
      useGoogleBookApi.byId(this.bookId).then((data) => { // On récupère toutes les infos d'un livre avec son identifiant
        this.detail = data;
      });
    }
  },
});
