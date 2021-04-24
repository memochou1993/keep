<template>
  <div
    class="row justify-center q-pa-xl"
  >
    <div
      class="col-6"
    >
      <q-form
        class="q-gutter-md"
        @submit="submit"
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
            {{ item.title }}
          </q-card-section>
        </q-card>
      </div>
    </div>
  </div>
</template>

<script>
import {
  reactive,
  computed,
} from 'vue';

export default {
  name: 'Home',
  setup() {
    const state = reactive({
      item: {},
      items: [],
    });
    const localItems = computed(() => localStorage.getItem('items') || []);
    if (localItems.value.length > 0) {
      state.items = JSON.parse(localItems.value);
    }
    const submit = () => {
      state.items.unshift(state.item);
      localStorage.setItem('items', JSON.stringify(state.items));
      state.item = {};
    };
    return {
      state,
      localItems,
      submit,
    };
  },
};
</script>
