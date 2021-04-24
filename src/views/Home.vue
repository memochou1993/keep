<template>
  <div
    class="row justify-center q-pa-xl"
  >
    <div
      class="col-6"
    >
      <q-form
        class="q-gutter-md"
        @submit="create()"
      >
        <q-input
          v-model="state.item.title"
          autocomplete="off"
          autofocus
          color="secondary"
          outlined
        />
      </q-form>
      <div
        v-for="(item, i) in state.items"
        :key="i"
        class="q-mt-md"
      >
        <q-card>
          <q-card-section>
            <div
              class="row justify-center"
            >
              <div
                class="col-11 text-left"
              >
                {{ item.title }}
              </div>
              <div
                class="col-1 text-center"
              >
                <q-btn
                  color="secondary"
                  outline
                  round
                  size="xs"
                  icon="delete"
                  @click="destroy(item)"
                />
              </div>
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </div>
</template>

<script>
import {
  reactive,
} from 'vue';

export default {
  name: 'Home',
  setup() {
    const state = reactive({
      item: {},
      items: JSON.parse(localStorage.getItem('items')) || [],
    });

    const store = () => {
      localStorage.setItem('items', JSON.stringify(state.items));
    };

    const create = () => {
      state.items.unshift(state.item);
      store();
      state.item = {};
    };

    const destroy = (item) => {
      state.items = state.items.filter((i) => i.title !== item.title);
      store();
    };

    return {
      state,
      create,
      destroy,
    };
  },
};
</script>
