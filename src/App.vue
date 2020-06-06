<template>
<my-Comment  />
  <div v-if="list.length">
    <div v-for="(item, index) in list" :key="index" class="comment">
      <!-- <div>{{item.user_id}}</div> -->
      <div class="comment_title">
        <Span class="avatar">{{item.user_name[0]}}</Span>
        <span class="name">{{item.user_name.slice(1)}} :</span>
        <my-date :date="item.comment_date"></my-date>
      </div>
      <div class="comment_content">{{item.comment_content}}<interactive :origin="item" /></div>
      <!-- <div>{{item.comment_id}}</div> -->
      <reply-child :reply="item.child"></reply-child>
    </div>
  </div>
  <div v-else>{{none}}</div>
  
</template>

<script>
import { reactive, computed, ref } from "vue";
import myComment from "@/components/comment.vue";
import { list } from "@/lib/listcontainer.js";

import interactive from "@/components/interactive.vue";
import replyChild from "@/components/reply.vue";
export default {
  components: {
    myComment,
    replyChild,
    interactive
  },
  setup() {
    const none = "Nothing Left";
    const deleteitem = index => list.splice(index, 1);

    return {
      list,
      none
    };
  }
};
</script>

<style scoped>
@import url("./assets/fonts/iconfont.css");
@import url("./assets/css/animate.min.css");
@import url("./assets/css/bootstrap.min.css");
.comment {
  border-bottom: 1px dotted #eee;
  padding: 20px 0;
  width: 90vw;
}
.comment_title {
  display: flex;
  align-items: baseline;

  width: 90vw;
}
.name {
  color: rgb(158, 51, 199);
}
.comment_title > span:nth-child(2) {
  flex: 1;
}

.avatar {
  display: block;
  font-size: 40px;
  text-align: center;
  line-height: 60px;
  height: 60px;
  width: 60px;
  color: rgb(158, 51, 199);
  background: rgba(128, 128, 128, 0.1);
  border-radius: 30px;
}
.comment_content {
  padding-left: 30px;
  padding-bottom: 5px;
  padding-top: 5px;
}
</style>