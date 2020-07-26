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
                <img src="../statics/icons/bithumb.png">
              </q-avatar>
            </q-card-section>
            <q-card-section>
              <div class="text-center q-pt-lg">
                <div class="col text-h6 ellipsis">
                  Api key & Api secret
                </div>
              </div>
            </q-card-section>
            <q-card-section>
              <q-form
              class="q-gutter-md"
              >
              <q-input
              filled
              v-model="username"
              label="Api key"
              lazy-rules
              />

              <q-input
              filled
              v-model="password"
              label="Api secret"
              lazy-rules

              />

              <div>
                <q-btn label="Сохранить" to="/orders" type="button" color="primary"/>
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
export default {
  data() {
    return {
      username: '21d33df557f5cacc6357ab248a87da08',
      password: '73303a3b23ac4eae1783d1d4eb8fe032cd7f5a13a57bd200d8944d2b2c44c6a1'
    }
  },
}
</script>

<style>

</style>
