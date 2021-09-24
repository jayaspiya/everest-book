<template>
      <div class="book-grid">
        <h3 v-if="books.length == 0">Books not found</h3>
        <TheBook v-for="book in books" :key="book._id" :book="book" v-else/>
    </div>
</template>
<script>
import TheBook from "../components/TheBook.vue"

export default {
    components:{
        TheBook
    },
    props:[
        "books"
    ]
}
</script>

<style scoped>
.book-grid{
  /* display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, minmax(186px, 1fr)); */
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

}

/* Tablet View */
/* @media only screen and (max-width: 768px) {
.book-grid{
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
}
} */
</style>