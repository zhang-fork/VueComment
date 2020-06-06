<template>
  <form class="form">
    <div class="form-group">
      <input type="text" v-model="user.myName" placeholder="请留下尊姓大名" class="form-control" />
    </div>
    <div class="form-group">
      <div v-if="parent===null"><textarea
        class="form-control"
        placeholder="请留下您对文章的精妙评论"
        v-model="user.comment"
        rows="3"
      ></textarea></div>
      <div v-else><textarea
        class="form-control"
        :placeholder=' "@"+ parent.user_name '
        v-model="user.comment"
        rows="3"
      ></textarea></div>
      
    </div>
    <div class="form-group">
      <button type="button" @click="addOne(parent)" class="btn btn-success">submit</button>
      <button type="button" @click="resetUser()" class="btn btn-warning">reset</button>
    </div>
  </form>
</template>

<script>
import { ref, reactive } from "vue";
import { list } from "@/lib/listcontainer.js";
export default {
   props:{
    parent:{
      type:Object,
      default:null
    }
  },
  setup(props, context) {
    
    const createUser = () =>
      reactive({
        myName: null,
        comment: null
       
      });

    const user = ref(createUser());

    const resetUser = () => (user.value = createUser());

    function addOne(parent) {
      if (parent===null) {
         list.push({
          user_id: 1,
          user_name: user.value.myName,
          comment_content: user.value.comment,
          like_num: 0,
          comment_date: Date()
      });
       resetUser();
      }else{
          if(parent.child){
             parent.child.push({
          user_id: 1,
          user_name: user.value.myName,
          comment_content: user.value.comment,
          like_num: 0,
          comment_date: Date(),
           parent_name: parent.user_name
        });
          }else{
            parent.child=[{
          user_id: 1,
          user_name: user.value.myName,
          comment_content: user.value.comment,
          like_num: 0,
          comment_date: Date(),
         parent_name: parent.user_name
        }];
          }

      resetUser();
      context.emit('Done');


      };
    };
    return {
      addOne,
      user,
      resetUser,
      
    };
  },
}
</script>

<style  scoped>
.btn {
  margin-right: 10px;
}
.form {
  width: 90vw;
}
</style>