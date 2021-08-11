;<template>
  <base-card>
  <div class="auth-form">
      <div class="image-cover">
        <img src="../../assets/books-wall.jpeg" alt="Book Wall">
      </div>
      <div class="form-cover">
    <slot></slot>
      </div>
  </div>
  </base-card>
</template>

<style scoped>
.auth-form{
    display: flex;
}
.image-cover{
    width: 50%;   
}
img{
    object-fit: fill;
    width: 100%;
}
.form-cover{
    margin: 1rem;
}
</style>
