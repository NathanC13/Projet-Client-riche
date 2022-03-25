import gapibook from "../gapibook.js";

Vue.component("book", {
  props: ["book"],
  template: `
    <div class="col s12 m6">
      <div class="card large">
            <div class="card-image">

              <img :src="book.volumeInfo.imageLinks.thumbnail=== undefined? 'assets/img/defaut.jpg' : book.volumeInfo.imageLinks.thumbnail"> 


              <!--    <img src="assets/img/defaut.jpg" v-if="book.volumeInfo.imageLinks.thumbnail=== undefined"  >
            <img  src=" book.volumeInfo.imageLinks.thumbnail" v-else> -->


            <span class="card-title"> {{book.volumeInfo.title}} </span>
            </div>
       
            <div class="card-content">
                <p> {{book.volumeInfo.publishedDate}} </p>
            </div>
            <div class="card-action">
                <a href="#app" @click="handleSelected">show more</a>
        </div>
      </div>
    </div>`,
  methods: {
    handleSelected: function () {
      this.$emit("book-selected", this.book.id);
    },
  },
});
