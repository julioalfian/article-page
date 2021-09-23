<template>
  <div class="detail">
    <div class="container mx-auto px-4">
      <div class="max-w-screen-md m-auto">
        <h2 class="title">{{dataArtikel.title}}</h2>
        <div class="info mt-4 mb-8 flex justify-between items-center">
          <div class="penulis flex items-center">
            <img src="~/assets/icon/user.svg" alt="">
            <p>Ditulis oleh <span>{{dataArtikel.penulis}}</span></p>
          </div>
          <div class="date">
            <p>Tayang pada <span>{{dataArtikel.date}}</span></p>
          </div>
        </div>
        <div class="images mb-8">
          <img :src="images" alt="">
        </div>
        <div class="content flex flex-wrap">
          <div class="content_left w-full md:w-3/5 md:pr-8">
            <p>
              {{dataArtikel.artikel}}
            </p>
          </div>
          <div class="content_right w-full md:w-2/5">
            <div class="related">
              <CardArticleTerkait/>
            </div>
            <div class="share flex justify-between items-center mt-6">
              <p>Bagikan :</p>
              <div class="share_icon flex">
                <a class="ml-2" href="">
                  <img class="icon_share" src="~/assets/icon/icon-email.svg" alt="">
                </a>
                <a class="ml-2" href="">
                  <img class="icon_share" src="~/assets/icon/icon-fb.svg" alt="">
                </a>
                <a class="ml-2" href="">
                  <img class="icon_share" src="~/assets/icon/icon-tw.svg" alt="">
                </a>
                <a class="ml-2" href="">
                  <img class="icon_share" src="~/assets/icon/icon-in.svg" alt="">
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'ArtikelDetail',
  data() {
    return{
      dataArtikel: {},
      images: ''
    }
  },
  mounted () {
    axios
      .get(this.$axios.defaults.baseURL + '/article/' + this.$route.params.id)
      .then(response => this.setData(response.data))
      .catch(error => console.log(error))
  },
  methods: {
    setData(data) {
      this.dataArtikel = data
      this.images = '../../_nuxt/assets/img/' + this.dataArtikel.gambar + '.jpg'
    }
  }
}
</script>
<style lang="scss" scoped>
.detail{
  padding: 100px 0;
  .title{
    text-transform: capitalize;
  }
  .info{
    .penulis{
      img{
        width: 20px;
        height: 20px;
        border-radius: 50%;
      }
      p{
        margin-left: 6px;
        font-size: 14px;
        font-weight: 300;
        color: gray;
        span{
          color: black;
          font-weight: 400;
          letter-spacing: 1px;

        }
      }
    }
    .date{
      p{
        margin-left: 6px;
        font-size: 14px;
        font-weight: 300;
        color: gray;
        text-align: right;
        span{
          color: black;
          font-weight: 400;
          letter-spacing: 1px;

        }
      }
    }
  }
  .images{
    width: 100%;
    border-radius: 20px;
    overflow: hidden;
    img{
      width: 100%;
      height: auto;
    }
  }
  .content_left{
    p{
      color: gray;
      margin-bottom: 16px;
    }
  }
  .share{
    p{
      color: gray;
      font-weight: 300;
    }
  }
}

</style>
