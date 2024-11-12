<template>
  <div class="filter-menu">
    <div class="filters">
      <!-- Buttons with dynamic class binding for selected state -->
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

    <!-- Results information with share icon aligned to the right -->
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
      selectedFilter: 'Hot' // Default selected filter
    };
  },
  methods: {
    onFilterClick(filter) {
      this.selectedFilter = filter; // Update selected filter
      this.$emit('filterChanged', filter); // Emit the selected filter to parent component
    },
  },
};
</script>

<style scoped>
.filter-menu {
  display: flex;
  justify-content: space-between; /* Align items to the edges */
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
  color: #007bff; /* Change color on hover */
}

/* Styles for the selected filter button */
.selected {
  background-color: #007bff; /* Highlight color for selected button */
  color: #fff;
}
</style>
