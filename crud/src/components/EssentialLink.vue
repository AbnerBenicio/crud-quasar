<template>
  <q-item
    clickable
    :to="route"
    exact
  >
    <q-item-section
      v-if="icon"
      avatar
    >
      <q-icon :name="icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ title }}</q-item-label>
      <q-item-label caption>{{ caption }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script setup lang="ts">
// import { route } from 'quasar/wrappers';

defineOptions({
  name: 'EssentialLink'
});

export interface EssentialLinkProps {
  title: string;
  caption?: string;
  route?: string | { name: string };
  icon?: string;
};

withDefaults(defineProps<EssentialLinkProps>(), {
  caption: '',
  route: '#',
  icon: '',
});
</script>
