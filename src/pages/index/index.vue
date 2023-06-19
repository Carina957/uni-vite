<template>
  <view class="content">
    <image class="logo" src="/static/logo.png"></image>
    <view class="text-area">
      <text class="title">{{ title }}</text>
    </view>

    <h2>App/count</h2>
    <text>{{ count }}</text>
    <button @click="increment">UNIAPP</button>

    <h2>App/project</h2>
    <text>{{ project }}</text>
    <button @click="SET_PROJECT([1, 2, 3])">UNIAPP</button>

    <uni-calendar
      :insert="true"
      :lunar="true"
      :start-date="'2019-3-2'"
      :end-date="'2019-5-20'"
    />
  </view>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useStore } from 'vuex'

const title = ref('Uniapp')
const store = useStore()

const count = computed(() => store.getters.count)
const project = computed(() => store.getters.project)

const increment = () => store.commit('app/increment')
const SET_PROJECT = state => store.commit('project/SET_PROJECT', state)
</script>

<style lang="scss" scoped>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin-top: 200rpx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50rpx;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>
