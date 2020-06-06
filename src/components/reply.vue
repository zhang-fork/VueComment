<template>
  <div><div v-for="(item, index) in reply" :key="index" >
    <div class="reply_content">
        <div  class="mydate">
        <span class="text-primary">{{item.user_name}}:</span>
      <span class="text-primary">@{{item.parent_name}}</span>
      <my-date :date="item.comment_date"></my-date>
        </div>
      
        <div>{{item.comment_content}}</div> 
      <interactive :origin="item" />
      </div>
      <reply-child :reply="item.child" ></reply-child>
    </div>
    </div>
    
    
    
  
  

  
</template>

<script>
import interactive from "@/components/interactive.vue";
export default {
    name:"replyChild",
  props: {
    reply: {
      type: Array,
      default: []
    }
  },

  components: {
    interactive,
    
  },
 
}
</script>



<style scoped>
.reply_content {
  padding-left: 50px;
  padding-bottom: 5px;
  padding-top: 5px;
}
.reply_content > span {
  padding-right: 5px;
}

.mydate{
    display:flex;
    
}
.mydate>span:nth-child(2){
    flex:1;
}
</style>