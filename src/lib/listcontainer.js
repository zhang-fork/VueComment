import {reactive} from 'vue';
export const list= reactive(
    [
    {
        user_id:1,
        user_name:'李静',
        comment_content:'住院部第一,组件评论功能的实现,另外，并非所有浏览器，都支持将圆角半径设为一个百分比值',
        like_num:100,
        comment_date:'2018-07-01 08:30',
        child:[
            {
                user_id:2,
                user_name:'支天池',
                comment_content:'住院部第一,组件评论功能的实现,另外，并非所有浏览器，都支持将圆角半径设为一个百分比值因此，目前最安全的做法，就是将每个圆角边框的风格和宽度，都设为一样的值，并且避免使用百分比值。',
                like_num:101,
                comment_date:'2018-07-02 08:50',
                parent_name:'李静',
                child:[
                    {
                        user_id:3,
                        user_name:'王宪法',
                        comment_content:'组件评论功能的实现,另外，并非所有浏览器，都支持将圆角半径设为',
                        like_num:103,
                        comment_date:'2018-07-05 08:55',
                        parent_name:'支天池'
                        }
                ]
                },
                
        ]
    },
    
    {
        user_id:5,
        user_name:'王晨',
        comment_content:'心内第一',
        like_num:230,
        comment_date:'2018-07-05 09:50',
        child:[]
    },
    
]
  );

