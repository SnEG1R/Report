<script lang="ts">
import IconPhone from "@/components/icons/IconPhone.vue";
import type {UserModel} from "@/models/UserModel";
import IconEmail from "@/components/icons/IconEmail.vue";
import {defineComponent} from "vue";

export default defineComponent({
  components: {IconEmail, IconPhone},
  props: {
    user: {
      type: Object as () => UserModel,
      required: true
    }
  }
})
</script>

<template>
  <div class="card">
    <span class="card-title">{{user.name}}</span>
    <div class="info-container">
      <div class="info-item">
        <IconPhone />
        <span>{{user.phone}}</span>
      </div>
      <div class="info-item">
        <IconEmail />
        <span>{{user.email}}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .card {
    border: none;
    border-radius: 16px;
    width: 357px;
    height: 357px;
    margin-bottom: 24px;
    padding: 24px;
    box-shadow: 0 0 20px #0000001A;
  }
  
  .card-title {
    color: #262C40;
    font-family: 'Proxima Nova', serif;
    font-size: 24px;
    font-weight: 700;
    line-height: 30px;
  }
  
  .info-container {
    margin-top: 24px;
  }
  
  .info-item span {
    margin-left: 14px;
  }

  .info-item:not(:first-child) {
    margin-top: 14px;
  }
</style>