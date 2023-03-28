<template>
  <div class="zw-form-item">
    <label class="zw-form-item__label" :style="labelStyle">{{  label }}</label>
    <div class="zw-form-item__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'zw-form-item',
  inject: ['form'],
  props: {
    label: {
      type: String,
      default: ''
    }
  },
  computed: {
    labelStyle () {
      return {
        width: this.form.labelWidth
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.zw-form-item {
  margin-bottom: 25px;
  .zw-form-item__label {
    text-align: right;
    vertical-align: middle;
    float: left;
    font-size: 14px;
    color: #606266;
    line-height: 40px;
    padding: 0 12px 0 0;
    box-sizing: border-box;
  }
  .zw-form-item__content {
    line-height: 40px;
    position: relative;
    font-size: 14px;
    overflow: hidden;
  }
}
</style>
