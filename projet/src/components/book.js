import gapibook from "../gapibook.js";
// Composant pour chaque livre 
Vue.component("book", {
  props: ["book"],
  template: `
    <div class="col s6 m3">
      <div class="card large">
            <div class="card-image">

              <img :src="book.volumeInfo.imageLinks === undefined? 'assets/img/defaut.jpg' : book.volumeInfo.imageLinks.thumbnail"> 
              <!-- Si le livre n'a pas d'image disponible on en passe un par defaut -->

            
            </div>
       
            <div class="card-content">
            <span class="card-title"> {{book.volumeInfo.title}} </span>
                <p> {{book.volumeInfo.publishedDate.substring(0,4)}} </p> <!-- On récupère que l'année en prenant que les 4 premiers caractères -->
            </div>
            <div class="card-action">
                <a href="#app" @click="handleSelected">En savoir plus</a>
        </div>
      </div>
    </div>`,
  methods: {
    handleSelected: function () { // fonction qui émet l'id du livre 
      this.$emit("book-selected", this.book.id);
    },
  },
});
