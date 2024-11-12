<template>
  <nav class="sidebar">
    <ul>
      <li v-for="item in items" :key="item.name" :class="{ active: item.name === selected }">
        <i :class="item.icon"></i> {{ item.name }}
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { name: 'All', icon: 'fas fa-home' },
        { name: 'Hot', icon: 'fas fa-fire' },
        { name: 'Show HN', icon: 'fas fa-lightbulb' },
        { name: 'Ask HN', icon: 'fas fa-question-circle' },
        { name: 'Polls', icon: 'fas fa-poll' },
        { name: 'Jobs', icon: 'fas fa-briefcase' },
        { name: 'Shipow', icon: 'fas fa-ship' },
        { name: 'Starred', icon: 'fas fa-star' },
      ],
      selected: 'All',
    };
  },
};
</script>

<style scoped>
.sidebar {
  width: 200px;
  background-color: #f6f6ef;
  padding: 20px;
  border-right: 1px solid #ddd;
}
.sidebar ul {
  list-style: none;
  padding: 0;
}
.sidebar li {
  padding: 10px;
  font-size: 16px;
  color: #333;
  cursor: pointer;
}
.sidebar li.active {
  background-color: #e6e6e6;
}
.sidebar li i {
  margin-right: 10px;
}
</style>
