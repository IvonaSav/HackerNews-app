<template>
  <div>
    <!-- Display different content based on the item type -->
    <div v-if="item.type === 'story'">
      <h2>{{ item.title }}</h2>
      <p>By: {{ item.by }}</p>
      <p>Score: {{ item.score }}</p>
      <p>Descendants: {{ item.descendants }}</p>
      <a :href="item.url" target="_blank">Read more</a>
    </div>

    <div v-else-if="item.type === 'comment'">
      <p><strong>{{ item.by }}:</strong></p>
      <p v-html="item.text"></p>
    </div>

    <div v-else-if="item.type === 'ask'">
      <h2>{{ item.title }}</h2>
      <p>By: {{ item.by }}</p>
      <p v-html="item.text"></p>
      <p>Score: {{ item.score }}</p>
      <p>Descendants: {{ item.descendants }}</p>
    </div>

    <div v-else-if="item.type === 'job'">
      <h2>{{ item.title }}</h2>
      <p>By: {{ item.by }}</p>
      <p v-html="item.text"></p>
      <p>Score: {{ item.score }}</p>
      <a :href="item.url" target="_blank" v-if="item.url">Job link</a>
    </div>

    <div v-else-if="item.type === 'poll'">
      <h2>{{ item.title }}</h2>
      <p>By: {{ item.by }}</p>
      <p>Score: {{ item.score }}</p>
      <p>Descendants: {{ item.descendants }}</p>
      <div v-if="item.parts && item.parts.length > 0">
        <h3>Poll Options:</h3>
        <ul>
          <li v-for="partId in item.parts" :key="partId">Option ID: {{ partId }}</li>
        </ul>
      </div>
    </div>

    <div v-else>
      <p>Unknown item type.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "StoryComments",
  props: {
    item: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>
h2 {
  color: #333;
}
p {
  margin: 5px 0;
}
</style>
