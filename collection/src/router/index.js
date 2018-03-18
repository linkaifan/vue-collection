import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Worker from '@/components/Worker'
import Upload from '@/components/Upload'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
    	path: '/Worker',
    	name: 'Worker',
    	component: Worker
    },
        {
    	path: '/Upload',
    	name: 'Upload',
    	component: Upload
    },
  ]
})
