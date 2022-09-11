<template>
  <div id="app">
    <div class="about">
    <h1>This is an about page</h1>
    <button @click="increment">Click -> {{ state.count }}</button>
  </div>
  </div>
</template>

<script setup lang="ts">
import { defineComponent, reactive, onMounted } from '@vue/composition-api';
// export default defineComponent({
//   setup(props, context) {
//     const state: { count: number; name: string } = reactive({ count: 0, name: "" });

//     const increment = (): void => {
//       state.count += 1;
//     }

//     onMounted(() => {
//       console.log('step2 -> onMounted');
//     })

//     console.log("hi from the defineComponent");
//     return { state, increment };
//   }
// })


const state = reactive({ count: 0, name: "" });

const increment = () => {
  state.count += 1;
}

onMounted(() => {
  console.log('step2 -> onMounted');
})

console.log("hi from the setup tag");
</script>
