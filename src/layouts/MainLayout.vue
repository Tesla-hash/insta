<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          Space Smoke Map (DEV)
        </q-toolbar-title>

        <div>Made by Tesla</div>
      </q-toolbar>
    </q-header>
<!--
    <q-drawer
            v-model="leftDrawerOpen"
            show-if-above
            :width="200"
            :breakpoint="600"
          >
          <q-scroll-area style="height: calc(100% - 150px); margin-top: 150px; border-right: 1px solid rgba(221, 221, 221, 0);">
              <q-list padding>
                <q-item clickable v-ripple tag="a" rel="noopener" href="#/tables">
                  <q-item-section avatar>
                    <q-icon name="fas fa-balance-scale" />
                  </q-item-section >

                  <q-item-section>
                    Instagram
                  </q-item-section>
                </q-item>

                <q-item clickable v-ripple tag="a" rel="noopener" href="#/tables">
                  <q-item-section avatar>
                    <q-icon name="fas fa-cash-register" />
                  </q-item-section>

                  <q-item-section>
                    Youtube
                  </q-item-section>
                </q-item>

                <q-item clickable v-ripple tag="a" rel="noopener" href="#/tables">
                  <q-item-section avatar>
                    <q-icon name="fas fa-cogs" />
                  </q-item-section>

                  <q-item-section>
                    Facebook
                  </q-item-section>
                </q-item>

                <q-item clickable v-ripple tag="a" rel="noopener" href="#/tables">
                  <q-item-section avatar>
                    <q-icon name="fas fa-mobile-alt" />
                  </q-item-section>

                  <q-item-section clickable v-ripple tag="a" rel="noopener" href="#/tables">
                    Discord
                  </q-item-section>
                </q-item>
                <q-item clickable v-ripple tag="a" rel="noopener" href="#/dashboard">
                  <q-item-section avatar>
                    <q-icon name="fas fa-mobile-alt" />
                  </q-item-section>

                  <q-item-section clickable v-ripple tag="a" rel="noopener" href="#/tables">
                    Настройки
                  </q-item-section>
                </q-item>
              </q-list>
            </q-scroll-area>

            <q-img class="absolute-top" style="height: 150px">
              <div class="absolute-bottom bg-transparent">
                <q-avatar size="56px" class="q-mb-sm">
                  <img src="../statics/icons/instagram.png">
                </q-avatar>
                <div class="text-weight-bold">Tesla Sixx</div>
                <div>@electro_207</div>
              </div>
            </q-img>
    </q-drawer>-->
    <q-page-container style="padding-left:10px; padding-top:0px;">
      <router-view />
      </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink';

export default {
  components: {
    EssentialLink

  },
  data(){
    return{
      leftDrawerOpen:false
    }
  }

}

</script>
