;<template>
<div class="center ">
  <div class="w-60p">
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
  </div>
</div>
</template>

<style scoped>
.auth-form{
    display: flex;
}
.image-cover{
    width: 50%;
}
img{
    object-fit: cover;
    width: 100%;
    height: 100%;
}
.form-cover{
    margin: 1rem;
}
.w-60p{
  width: 60%;
}
@media only screen and (max-width: 768px) {
  .auth-form{
    flex-direction: column;
  }
  img{
    height: 20vh;
  }
  .image-cover{
    width: 100%;
}
}
</style>
