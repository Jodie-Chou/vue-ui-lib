<template>
  <form>
    <slot></slot>
  </form>
</template>

<script>
export default {
  name: 'zw-form',
  props: {
    labelWidth: {
      type: String,
      default: '80px'
    },
    model: {
      type: Object,
      required: true
    }
  },
  provide () {
    return {
      form: this
    }
  }
}
</script>

<style>

</style>
