<template>
  <header class="app-header">
    <div class="logo">
      <img src="https://alfred.app/workflows/jereze/hacker-news-search/icon.png" alt="Hacker News Logo" class="logo-image">
      <h2>
        <span>Search</span> <br />
        Hacker News
      </h2>
    </div>
    <div class="search-container">
      
      <input
        type="text"
        class="search-bar"
        placeholder="Search stories by title, url, or author"
        v-model="searchQuery"
        @input="onSearch"
      />
      <i class="fas fa-search search-icon"></i>
    </div>
    <span class="powered-by">by <img src="https://raw.githubusercontent.com/detain/svg-logos/b02ee1ac30c7ff4757278337c95588b01ed0954b/svg/a/algolia.svg" style="width:40px"></span>
  </header>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: '', 
    };
  },
  methods: {
    onSearch() {
      // Emit search query to parent component
      this.$emit('searchChanged', this.searchQuery);
    },
  },
};
</script>

<style scoped>

.app-header {
  display: flex;
  align-items: center;
  padding: 10px 20px;
  background-color: white;
  color: black;
  border-bottom: 1px solid #ddd;
}

.logo {
  display: flex;
  align-items: center;
  gap: 10px;
}

.logo-image {
  width: 50px;
}

.logo-text h2 {
  font-size: 1.2rem;
  color: #333;
  line-height: 1.2;
  margin: 0;
}

.logo-text span {
  font-weight: normal;
  color: #555;
}

.search-container {
  position: relative;
  flex: 1;
  display: flex;
  align-items: center;
  margin: 0 20px;
}

.search-bar {
  flex: 1;
  padding: 8px 10px 8px 30px;
  border-radius: 4px;
  border: 1px solid #ccc;
  font-size: 14px;
}

.search-icon {
  position: absolute;
  left: 10px;
  color: #ff6600;
  font-size: 18px;
}

.powered-by {
  color: black;
  font-size: 12px;
}
</style>
