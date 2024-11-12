<!-- CommentComponent.vue -->
<template>
  <div class="comment-section">
    <div v-for="comment in comments" :key="comment.id" class="comment">
      <div class="user-info">
        <span class="username">{{ comment.username }}</span>
        <span class="timestamp">{{ comment.timestamp }}</span>
      </div>
      <p class="comment-text" v-html="comment.text"></p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      comments: [
        {
          id: 1,
          username: "IshtKebab",
          timestamp: "2 hours ago",
          text: `Ha, this is where I work: <br>
                 <a href="http://news.images.itv.com/image/file/257809/Image_update_b4..." target="_blank">
                   http://news.images.itv.com/image/file/257809/Image_update_b4...
                 </a><br>
                 That photo is quite old. There are about 80% more desks in that room now (around 1000 in total). It's pretty loud. I put up with it though because the job is otherwise pretty awesome.`
        },
        {
          id: 2,
          username: "mbeeston",
          timestamp: "6 hours ago",
          text: `1. These are clearly marketing pictures taken by professional photographers. Well done ones I might add. They are meant to demonstrate (perception/reality) what daily life of an...`
        },
        {
          id: 3,
          username: "barn",
          timestamp: "6 hours ago",
          text: `2. There is yet to be conclusive evidence that open offices work or don’t work.<br>
                 Here’s a multi-study that reviewed hundreds of specific studies...`
        }
      ]
    };
  }
};
</script>

<style scoped>
.comment-section {
  max-width: 1200px;
  margin: 0 auto;
  font-family: Arial, sans-serif;
}

.comment {
  border-bottom: 2px solid #ddd;
  padding: 15px 0;
}

.user-info {
  font-weight: bold;
  color: #333;
}

.username {
  color: #007bff;
  margin-right: 10px;
}

.timestamp {
  color: #555;
}

.comment-text {
  color: #333;
  line-height: 1.5;
}

a {
  color: #007bff;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>
