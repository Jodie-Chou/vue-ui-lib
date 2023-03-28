<template>
  <div class="zw-checkbox-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'zw-checkbox-group',
  props: {
    value: null
  },
  provide () {
    return {
      checkboxGroup: this
    }
  }
}
</script>

<style>

</style>
