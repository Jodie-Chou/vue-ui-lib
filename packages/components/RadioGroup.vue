<template>
  <div class="radio-gropup">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'zw-radio-group',
  props: {
    value: null
  },
  provide () {
    return {
      radioGroup: this
    }
  }
}
</script>

<style>

</style>
