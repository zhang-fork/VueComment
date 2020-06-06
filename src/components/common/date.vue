<template>

  <div class="date" v-if="leftDays(date)>0">{{leftDays(date)}}天前</div>
  <div class="date" v-else >刚刚</div>
</template>
<script>
export default {
  props: {
      date:{
          type:String,
          default:'2018-07-05 08:30'
      }
  },
  setup() {
    const leftDays = date => {
      var today = new Date();
      var endYear = new Date(date);
      var msPerDay = 24 * 60 * 60 * 1000;
      return Math.round((today.getTime() - endYear.getTime()) / msPerDay);
    };

    return {
      leftDays
    };
  }
};
</script>
<style scoped>
.date {
  color: rgba(128, 128, 128, 0.8);
}
</style>