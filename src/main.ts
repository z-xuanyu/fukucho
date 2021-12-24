/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2021-12-07 16:25:33
 * @LastEditTime: 2021-12-10 10:01:37
 * @Description: Modify here please
 */
import { createApp } from 'vue'
import App from './App.vue'
import { setupGlobDirectives } from './directives';
import './index.css'
import { setupRouter } from './routes';
import { setupStore } from './store';


function bootstrap() {
    const app = createApp(App);


    //仓库
    setupStore(app); 


    // 注册全局自定义指令
    setupGlobDirectives(app)
    

    // 注册路由
    setupRouter(app);

    
    app.mount('#app')
}

bootstrap();
