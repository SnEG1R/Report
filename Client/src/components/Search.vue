<script lang="ts">

import IconSearch from "@/components/icons/IconSearch.vue";
import {defineComponent} from "vue";
import type {UserModel} from "@/models/UserModel";
import UrlService from "@/services/UrlService";

export default defineComponent({
  components: {IconSearch},
  props: {
    users: {
      type: Array as () => UserModel[],
      required: true
    }
  },
  data() {
    return {
      searchQuery: ''
    }
  },
  created() {
    this.searchQuery = UrlService.getParameterFromUrl('term');
  },
  methods: {
    filterUsers() {
      const filteredUsers = this.users.filter(user =>
          user?.name?.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
      
      this.changeParam();
      this.$emit('search', filteredUsers);
    },
    fetchQueryAndFilterUsers() {
      this.searchQuery = UrlService.getParameterFromUrl('term');
      this.filterUsers();
    },
    changeParam() {
      UrlService.setUrlParameter('term', this.searchQuery);
    }
  },
  watch: {
    users() {
      if (this.searchQuery) {
        this.fetchQueryAndFilterUsers();
      }
    }
  }
})

</script>

<template>
  <div class="search-container d-flex position-relative align-items-center">
    <input class="search-input ps-3 pe-5" type="text" v-model="searchQuery" @input="filterUsers">
    <IconSearch class="search-icon position-absolute end-0 me-3" />
  </div>
</template>

<style scoped>
  .search-container {
    margin-top: 64px;
  }
  
  .search-input {
    border: 1px solid #D4DEFE;
    border-radius: 24px;
    width: 100%;
    height: 48px;
    font-size: 20px;
  }
</style>