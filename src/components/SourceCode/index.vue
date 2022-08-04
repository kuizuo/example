<script setup lang="ts">
import { PrismEditor } from 'vue-prism-editor'
import 'vue-prism-editor/dist/prismeditor.min.css'
import { highlight, languages } from 'prismjs/components/prism-core'
import 'prismjs/components/prism-clike'
import 'prismjs/components/prism-markup'
import 'prismjs/components/prism-javascript'
import 'prism-theme-vars/base.css'
import '~/styles/prism.css'

const props = defineProps({
  source: {
    type: String,
    required: true,
  },
})

const code = computed(() => props.source ?? '')

const highlighter = () => {
  return highlight(code.value, {
    ...languages.markup,
    ...languages.javascript,
    ...languages.css,
  },
  'html')
}
</script>

<template>
  <div class="example-source-wrapper">
    <PrismEditor v-model="code" class="my-editor" :highlight="highlighter" />
  </div>
</template>

<style>
.prism-editor__textarea:focus {
  outline: none;
}
.my-editor {
  background-color: #fafafa;
  font-family: Fira code, Fira Mono, Consolas, Menlo, Courier, monospace;
  padding: 1rem;
}

html.dark .my-editor {
  background-color: #262727;
}

.example-source-wrapper {
  position: relative;
}

div[class*=language-] {
    position: relative;
    overflow-x: auto;
    text-align: left;
    padding: 0.5rem;
}

[class~=language-vue]:before {
    content: "vue";
}

[class*=language-]:before {
    position: absolute;
    top: .4em;
    right: .8em;
    z-index: 2;
    opacity: var(--prism-marker-opacity);
    font-size: var(--prism-marker-font-size);
    color: var(--prism-marker-color);
}
</style>
