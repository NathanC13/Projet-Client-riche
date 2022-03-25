Vue.component("app", {
  template: `<div  id="app"> 
                    <search  @search-done="searchCompleted($event)"> </search>
                    <div class="col s8">
                        <div class="row">
                            <book v-for="book in books" v-bind:key="book.id" :book=book v-on:book-selected="bookSelected($event)"> </book>
                        </div>
                    </div>
                    <div class="col s4">
                        <div class="row">
                            <detail v-bind:bookId="selectedId" :key="selectedId"> </detail>
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
      if (data != undefined) {
        this.books = data;
        this.selectedId = null;
      }
    },
    bookSelected: function (id) {
      console.log(id);
      this.selectedId = id;
    },
  },
});
