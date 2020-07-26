<template>
  <q-layout>
    <q-page padding>
      <div class="column" style="height: 120px">
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
                  Ордер
                </div>
              </div>
            </q-card-section>
            <template>
              <div class="q-pa-md">
                <div class="q-gutter-y-md" style="max-width: 600px">
                  <q-card>
                    <q-separator />
                    <q-stepper
                    v-model="step"
                    vertical
                    color="primary"
                    animated
                    >
                    <q-step
                    :name="1"
                    title="Объем"
                    icon="account_balance"
                    :done="step > 1"
                    >
                    <q-input
                    filled
                    v-model="price"
                    label="Символ"
                    mask="#.##"
                    fill-mask="0"
                    reverse-fill-mask
                    input-class="text-right"
                    />
                  </br>
                  <q-input
                  filled
                  v-model="price"
                  label="Количество"
                  mask="#.##"
                  fill-mask="0"
                  reverse-fill-mask
                  input-class="text-right"
                  />
                  <q-field :dense="dense" readonly>
                    <template v-slot:control>
                      <div class="self-center full-width no-outline">Сумма: </div>
                    </template>
                  </q-field>
                  <q-stepper-navigation>
                    <q-btn @click="step = 2" color="primary" label="Продолжить" />
                  </q-stepper-navigation>
                </q-step>
                <q-step
                :name="2"
                title="Триггеры"
                icon="create_new_folder"
                :done="step > 2"
                >
                </br>
                Добавьте условия для вашего ордера. Цену по которой бот должен купить или продать.
                </br>
                </br>
                <q-tabs
                v-model="tab"
                dense
                class="text-grey"
                active-color="primary"
                indicator-color="primary"
                align="justify"
                narrow-indicator
                >
                <q-tab name="aim" label="Продать" />
                <q-tab name="stop" label="Купить" />
              </q-tabs>
              <q-separator />

              <q-tab-panels v-model="tab" animated>
                <q-tab-panel name="aim">
                  <div class="text-h6">Цена продажи</div>
                    <q-input
                    filled
                    v-model="price"
                    label="Цена"
                    mask="#.##"
                    fill-mask="0"
                    reverse-fill-mask
                    input-class="text-right"
                    />
                </q-tab-panel>

                <q-tab-panel name="stop">
                  <div class="text-h6">Цена покупки</div>
                    <q-input
                    filled
                    v-model="price"
                    label="Цена"
                    mask="#.##"
                    fill-mask="0"
                    reverse-fill-mask
                    input-class="text-right"
                    />
                </q-tab-panel>
              </q-tab-panels>
              <q-stepper-navigation>
                <q-btn @click="step = 3"  label="Продожить" />
                <q-btn flat @click="step = 1" label="Назад" class="q-ml-sm" />
              </q-stepper-navigation>
            </q-step>
            <q-step
            :name="3"
            title="Итого"
            icon="assignment"
            :done="step > 3"
            >
            This step won't show up because it is disabled.
            <q-stepper-navigation>
              <q-btn @click="step = 4"  label="Создать" />
              <q-btn flat @click="step = 2" label="Назад" class="q-ml-sm" />
            </q-stepper-navigation>
          </q-step>
        </q-stepper>
      </q-card>
    </div>
  </div>
</template>
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
      tab: 'aim',
      step: 1
    }
  },
}
</script>

<style>

</style>
