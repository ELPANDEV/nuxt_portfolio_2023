<script setup lang="ts">
  const header    = ref<HTMLDivElement>();
  const container = ref<HTMLDivElement>();

  let page_index = ref<number>(0);

  const disable_elements = () => {
    for (const element of header.value!.children) {
      element.classList.remove('enabled');
    }

    for (const element of container.value!.children) {
      element.classList.remove('enabled');
    }
  }

  const enable_element = (int: number) => {
    header   .value!.children[int].classList.add('enabled');
    container.value!.children[int].classList.add('enabled');
  }

  const move_page = (int: number) => {
    page_index.value = int

    disable_elements();
    enable_element(page_index.value);
  }

  const prev_enabled = computed(() => page_index.value > 0)
  const next_enabled = computed(() => page_index.value < container?.value?.children.length! - 1 ?? 0)

  onMounted(() => {
    enable_element(0);

    for (let index = 0; index < header.value!.children.length; index++) {
      const element = header.value!.children[index];
      
      element.addEventListener('click', () => move_page(index))
    }

    window.addEventListener("keydown", (event) => {
      if (event.key == 'ArrowRight' && next_enabled.value) move_page(++page_index.value)
      if (event.key == 'ArrowLeft'  && prev_enabled.value) move_page(--page_index.value)
    });
  })
</script>

<template>
  <div class="v-pager">
    <button class="left"
      v-if="prev_enabled"
      @click="move_page(--page_index)"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M17.51 3.87L15.73 2.1L5.84 12l9.9 9.9l1.77-1.77L9.38 12l8.13-8.13z"/></svg>
    </button>
    <div class="header" ref="header">
      <slot name="buttons" />
    </div>
    <div class="container" ref="container">
      <slot name="elements" />
    </div>
    <button class="right"
      v-if="next_enabled"
      @click="move_page(++page_index)"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6.23 20.23L8 22l10-10L8 2L6.23 3.77L14.46 12z"/></svg>
    </button>
  </div>
</template>
