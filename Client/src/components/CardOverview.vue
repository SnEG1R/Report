<script lang="ts">

import CardContainer from "@/components/CardContainer.vue";
import Search from "@/components/Search.vue";
import {defineComponent} from "vue";
import {UserModel} from "@/models/UserModel";
import axios from "axios";

export const serverUrl = 'http://localhost:3000';

export default defineComponent({
  components: {Search, CardContainer},
  data() {
    return {
      users: [] as UserModel[],
      filteredUsers: [] as UserModel[],
      selectedUser: Object as UserModel
    }
  },
  async created() {
    this.users = await this.getUsers();
    this.filteredUsers = [...this.users];
  },
  methods: {
    async getUsers() {
      return axios.get<UserModel[]>(serverUrl)
          .then(value => value.data);
    },
    selectUser(user: UserModel) {
      this.selectedUser = user;
    }
  }
})

</script>

<template>
  <Search :users="users" @search="filteredUsers = $event" />
  <div class="card-container">
    <CardContainer :users="filteredUsers" />
  </div>
</template>

<style scoped>
.card-container {
  margin-top: 32px;
}
</style>