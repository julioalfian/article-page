<template>
  <div>
    <h4 class="mb-6">Artikel Terbaru</h4>
    <div class="listArticle_content">
      <div v-for="item in data" :key="item.id" class="listArticle_item mb-8">
        <CardArticle :item="item"/>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ListArtikel",
  props: ['data']
}
</script>
