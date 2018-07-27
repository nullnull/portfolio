<template>
  <div @touchmove.prevent="doNothing($event)">
    <div class="header">
    </div>
    <nuxt/>
  </div>
</template>

<script>
export default {
  methods: {
    doNothing() {},
  },
}
</script>
