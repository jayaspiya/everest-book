;<template>
  <h3>Upload Cover</h3>
  <div class="center">
     <div v-if="!image">
    <h2>Select an image</h2>
    <input type="file" @change="onFileChange">
  </div>
  <div v-else>
    <img :src="image" />
    <div class="center">
      <button @click="removeImage">Remove Cover</button>
      <button @click="uploadCover">Upload Cover</button>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      image: ''
    }
  },
  methods: {
    onFileChange(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length)
        return;
      this.createImage(files[0]);
    },
    createImage(file) {
      // var image = new Image();
      var reader = new FileReader();
      var vm = this;
      reader.onload = (e) => {
        vm.image = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    removeImage() {
      this.image = '';
    },
    uploadCover(){
      alert("yes")
    }
  }
}
</script>

<style scoped>
img {
  width: 80%;
  margin: auto;
  display: block;
  margin-bottom: 10px;
}
button{
  margin: 0 10px
}
</style>