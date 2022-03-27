import gapibook from "../gapibook.js";

Vue.component("book", {
  props: ["book"],
  template: `
    <div class="col s6 m3">
      <div class="card large">
            <div class="card-image">

              <img :src="book.volumeInfo.imageLinks === undefined? 'assets/img/defaut.jpg' : book.volumeInfo.imageLinks.thumbnail"> 


            
            </div>
       
            <div class="card-content">
            <span class="card-title"> {{book.volumeInfo.title}} </span>
                <p> {{book.volumeInfo.publishedDate.substring(0,4)}} </p>
            </div>
            <div class="card-action">
                <a href="#app" @click="handleSelected">En savoir plus</a>
        </div>
      </div>
    </div>`,
  methods: {
    handleSelected: function () {
      this.$emit("book-selected", this.book.id);
    },
  },
});
