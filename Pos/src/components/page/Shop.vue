<template>
<div class="shop">
<h2>{{msg}}</h2>
<span>{{count}}</span>
<div>
  <button @click="add">加</button>
  <button @click="reduce">减</button>

  </div>
</div>
</template>

<script>
  import store from '@/vuex/store'
  import {mapState, mapMutations,mapGetters} from 'Vuex'
    export default {
      name: 'Shop',
      data () {
        return {
          msg: 'Welcome to my shop!'
        }       
      },
      computed : {
        ...mapState (['count']),
        ...mapGetters (['count'])
      },
      methods : mapMutations(["add", "reduce"]),
      store
    }
    </script>

<style scoped>
.shop{
    background: #808080;
    color:red;
    font-size: 3rem
}
</style>