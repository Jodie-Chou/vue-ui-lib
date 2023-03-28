<template>
  <div class="zw-input" :class="{
    'zw-input--suffix': hasSuffix
    }">
    <input class="zw-input__inner"
      :class="{'is-disabled': disabled}"
      :placeholder="placeholder"
      :disabled="disabled"
      :type="isShowPwdIcon ? (pwdVisible ? 'text' : type): type"
      :name="name"
      :value="value"
      @input="handleInput"
    />
    <span class="zw-input__suffix" v-if="hasSuffix">
      <i class="zw-input__icon zw-icon-circle-close"
      @click="handleClick"
      v-if="isShowClearIcon"></i>
      <i class="zw-input__icon zw-icon-view"
      :class="{'zw-icon-view-active': pwdVisible}"
      v-if="isShowPwdIcon"
      @click="handleShowPwdClick"
      ></i>
    </span>
  </div>
</template>

<script>
export default {
  name: 'zw-input',
  props: {
    placeholder: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      default: ''
    },
    value: {
      type: [String, Number],
      default: ''
    },
    isShowClearIcon: {
      type: Boolean,
      default: false
    },
    isShowPwdIcon: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      pwdVisible: false
    }
  },
  updated () {
    console.log(this.value)
  },
  methods: {
    handleInput (e) {
      this.$emit('input', e.target.value)
    },
    handleClick () {
      this.$emit('input', '')
    },
    handleShowPwdClick () {
      this.pwdVisible = !this.pwdVisible
    }
  },
  computed: {
    hasSuffix () {
      return ((this.isShowClearIcon && this.value) || this.isShowPwdIcon)
    }
  }
}
</script>

<style lang="scss" scoped>
.zw-input {
  width: 100%;
  position: relative;
  font-size: 14px;
  display: inline-block;
  .zw-input__inner {
    -webkit-appearance: none;
    background-color: #fff;
    background-image: none;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 40px;
    line-height: 40px;
    outline: none;
    padding: 0 15px;
    transition: border-color .2s cubic-bezier(.645,.045,.355,1);
    width: 100%;

    &:focus {
      outline: none;
      border-color: #409eff;
    }
    &.is-disabled {
      background-color: #f5f7fa;
      border-color: #e4e7ed;
      color: #c0c4cc;
      cursor: not-allowed;
    }
  }
}
.zw-input--suffix {
  .zw-input__inner {
    padding-right: 30px;
  }
  .zw-input__suffix {
    position: absolute;
    height: 100%;
    right: 10px;
    top: 0;
    line-height: 40px;
    text-align: center;
    color: #c0c4cc;
    transition: all .3s;
    z-index: 900;
    i {
      color: #c0c4cc;
      font-size: 14px;
      cursor: pointer;
      transition: color .2s cubic-bezier(.645,.045,.355,1);
      &.zw-icon-view-active {
        color: skyblue;
        font-weight: bold;
      }
    }
  }
}
</style>
