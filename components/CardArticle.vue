<template>
  <div class="card flex flex-wrap md:flex-nowrap">
    <div class="card_image w-full md:w-1/4 h-56 md:mr-6 mb-4 md:mb-0">
      <img :src="require(`~/assets/img/${item.gambar}.jpg`)" alt="">
    </div>
    <div class="card_content flex-1 flex flex-col justify-between">
      <div class="card_content_top">
        <NuxtLink :to="`/detail/${item.id}`">
          <h5 class="title mb-3">
            {{item.title}}
          </h5>
        </NuxtLink>
        <p class="artikel">{{item.artikel}}</p>
      </div>
      <div class="card_content_bottom flex justify-between items-center mt-4 md:mt-0">
        <div class="category flex">
          <div v-for="i in item.category" :key="i.id" class="category_item">
            {{i.name}}
          </div>
        </div>
        <div class="date">
          <div class="date_item">
            {{item.date}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CardArtikel',
  props: ['item']
}
</script>
<style lang="scss" scoped>
.card{
  padding-bottom: 30px;
  border-bottom: 1px solid #ECEFF1;
  .card_image{
    overflow: hidden;
    border-radius: 20px;
    img{
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .title{
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-transform: capitalize;
    transition: .3s;
    &:hover{
      color: #1976D2;
    }
  }
  .artikel{
    color: rgb(32, 32, 32);
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
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
      &:last-child{
        margin-right: 0;
      }
    }
  }
  .date_item{
    font-size: 12px;
    font-weight: 300px;
    text-transform: uppercase;
  }
}
</style>
