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