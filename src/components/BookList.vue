<template>
      <div class="book-grid">
        <h3 v-if="books.length == 0">Books not found</h3>
        <!-- Book Map -->
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
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

}
</style>