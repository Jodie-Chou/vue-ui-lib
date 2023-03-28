<template>
  <label class="zw-radio" :class="{'is-checked': model === label}">
    <span class="zw-radio__input">
      <span class="zw-radio__inner"> </span>
      <input class="zw-radio__original" type="radio" :value="label" :name="name" v-model="model">
    </span>
    <span class="zw-radio__label">
      <slot></slot>
      <!-- 如果没有传内容，我们就把label当成内容 -->
      <template v-if="!$slots.default">{{ label }}</template>
    </span>
  </label>
</template>

<script>
export default {
  name: 'zw-radio',
  props: {
    label: {
      type: [String, Number, Boolean],
      default: ''
    },
    value: {
      type: [String, Number, Boolean],
      default: ''
    },
    name: {
      type: String,
      default: ''
    }
  },
  inject: {
    radioGroup: {
      default: ''
    }
  },
  computed: {
    model: {
      set (value) {
        !this.hadRadioGroup ? this.$emit('input', value) : this.radioGroup.$emit('input', value)
      },
      get () {
        if (this.hadRadioGroup) {
          return this.radioGroup.value
        }
        return this.value
      }
    },
    hadRadioGroup () {
      return !!this.radioGroup
    }
  }
}
</script>

<style lang="scss">
.zw-radio {
  color: #606266;
  font-weight: 500;
  line-height: 1;
  position: relative;
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;
  outline: none;
  font-size: 14px;
  margin-right: 30px;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;

  .zw-radio__input {
    white-space: nowrap;
    cursor: pointer;
    outline: none;
    display: inline-block;
    line-height: 1;
    position: relative;
    vertical-align: middle;

    .zw-radio__inner {
      border: 1px solid #dcdfe6;
      border-radius: 100%;
      width: 14px;
      height: 14px;
      background-color: #fff;
      position: relative;
      cursor: pointer;
      display: inline-block;
      box-sizing: border-box;

      &:after {
        width: 4px;
        height: 4px;
        border-radius: 100%;
        background-color: #fff;
        content: "";
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%) scale(0);
        transition: transform .15s ease-in;
      }
    }

    .zw-radio__original {
      opacity: 0;
      outline: none;
      position: absolute;
      z-index: -1;
      top: 0;
      left: 0px;
      right: 0;
      bottom: 0;
      margin: 0;
    }
  }

  .zw-radio__label {
    font-size: 14px;
    padding-left: 10px;
  }
}
.zw-radio.is-checked {
  .zw-radio__input {
    .zw-radio__inner {
      border-color: #409eff;
      background: #409eff;
      &:after {
        transform: translate(-50%,-50%) scale(1);
      }
    }
  }
  .zw-radio__label {
    color: #409eff;
  }
}
</style>
