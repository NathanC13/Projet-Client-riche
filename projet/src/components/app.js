Vue.component("app", {
  template: `<div  id="app"> 

                  
    <p> Consulter nos livres ! </p>
    <label>
                        <input  name="group1" id="eBook" type="checkbox"/>
                        <span>eBook</span>
                        </label>

                        <label>
                        <input name="group1" id="free" type="checkbox"/>
                        <span>Gratuit</span>
                        </label>
        
                    <search  @search-done="searchCompleted($event)"> </search>
                    <div class="col s6">
                        <div class="row">
                            <book v-for="book in books" v-bind:key="book.id" :book=book v-on:book-selected="bookSelected($event)"> </book>
                        </div>
                    </div>
                    <div class="col s6">
                        <div class="row">
                            <detail  v-bind:bookId="selectedId" :key="selectedId"> </detail>
                        </div>
                    </div>
               </div>`,
  data: function () {
    return {
      books: [],
      selectedId: null,
    };
  },
  methods: {
    searchCompleted: function (data) {
      // Si le json n'a pas été récuperer ou qu'il n'a pas été définie (absence de chaine dans le champ)
      if (data != undefined) {
        // On vérifie si le bouton  "eBook" est coché
        /*  if (
          document.getElementById("eBook").checked &&
          document.getElementById("free").checked == false
        ) {
          eBook = []; // si c'est le cas on crée un tableau qui servira de données a afficher
          data.forEach((element) => {
            if (element.saleInfo.isEbook == true) {
              // pour chaque élément de l'item, on verifie si l'attribut eBook est vrai
              eBook.push(element); // on push si c'est le cas
            }

            this.books = eBook; // les livres a afficher sont données au tableau
            this.selectedId = null;
          });
        } else {*/
        this.books = data;
        this.selectedId = null;
        // }
      }
    },
    bookSelected: function (id) {
      console.log(id);
      this.selectedId = id;
    },
  },
});
