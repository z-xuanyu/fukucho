/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2021-12-10 09:57:27
 * @LastEditTime: 2021-12-10 10:00:51
 * @Description: Modify here please
 */
import type { App } from 'vue';
import { createPinia } from 'pinia';

const store = createPinia();


export function setupStore(app: App){
    app.use(store);
}

export { store }