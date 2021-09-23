<template>
  <div class="div">
    <h5>Artikel Terkait</h5>
    <div class="article_ter_content mt-4">
      <div v-for="item in dataArtikel.slice(0, 2)" :key="item.id" class="article_ter_item flex mb-4">
        <div class="images mr-4">
          <img :src="require(`~/assets/img/${item.gambar}.jpg`)" alt="">
        </div>
        <div class="content flex-1">
          <p class="date mb-2">{{item.date}}</p>
          <NuxtLink :to="`/detail/${item.id}`">
            <h6 class="title">{{item.title}}</h6>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name : "CardArtikelTerkait",
  data() {
    return{
      dataArtikel: []
    }
  },
  mounted(){
    axios
      .get('http://localhost:3000/article')
      .then(response => this.setProduct(response.data))
      .catch(error => console.log(error))
  },
  methods: {
    setProduct (data) {
      this.dataArtikel = data
      console.log(this.dataArticle)
    }
  }
}
</script>
<style lang="scss" scoped>
.article_ter_item{
  padding-bottom: 16px;
  border-bottom: 1px solid #ECEFF1;
  .images{
    width: 100px;
    height: 80px;
    border-radius: 10px;
    overflow: hidden;
    img{
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .date{
    font-size: 12px;
    font-weight: 300;
    color: gray;
  }
  .title{
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    text-transform: capitalize;
    font-weight: 400;
    transition: .3s;
    &:hover{
      color: #1976D2;
    }
  }
}
</style>
