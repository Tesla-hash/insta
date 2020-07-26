<template>
  <q-layout>
    <q-page padding>
      <div class="column" style="height: 30px">
        <div class="col"></div>
      </div>
      <q-page-container>
        <q-page class="flex bg-image flex-center">
          <q-card v-bind:style="$q.screen.lt.sm?{'width': '80%'}:{'width':'30%'}">
            <q-card-section>
              <q-avatar size="103px" class="absolute-center shadow-10">
                <img src="../statics/icons/instagram.png">
              </q-avatar>
            </q-card-section>
            <q-card-section>
              <div class="text-center q-pt-lg">
                <div class="col text-h6 ellipsis">
                  Авторизация
                </div>
              </div>
            </q-card-section>
            <q-card-section>
              <q-form
              class="q-gutter-md"
              >
              <q-input
              type="username"
              filled
              v-model="username"
              label="Логин"
              lazy-rules
              />

              <q-input
              type="password"
              filled
              v-model="password"
              label="Пароль"
              lazy-rules

              />

              <div class="text-center q-pt-lg">
                <q-btn label="Вход" @click.prevent="onSubmit" type="button" color="primary"/>
<!--<q-btn label="Регистрация" to="/register" type="button" color="primary"/>-->
              </div>
            </q-form>
          </q-card-section>
        </q-card>
      </q-page>
    </q-page-container>
  </q-page>

</q-layout>
</template>

<script>
import DataService from "../services/DataService";

export default {
  data(){
    return {
      username : "",
      password : ""
    }
  },
  methods: {
    onSubmit() {
      let formData = {
        username: this.username,
        password: this.password,
      }
      DataService.check_user(formData)
      .then(response => {
        this.form = response.data;
        console.log(response.data);

      })
      .catch(e => {
        console.log(e);
      });
    }
  }
}
</script>

<style>

</style>
