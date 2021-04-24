<template>
  <q-layout
    view="hHh Lpr fFf"
  >
    <q-header
      elevated
    >
      <q-toolbar
         class="bg-secondary"
      >
        <q-toolbar-title>
          Keep
        </q-toolbar-title>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'App',
};
</script>
