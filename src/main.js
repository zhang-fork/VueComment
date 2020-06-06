import { createApp } from 'vue';
import App from './App.vue'
import myIcon from '@/components/common/my-icon.vue'
import myDate from '@/components/common/date.vue'
const vue=createApp(App);
vue.component('my-icon', myIcon);
vue.component('my-date', myDate);
vue.mount('#app')
