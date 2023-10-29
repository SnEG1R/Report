<script lang="ts">
import IconClose from "@/components/icons/IconClose.vue";
import type {UserModel} from "@/models/UserModel";
import {defineComponent} from "vue";

export default defineComponent({
  components: {IconClose},
  props: {
    user: {
      type: Object as () => UserModel,
      required: true
    }
  }
})
</script>

<template>
  <div class="modal fade" id="modal-window" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content border-0">
        <div class="modal-header border-0">
          <h5 class="modal-title" id="exampleModalLabel">{{user.name}}</h5>
          <IconClose type="button" data-bs-dismiss="modal" aria-label="Close" />
        </div>
        <div class="modal-body">
          <table class="table">
            <tr>
              <td>Телефон:</td>
              <td>{{user.phone}}</td>
            </tr>
            <tr>
              <td>Почта:</td>
              <td>{{user.email}}</td>
            </tr>
            <tr>
              <td>Дата приема:</td>
              <td>{{user.hire_date}}</td>
            </tr>
            <tr>
              <td>Должность:</td>
              <td>{{user.position_name}}</td>
            </tr>
            <tr>
              <td>Подразделение:</td>
              <td>{{user.department}}</td>
            </tr>
          </table>
        </div>
        <div class="modal-footer border-0 d-flex flex-column align-items-start">
          <span class="modal-footer-title">Дополнительная информация:</span>
          <div class="modal-footer-description">
<!--            Разработчики используют текст в качестве заполнителя макта страницы. Разработчики используют текст в качестве заполнителя макта страницы.-->
            <span>{{user.address}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .modal {
    border-radius: 16px;
  }
  
  .modal-content {
    box-shadow: 0 0 20px #0000001A;
  }
  
  .modal-header {
    padding: 24px 24px 0 24px;
  }
  
  .modal-body {
    padding: 40px 24px 0 24px;
  }

  td {
    vertical-align: top;
    padding-top: 14px;
  }
  
  td:nth-child(n+2) {
    padding-left: 40px;
  }

  .modal-title {
    font-weight: 700;
    font-size: 24px;
    line-height: 30px;
  }

  .modal-info span:not(:first-child), .modal-fields span:not(:first-child) {
    margin-top: 14px;
  }
  
  .modal-footer {
    padding: 40px 24px 56px 24px;
  }
  
  .modal-footer-title {
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
  }
  
  .modal-footer-description {
    color: #8189A3;
    font-size: 16px;
    line-height: 18px;
  }
</style>

<style>
.modal-backdrop {
  background-color: #BCC3D080;
}
</style>