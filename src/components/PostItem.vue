<template>
  <div class="post-item">
    
    <div class="title-container">
      <div class="post-image">
        <img src="https://img.freepik.com/free-photo/fake-news-word-around-circle_23-2148875969.jpg?t=st=1731352818~exp=1731356418~hmac=0d9becbeb4686f2165ba3ed0df51468be6ccb89d5776abb7b095a9ba6412d754&w=740" alt="Post Image" class="image" />
      </div>
      <h2>{{ post.title }}</h2>
    </div>

 
    <div class="post-meta">
      <span class="points">
        <i class="fas fa-heart"></i> {{ post.points }} points
      </span>
      
      
      <span class="author">
        <i class="fas fa-user"></i> {{ post.author }}
      </span>
      
      <span class="time">
        <i class="fas fa-clock"></i> {{ post.time }}
      </span>
      
 
      <a :href="post.url" target="_blank" class="url"> {{ post.url }}</a>
      
    
      <div class="post-actions">
        <!-- Comments with count -->
        <span class="comment-icon">
          <i class="fas fa-comments"></i> {{ post.comments }} <!-- Display comment count -->
        </span>
        
       
        <span class="share-icon">
          <i class="fas fa-share"></i>
        </span>
        
        <span class="favorite-icon">
          <i class="fas fa-star"></i> {{ post.favorites }} <!-- Display favorite count -->
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    post: Object
  }
};
</script>

<style scoped>
.post-item {
  border-bottom: 1px solid #ddd;
  padding: 20px;
  margin-bottom: 15px;
  background-color: #fff;
}

h2 {
  font-size: 1.5em;
  margin: 0;
}

.title-container {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.post-image {
  width: 50px; 
  height: 50px;
  margin-right: 15px; 
}

.post-image .image {
  width: 100%;
  height: 100%;
  object-fit: cover; 
  border-radius: 4px; 
}

.post-meta {
  font-size: 0.9em;
  color: #555;
  display: flex;
  align-items: center;
  margin-top: 10px;
}

.post-meta span {
  margin-right: 15px;
}

.post-meta .url {
  color: #007bff;
  text-decoration: none;
}

.post-meta .url:hover {
  text-decoration: underline;
}

.post-meta .points {
  color: #333;
}

.post-meta .points i,
.post-meta .author i,
.post-meta .time i {
  margin-right: 5px; /* Space between icons and text */
}

/* Post actions on the right */
.post-actions {
  margin-left: auto;
  display: flex;
  gap: 15px;
}

.post-actions span {
  cursor: pointer;
  color: #555;
  display: flex;
  align-items: center;
}

.post-actions span i {
  margin-right: 5px; /* Space between icon and count text */
}

.post-actions .comment-icon:hover,
.post-actions .share-icon:hover,
.post-actions .favorite-icon:hover {
  color: #007bff; /* Hover color */
}
</style>
