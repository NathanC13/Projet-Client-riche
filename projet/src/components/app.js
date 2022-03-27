//Composant principale de l'application
Vue.component("app", {
  template: `<div  id="app"> 


    <img class="center-align" src="assets/img/logo.png" alt="logo">
    <h6 class="center-align" > Consulter nos livres ! </h6>
    
        
                    <search  @search-done="searchCompleted($event)"> </search>
                    
                <div  class="center-align">
                    <label>
                        <input  name="group1" id="eBook" type="checkbox"/>
                        <span>eBook</span>
                        </label>

                        <label>
                        <input name="group1" id="free" type="checkbox"/>
                        <span>Gratuit</span>
                        </label>
                        
                        <label>
                        <input name="group1" id="recent" type="checkbox"/>
                        <span>Récent</span>
                        </label>

                        <label>
                        <input  name="group1" id="auteur" type="checkbox"/>
                        <!--<button   v-on:click="show()">salut</button>-->
                        <span>Auteur</span>
                        </label>
                  </div>
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
      books: [], // Tableau ou nous metterons les livres récupéres
      selectedId: null, // l'id du livre séléctionné
    };
  },
  methods: {
    searchCompleted: function (data) {
      if(data === undefined){
        console.log("erreur");
      }
      // Si le json n'a pas été récuperer ou qu'il n'a pas été définie (absence de chaine dans le champ)
      if (data != undefined) {
        // On vérifie si le bouton  "eBook" est coché
          if (
          document.getElementById("eBook").checked &&
          document.getElementById("free").checked &&
          document.getElementById("auteur").checked == false
        ) {
         var  eBook = []; // si c'est le cas on crée un tableau qui servira de données a afficher
          data.forEach((element) => {
            if (element.saleInfo.isEbook == true && element.saleInfo.saleability == "FREE") {
              // pour chaque élément de l'item, on verifie si l'attribut eBook est vrai et que l'attribut saleability est "FREE"
              eBook.push(element); // on push si c'est le cas
            }

            this.books = eBook; // les livres a afficher sont données au tableau
            this.selectedId = null;
            
          });
        }
        else if( // si l'utiliseur recherche un livre gratuit
          document.getElementById("free").checked && 
          document.getElementById("eBook").checked == false &&
          document.getElementById("auteur").checked == false
          ){

           var  free = [];
            data.forEach((element) => {
              if (element.saleInfo.saleability == "FREE") {
                // pour chaque élément de l'item, on verifie si l'attribut saleability est "FREE"
                free.push(element); // on push si c'est le cas
              }
  
              this.books = free; // les livres a afficher sont données au tableau
              this.selectedId = null;
             
            });


        }
        else if( // Si l'utilisateur recherche un livre recent et ebook
          document.getElementById("recent").checked &&  
          document.getElementById("eBook").checked &&
          document.getElementById("free").checked == false &&
          document.getElementById("auteur").checked == false
          ){

            var recent = [];
            data.forEach((element) => {
              if (element.saleInfo.isEbook == true) {
                // pour chaque élément de l'item, on verifie si l'attribut eBook est vrai
                recent.push(element); // on push si c'est le cas
              }
  
              this.books = recent; // les livres a afficher sont données au tableau
              this.selectedId = null;
              
            });


        }

        else if( // Si l'utilisateur recherche un livre recent et gratuit
          document.getElementById("recent").checked && 
          document.getElementById("free").checked &&
          document.getElementById("eBook").checked == false &&
          document.getElementById("auteur").checked == false
          ){

           var  free = [];
            data.forEach((element) => {
              if (element.saleInfo.saleability == "FREE") {
                // pour chaque élément de l'item, on verifie si l'attribut saleability est "FREE"
                free.push(element); // on push si c'est le cas
              }
  
              this.books = free; // les livres a afficher sont données au tableau
              this.selectedId = null;
            });

            


        }

        else if( // Si l'utilisateur recherche un livre rgatuit recent et ebook
          document.getElementById("recent").checked && 
          document.getElementById("free").checked &&
          document.getElementById("eBook").checked &&
          document.getElementById("auteur").checked == false
          ){

            var tab = [];
            data.forEach((element) => {
              if (element.saleInfo.saleability == "FREE" && element.saleInfo.isEbook == true) {
                // pour chaque élément de l'item, on verifie si l'attribut eBook est vrai et l'attribut saleability est "FREE"
                tab.push(element); // on push si c'est le cas
              }
  
              this.books = tab; // les livres a afficher sont données au tableau
              this.selectedId = null;
              
            });
        }
        else if ( // Si l'utilisateur recherche un livre recent selon un certain auteur
          document.getElementById("auteur").checked &&
          document.getElementById("auteur").value != "" &&
          document.getElementById("recent").checked && 
          document.getElementById("eBook").checked == false && 
          document.getElementById("free").checked == false
        ) {

  
              this.books = data; // les livres a afficher sont données au tableau
              this.selectedId = null;
              
     

        }
        else if ( // Si l'utilisateur recherche que les livres gratuits d'un certain auteur
          document.getElementById("auteur").checked &&
          document.getElementById("auteur").value != "" &&
          document.getElementById("recent").checked == false && 
            document.getElementById("eBook").checked == false && 
            document.getElementById("free").checked
        ) {
            var list = [];
            data.forEach((element) => {
              if (element.saleInfo.saleability == "FREE") {
                // pour chaque élément de l'item, on verifie si l'attribut saleability est "FREE"
                list.push(element); // on push si c'est le cas
              }
  
              this.books = list; // les livres a afficher sont données au tableau
              this.selectedId = null;
              
            });

        }
        else if ( // Si l'utilisateur rechercheque les livres gratuits et ebook d'un certain auteur
        document.getElementById("auteur").checked &&
        document.getElementById("auteur").value != "" &&
        document.getElementById("recent").checked == false && 
          document.getElementById("eBook").checked && 
          document.getElementById("free").checked
        ) {
            var list = [];
            data.forEach((element) => {
              if (element.saleInfo.saleability == "FREE") {
                // pour chaque élément de l'item, on verifie si l'attribut saleability est "FREE"
                list.push(element); // on push si c'est le cas
              }
  
              this.books = list; // les livres a afficher sont données au tableau
              this.selectedId = null;
              
            });

        }
        else if ( // Si l'utilisateur recherche que les livres gratuits et ebook et recent d'un certain auteur
        document.getElementById("auteur").checked &&
        document.getElementById("auteur").value != "" &&
        document.getElementById("recent").checked  && 
          document.getElementById("eBook").checked && 
          document.getElementById("free").checked
        ) {
            var list = [];
            data.forEach((element) => {
              if (element.saleInfo.saleability == "FREE") {
                // pour chaque élément de l'item, on verifie si l'attribut saleability est "FREE"
                list.push(element); // on push si c'est le cas
              }
  
              this.books = list; // les livres a afficher sont données au tableau
              this.selectedId = null;
              
            });

        }
        else { // Sinon, nous faisons une simple recherche
         
        this.books = data;
        this.selectedId = null;
        
      }
    }
  },
    bookSelected: function (id) { // fonction qui récupère l'id du livre séléctionné
      console.log(id);
      this.selectedId = id;
    },
  },
});
