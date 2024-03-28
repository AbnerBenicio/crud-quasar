<template>
  <q-page padding>
    <q-table title="Treats" :rows="posts" :columns="columns" row-key="name">
      <template v-slot:body-cell-actions="props">
        <q-td :props="props">
          <q-btn
            icon="delete"
            color="negative"
            dense
            @click="handleDeletePost(props.row.id)"
          />
        </q-td>
      </template>
    </q-table>
  </q-page>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

import postService from 'src/services/posts';

import { useQuasar } from 'quasar';

defineOptions({
  name: 'IndexPage',
});

const posts = ref([]);
const { list, remove } = postService();
const columns = [
  { name: 'id', label: 'Id', field: 'id', sortable: true },
  { name: 'title', label: 'Title', field: 'title', sortable: true },
  { name: 'author', label: 'Author', field: 'author', sortable: true },
  { name: 'actions', label: 'Actions', field: 'actions' },
];

const $q = useQuasar();

onMounted(() => {
  getPosts();
});

const getPosts = async () => {
  try {
    const data = await list();
    posts.value = data;
  } catch (err) {
    console.log(err);
  }
};

const handleDeletePost = async (id: unknown) => {
  try {
    $q.dialog({
      title: 'Confirm',
      // eslint-disable-next-line quotes
      message: `Tem certeza que deseja apagar o item ${id}?`,
      cancel: true,
      persistent: true,
    }).onOk(async () => {
      await remove(id);
      await getPosts();
      $q.notify({
        message: 'Apagado com sucesso',
        icon: 'check',
        color: 'positive',
      });
    });
    
  } catch (err) {
    $q.notify({ message: 'Erro ao apagar', icon: 'times', color: 'negative' });
  }
};
</script>
