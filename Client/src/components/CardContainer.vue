<script lang="ts">
import Card from "@/components/Card.vue";
import type {UserModel} from "@/models/UserModel";
import Modal from "@/components/Modal.vue";
import {defineComponent} from "vue";

export default defineComponent({
  components: {Modal, Card},
  props: {
    users: {
      type: Array as () => UserModel[],
      required: true
    }
  },
  data() {
    return {
      selectedUser: Object as UserModel
    }
  },
  methods: {
    selectUser(user: UserModel) {
      this.selectedUser = user;
    }
  }
})
</script>

<template>
  <div class="d-flex flex-wrap justify-content-between">
    <Card v-for="user in users" @click="selectUser(user)" :user="user" data-bs-toggle="modal" data-bs-target="#modal-window" />
  </div>
  
  <Modal :user="selectedUser" />
</template>