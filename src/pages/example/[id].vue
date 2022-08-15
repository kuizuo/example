<script lang="ts" setup>
const route = useRoute()

const id = route.params.id
const title = route.query.title

const Example = defineAsyncComponent(() => import(`../../components/example/${id}.vue`)
  .catch((error) => {
    console.error(error)
    return import('../../layouts/404.vue')
  }),
)

const source = asyncComputed(() => import(`../../components/example/${id}.vue?raw`).then(({ default: source }) => source))

let reloadFlag = $ref(true)
async function reload() {
  reloadFlag = false
  await nextTick()
  reloadFlag = true
}

const { copy, copied } = useClipboard({})

async function copyCode() {
  await copy(source.value)
  // toast('Copied!')
}

function goEditPage() {
  window.open(`https://github.com/kuizuo/example/blob/main/src/components/example/${id}.vue`)
}

const [sourceVisible, toggleSourceVisible] = useToggle(false)
</script>

<template>
  <Suspense>
    <template #default>
      <div v-if="!isFullDisplay" class="example border border-gray-3 rounded">
        <div v-if="title" class="examle-title">
          <h2 class="text-base p-2">
            {{ title }}
          </h2>
          <div class="border-b border-gray-3" />
        </div>
        <div class="example-showcase p-6">
          <Example v-if="reloadFlag" />
        </div>
        <div class="border-b border-gray-3" />
        <div class="example-option h-8 p-4 flex justify-end items-center gap-4">
          <i i-mdi-reload icon-btn @click="reload()" />
          <!-- <i i-carbon-chemistry icon-btn /> -->
          <i i-ri-github-line icon-btn @click="goEditPage()" />
          <i v-if="!copied" i-carbon-copy icon-btn @click="copyCode()" />
          <i v-if="copied" i-carbon-checkbox-checked icon-btn />
          <i i-carbon-code icon-btn @click="toggleSourceVisible()" />
        </div>

        <CollapseTransition>
          <SourceCode v-show="sourceVisible" :source="source" />
        </CollapseTransition>

        <Transition>
          <div
            v-show="sourceVisible" bg-white dark:bg-black sticky left-0 right-0 bottom-0 z-10
            @click="toggleSourceVisible(false)"
          >
            <div class="border-t border-gray-3" />
            <div inline-flex justify-center items-center icon-btn text-sm my-2 w-full>
              <i><svg
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true"
                role="img" class="iconify iconify--ant-design" width="24" height="24"
                preserveAspectRatio="xMidYMid meet" viewBox="0 0 1024 1024"
              >
                <path
                  fill="currentColor"
                  d="M858.9 689L530.5 308.2c-9.4-10.9-27.5-10.9-37 0L165.1 689c-12.2 14.2-1.2 35 18.5 35h656.8c19.7 0 30.7-20.8 18.5-35z"
                />
              </svg></i>
              <span>隐藏源代码</span>
            </div>
          </div>
        </Transition>
      </div>
      <div v-else>
        <Example v-if="reloadFlag" />
      </div>
    </template>
    <template #fallback>
      <Loading />
    </template>
  </Suspense>
</template>
