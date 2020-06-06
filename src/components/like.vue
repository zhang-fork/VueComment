<template>
  <div class="like">
    <my-icon id="icon-like" color="text-primary" size="25" @click="likePlus(origin)"></my-icon>
    <div v-if="myLike>0"> {{myLike}}</div>
   
  </div>
</template>

<script>
import { reactive, computed, ref } from "vue";
export default {

  props: {
    origin: {
      type: Object,
      default: null
    }
  },
  setup(props) {
      const myLike=computed(()=>props.origin.like_num)
    const likePlus=(origin)=>
    origin.like_num+=1
      return {
          myLike,
          likePlus
      }
  }

 
};
</script>

<style scoped>
.like{
    display: flex;
    justify-items: baseline;
    margin-left: 10px;
}
</style>