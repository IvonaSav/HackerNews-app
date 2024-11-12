<template>
  <div class="filter-menu">
    <div class="filters">
      <span>Hot in</span>
      <button 
        :class="{ selected: selectedFilter === 'Stories' }"
        @click="onFilterClick('Stories')">
        Stories
      </button>
      <span>by</span>
      <button 
        :class="{ selected: selectedFilter === 'Popularity' }"
        @click="onFilterClick('Popularity')">
        Popularity
      </button>
      <span>for</span>
      <button 
        :class="{ selected: selectedFilter === 'Last 24h' }"
        @click="onFilterClick('Last 24h')">
        Last 24h
      </button>
    </div>

    <span class="results-info">
      88 results (0.001 seconds) 
      <i class="fas fa-share share-icon"></i>
    </span>
  </div>
</template>

<script>
export default {
  name: "FilterMenu",
  data() {
    return {
      selectedFilter: 'Hot' 
    };
  },
  methods: {
    onFilterClick(filter) {
      this.selectedFilter = filter; 
      this.$emit('filterChanged', filter); 
    },
  },
};
</script>

<style scoped>
.filter-menu {
  display: flex;
  justify-content: space-between; 
  align-items: center;
  padding: 10px;
  background-color: #eaeaea;
  border-radius: 5px;
}

.filters {
  display: flex;
  gap: 10px;
}

.filter-menu button {
  padding: 5px 10px;
  border: none;
  border-radius: 4px;
  background-color: #e0e0e0;
  cursor: pointer;
}

.filter-menu button:hover {
  background-color: #d0d0d0;
}

.results-info {
  font-size: 0.9em;
  color: #555;
}

.share-icon {
  margin-left: 5px;
  cursor: pointer;
  color: #555;
}

.share-icon:hover {
  color: #007bff;
}


.selected {
  background-color: #007bff; 
  color: #fff;
}
</style>
