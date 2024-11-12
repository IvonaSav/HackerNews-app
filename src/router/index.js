import { createRouter, createWebHistory } from 'vue-router';
import LatestPost from '../components/LatestPost.vue'; 
import PostDetails from '../components/PostDetails.vue';

const routes = [
  { path: '/', component: LatestPost },
  { path: '/post/:id', component: PostDetails, props: true } 
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
