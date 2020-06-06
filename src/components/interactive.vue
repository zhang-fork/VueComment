<template>
  <div>
    <div class="icon">
      <my-icon id="icon-_ico_reply" color="text-primary" size="18" @click="showinput()" ></my-icon>
      <my-like :origin="origin"></my-like>
    </div>
    <transition name="fade">
    <div v-if="myState.flag">
      <my-Comment :parent="origin" @Done="showinput()" />
    </div>
    </transition>
  </div>
</template>
<script>
import { reactive, computed, ref } from "vue";
import myComment from "@/components/comment.vue";
import myLike from "@/components/like.vue";
export default {
  components: {
    myComment,
    myLike
  },
  props: {
    origin: {
      type: Object,
      default: null
    }
  },
  setup() {
    const state = () =>
      reactive({
        flag: false,
     
      });
    const myState = ref(state());
    const showinput = () => {
      myState.value.flag = !myState.value.flag;
    };

    return {
      myState,
      showinput,
    };
  }
};
</script>
<style scoped>
.icon {
  display: flex;
  align-items: center;
  
  width:50vw;
}


.fade-enter-active, .fade-leave-active {
          transition: opacity 0.5s;
        }
        .fade-enter, .fade-leave-to {
          opacity: 0;
        }

</style>