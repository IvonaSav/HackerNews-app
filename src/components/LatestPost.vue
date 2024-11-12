<template>
  <div class="post-list">
    <div v-for="post in posts" :key="post.id" class="post-item">
      <h2>{{ post.title }}</h2>
      <p>{{ post.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LatestPost',
  data() {
    return {
      posts: [
        { id: 1, title: 'Post Title 1', description: 'Brief description of post 1' },
        { id: 2, title: 'Post Title 2', description: 'Brief description of post 2' },
      ],
    };
  },
};
</script>

<style scoped>
.post-list {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.post-item {
  padding: 15px;
  border: 1px solid #e6e6e6;
  border-radius: 5px;
  background-color: #f6f6ef;
}

.post-item h2 {
  color: #ff6600;
  margin-bottom: 5px;
}

.post-item p {
  color: #333;
}
</style>
