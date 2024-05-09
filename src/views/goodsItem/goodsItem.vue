<template>
  <div class="hello">
    <DetailView :curIntangibleCulturalHeritage="curIntangibleCulturalHeritage" />
  </div>
</template>

<script>
import { useRoute } from 'vue-router';
import DetailView from '../components/DetailView.vue'
export default {
  name: "HelloWorld",
  components: {
    DetailView
  },

  mounted() {
    const route = useRoute(); // 引入 Route
    this.curIntangibleCulturalHeritage = route.query.name

  },
  data() {
    return {
      // 当前用户点击的非遗项目名称
      curIntangibleCulturalHeritage: '',
    };
  },

  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>