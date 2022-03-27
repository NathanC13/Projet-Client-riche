import useGoogleBookApi from "../gapibook.js";


// Le composant qui sert à lancer la recherche d'un livre
Vue.component("search", {
  template: `
              <form class="center-align"   @submit.prevent="handleSubmit">
                    <input class="mx-15" type="text" v-model="recherche" placeholder="Rechercher un titre de livre"/>
                    <author></author>
                    
                    <input type="submit"  value="Rechercher" class="btn"/>
                        
            </form>`,
  data: function () {
    return {
      recherche: "",
    };
  },
  methods: {
    handleSubmit: function () {
      if ( // Si l'utilisateur cherche un livre gratuit et ebook
        document.getElementById("free").checked &&
        document.getElementById("eBook").checked &&
        document.getElementById("recent").checked == false &&
        document.getElementById("auteur").checked == false
        
      ) {
        useGoogleBookApi
          .bySearch(this.recherche) // on utilise la méthode simple recherche
          .then((data) => this.$emit("search-done", data.items));
      } else if ( // Si l'utilisateur cherche un livre ebook seulement
        document.getElementById("free").checked == false &&
        document.getElementById("eBook").checked &&
        document.getElementById("recent").checked == false &&
        document.getElementById("auteur").checked == false
      ) {
        useGoogleBookApi
          .byEbook(this.recherche) // On utilise la méthode recherche filtré par ebook
          .then((data) => this.$emit("search-done", data.items));
      } 
      else if ( // Si l'utilisateur cherche un livre recent dans tout les cas possibles
        document.getElementById("recent").checked&& document.getElementById("auteur").checked == false ||
        document.getElementById("eBook").checked  && document.getElementById("recent").checked && document.getElementById("auteur").checked == false ||
        document.getElementById("free").checked  && document.getElementById("recent").checked && document.getElementById("auteur").checked == false||
        document.getElementById("free").checked  && document.getElementById("recent").checked && document.getElementById("eBook").checked && document.getElementById("auteur").checked == false

      ) {
        useGoogleBookApi
          .byNewest(this.recherche) // on utilise la méthode de recherche par ordre décroissant
          .then((data) => this.$emit("search-done", data.items));
      }
      else if ( // Si l'utilisateur cherche que des livres d'un certain auteur
        document.getElementById("auteur").checked &&
        document.getElementById("auteur").value != "" &&
        document.getElementById("recent").checked == false && 
          document.getElementById("eBook").checked == false && 
          document.getElementById("free").checked == false
        
      ) {
        useGoogleBookApi
          .byAuthor(this.recherche,document.getElementById("searchAuthor").value) // on utilise la méthode recherche par auteur
          .then((data) => this.$emit("search-done", data.items));
      }
      else if ( // Si l'utilisateur cherche que les recents livres d'un certain auteur
        document.getElementById("auteur").checked &&
        document.getElementById("auteur").value != "" &&
        document.getElementById("recent").checked && 
          document.getElementById("eBook").checked == false && 
          document.getElementById("free").checked == false
        
      ) {
        
        useGoogleBookApi
          .byAuthorNewest(this.recherche,document.getElementById("searchAuthor").value) // on utilise la méthode de recherche par auteur et les livres recents
          .then((data) => this.$emit("search-done", data.items));
          
      }
      else if ( // Si l'utilisateur cherche que les livres gratuits d'un certain auteur
        document.getElementById("auteur").checked &&
        document.getElementById("auteur").value != "" &&
        document.getElementById("recent").checked == false && 
          document.getElementById("eBook").checked == false && 
          document.getElementById("free").checked
          
        
      ) {

        useGoogleBookApi
          .byAuthor(this.recherche,document.getElementById("searchAuthor").value) // on utilise la méthode de recherche par auteur et on triera plus tard
          .then((data) => this.$emit("search-done", data.items));
          
      }
      else if ( // Si l'utilisateur cherche que les livres ebook d'un certain auteur
        document.getElementById("auteur").checked &&
        document.getElementById("auteur").value != "" &&
        document.getElementById("recent").checked == false && 
          document.getElementById("eBook").checked && 
          document.getElementById("free").checked == false
      ) {
        useGoogleBookApi
          .byAuthorEbook(this.recherche,document.getElementById("searchAuthor").value) // On utilise la méthode de recherche de livre ebook selon un auteur donné
          .then((data) => this.$emit("search-done", data.items));
          
      }
      else if ( // Si l'utilisateur cherche que les livres ebook gratuits d'un certain auteur
        document.getElementById("auteur").checked &&
        document.getElementById("auteur").value != "" &&
        document.getElementById("recent").checked == false && 
          document.getElementById("eBook").checked && 
          document.getElementById("free").checked
      ) {
        useGoogleBookApi
          .byAuthorEbook(this.recherche,document.getElementById("searchAuthor").value)// On utilise la méthode de recherche de livre ebook selon un auteur donné
          .then((data) => this.$emit("search-done", data.items));
          
      }
      else if ( // Si l'utilisateur cherche que les livres ebook, recent d'un certain auteur
      document.getElementById("auteur").checked &&
      document.getElementById("auteur").value != "" &&
      document.getElementById("recent").checked && 
        document.getElementById("eBook").checked && 
        document.getElementById("free").checked == false
    ) {
      useGoogleBookApi
        .byAuthorEbookNewest(this.recherche,document.getElementById("searchAuthor").value) // On utilise la méthode de recherche par auteur et ebook et recent
        .then((data) => this.$emit("search-done", data.items));
        
    }
    else if ( // Si l'utilisateur cherche que les livres avec tous les filtres
    document.getElementById("auteur").checked &&
    document.getElementById("auteur").value != "" &&
    document.getElementById("recent").checked && 
      document.getElementById("eBook").checked && 
      document.getElementById("free").checked 
  ) {
    useGoogleBookApi
    .byAuthorEbookNewest(this.recherche,document.getElementById("searchAuthor").value) // On utilise la méthode de recherche par auteur ebook et recent et on triera plus tard
    .then((data) => this.$emit("search-done", data.items));
      
  }
      else { //sinon nous faisons une simple recherche
        useGoogleBookApi
          .bySearch(this.recherche)
          .then((data) => this.$emit("search-done", data.items));
          
    
      }
    },
  },
});
