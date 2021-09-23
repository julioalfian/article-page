<template>
  <div>
    <Navbar />
    <Nuxt />
    <Footer />
  </div>
</template>
<script>
import Navbar from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
export default {
  components: {
    Navbar,
    Footer
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;1,400;1,500;1,700&display=swap');
body{
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
}
h1, h2, h3, h4, h5, h6{
  font-weight: 500;
}
h1{
  font-size: 54px;
  line-height: 110%;
}
h2{
  font-size: 48px;
  line-height: 110%;
}
h3{
  font-size: 40px;
  line-height: 110%;
}
h4{
  font-size: 32px;
  line-height: 110%;
}
h5{
  font-size: 24px;
  line-height: 110%;
}
h6{
  font-size: 16px;
  line-height: 110%;
}
p{
  font-size: 1rem;
  line-height: 140%;
}
</style>
