<template>
  <li class="nav-item">
    <a class="nav-link" @click="handleClick">
      {{ categorie }}
    </a>
  </li>
</template>

<script>
import { useRouter } from 'vue-router';

export default {
  name: 'NavItem',
  props: {
    categorie: String,
    id: {
      type: String,
      required: true
    }
  },
  emits: ['nav-clicked'],
  setup(props, { emit }) {
    const router = useRouter();
    const handleClick = () => {
      router.push({ name: 'categorie', params: { id: props.id } });
      emit('nav-clicked');
    };
    return { handleClick };
  },
};
</script>
