<template>
  <div class="container mx-auto px-4">
    <div class="homepage flex flex-wrap lg:flex-nowrap">
      <div class="homepage_left w-full lg:w-8/12 lg:mr-12 mr-0 md:mb-12 sm:mb-10">
        <ListArticle :data="dataArtikel"/>
      </div>
      <div class="homepage_right w-full lg:w-1/4">
        <div class="search flex items-center mb-6">
          <h5 class="mr-2">Search</h5>
          <input id="search" v-model="search" type="text" @keyup="searchArtikel">
        </div>
        <h5 class="mb-6">Temukan Lebih Banyak</h5>
        <div class="category flex flex-wrap">
          <div v-for="categori in category" :key="categori" class="category_item" @click="searchCategory(categori)">
            {{categori}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { mapState, mapActions} from 'vuex'
export default {
  name: "Home",
  data() {
    return{
      dataArtikel: [],
      category: ['all', 'seksualitas', 'dewasa', 'terkini', 'covid', 'sehat a-z', 'gaya hidup', 'olahraga', 'diet'],
      selectCategory: '',
      search: ''
    }
  },
  computed: {
    ...mapState({
      dataArt: 'dataArt'
    }),
  },
  mounted(){
    this.getPesanan()
    axios
      .get('http://localhost:3000/article')
      .then(response => this.setProduct(response.data))
      .catch(error => console.log(error))
  },
  methods: {
    ...mapActions(['getPesanan']),

    setProduct (data) {
      this.dataArtikel = data
    },
    searchCategory (item) {
      if(item === 'all') {
        axios
          .get(this.$axios.defaults.baseURL + '/article')
          .then(response => this.setProduct(response.data))
          .catch(error => console.log(error))
      }else{
        this.selectCategory = item
        axios
          .get(this.$axios.defaults.baseURL + '/article?q=' + this.selectCategory)
          .then(response => this.setProduct(response.data))
          .catch(error => console.log(error))
      }
    },
    searchArtikel () {
      axios
        .get(this.$axios.defaults.baseURL + '/article?q=' + this.search)
        .then(response => this.setProduct(response.data))
        .catch(error => console.log(error))
    }
  }
}
</script>
<style lang="scss" scoped>
  .homepage{
    padding: 100px 0;
  }
  .category{
    .category_item{
      padding: 8px 16px;
      background: #c49f47;
      color: white;
      text-transform: uppercase;
      text-align: center;
      border-radius: 20px;
      font-size: 12px;
      margin-right: 12px;
      margin-bottom: 12px;
      transition: .3s;
      &:last-child{
        margin-right: 0;
      }
      &:hover{
        cursor: pointer;
        background: #B3E5FC;
        color: #37474F;
      }
    }
  }
  .search{
    label{

    }
    input{
      border: 1px solid rgb(224, 224, 224);
      border-radius: 10px;
      padding: 6px 8px;
      width: 100%;
      &:focus-visible{
        border-color: #c49f47;
        outline: none;
      }
    }
  }
</style>
