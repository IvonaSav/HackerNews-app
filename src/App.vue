<template>
  <div id="app">
    <!-- Main Header -->
    <MainHeader @searchChanged="updateSearchQuery" />

    <!-- Main Content Area -->
    <div class="main-content">
      <!-- Sidebar Menu -->
      <SideBarMenu />

      <!-- Right Content Section with Filters and Posts -->
      <div class="content-right">
        <SearchFilters @filterChanged="filterPosts" />


        <div class="post-list">
          <!-- Display Posts -->
          <PostItem v-for="post in filteredPosts" :key="post.id" :post="post" @click="selectPost(post)" />
     
        </div>
      </div>
    </div>

    <!-- Display Story Comments if a Post is Selected -->
   <StoryComments v-if="selectedPost" :commentIds="selectedPost.commentIds" />

  </div>
</template>

<script>
import MainHeader from './components/MainHeader.vue';
import SideBarMenu from './components/SideBarMenu.vue';
import PostItem from './components/PostItem.vue';
import SearchFilters from './components/SearchFilters.vue';
import StoryComments from './components/StoryComments.vue';

export default {
  name: 'App',
  components: {
    MainHeader,
    SearchFilters,
    SideBarMenu,
    PostItem,
    StoryComments,
  },
  data() {
    return {
      posts: [
        { id: 1, title: 'How Verizon and Turn Defeat Browser Privacy Protections', points: 482, author: 'fortneadotorg', time: '1 day ago', comments: 100, url: 'https://www.eff.org' },
        { id: 2, title: 'Be My Eyes – Lend your eyes to the blind', points: 452, author: 'khebbie', time: '8 hours ago', comments: 111, url: 'https://www.bemyeyes.org' },
        { id: 3, title: 'But Where Do People Work in This Office?', points: 435, author: 'strangetimes', time: '8 hours ago', comments: 275, url: 'https://www.mattdodget.com' },
      ],
      selectedPost: null,
      filter: 'Hot', 
      searchQuery: '', 
    };
  },
  computed: {
    filteredPosts() {
       const query = this.searchQuery.toLowerCase();
      const filteredByFilter = this.applyFilter(this.posts, this.filter);
     return filteredByFilter.filter(post =>
      post.title.toLowerCase().includes(query) ||
      post.author.toLowerCase().includes(query) ||
       (post.url && typeof post.url === 'string' && post.url.toLowerCase().includes(query))
      );
    },
  },
  methods: {
    selectPost(post) {
      this.selectedPost = post;
    },
    filterPosts(selectedFilter) {
      this.filter = selectedFilter;
    },
    applyFilter(posts, filter) {
      if (filter === 'Hot') {
        return posts.slice().sort((a, b) => b.points - a.points);
      } else if (filter === 'Stories') {
        return posts;
      } else if (filter === 'Popularity') {
        return posts.slice().sort((a, b) => b.comments - a.comments);
      } else if (filter === 'Last 24h') {
        return posts.filter(post => post.time === '8 hours ago');
      }
      return posts;
    },
    updateSearchQuery(query) {

      this.searchQuery = query;
    },
  },
};
</script>

<style scoped>
#app {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.main-content {
  display: flex;
  flex: 1;
}

.content-right {
  flex: 1;
  padding: 20px;
  background-color: #f6f6ef;
}

.post-list {
  padding: 20px;
  background-color: #f6f6ef;
}

button {
  padding: 5px 10px;
  border: none;
  border-radius: 4px;
  background-color: #e0e0e0;
  cursor: pointer;
}

button:hover {
  background-color: #d0d0d0;
}
</style>
