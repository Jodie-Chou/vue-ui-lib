<template>
  <label class="zw-switch"
  :class="{'is-checked ': this.checked}"
  @click="handleSwitchClick">
    {{ this.checked ? activeText : inactiveText }}
    <span class="zw-switch__core" :style="this.checked?coreActiveColorStyle : coreInActiveColorStyle">
      <span class="zw-switch__button">
      </span>
    </span>
    <input type="checkbox" :checked="checked" ref="switchRef" class="zw-switch__input" @change="handleChange"/>
  </label>
</template>

<script>
export default {
  name: 'zw-switch',
  model: {
    prop: 'checked',
    event: 'change'
  },
  props: {
    'active-text': {
      type: String,
      default: ''
    },
    'inactive-text': {
      type: String,
      default: ''
    },
    checked: {
      type: Boolean,
      default: false
    },
    activeColor: {
      type: String,
      default: ''
    },
    inActiveColor: {
      type: String,
      default: ''
    }
    /*,
    value: {
    type: Boolean,
    default: false
    } */
  },
  methods: {
    handleSwitchClick (e) {
      if (e.target.tagName === 'INPUT') {
        this.$emit('change', this.$refs.switchRef.checked)
      }
    },
    handleChange (e) {
      console.log(e.target.checked)
      this.$emit('change', e.target.checked)
    }
  },
  computed: {
    coreActiveColorStyle () {
      return {
        borderColor: this.activeColor,
        backgroundColor: this.activeColor
      }
    },
    coreInActiveColorStyle () {
      return {
        borderColor: this.inActiveColor,
        backgroundColor: this.inActiveColor
      }
    }
  }
}
</script>

<style lang="scss">
.zw-switch {
  display: inline-flex;
  align-items: center;
  position: relative;
  font-size: 14px;
  line-height: 20px;
  height: 20px;
  vertical-align: middle;

  .zw-switch__core {
    margin: 0;
    display: inline-block;
    position: relative;
    width: 40px;
    height: 20px;
    border: 1px solid #dcdfe6;
    outline: none;
    border-radius: 10px;
    box-sizing: border-box;
    background: #dcdfe6;
    cursor: pointer;
    transition: border-color .3s, background-color .3s;
    vertical-align: middle;

    .zw-switch__button {
      position: absolute;
      top: 1px;
      left: 1px;
      border-radius: 100%;
      transition: all .3s;
      width: 16px;
      height: 16px;
      background-color: #fff;
    }
  }
  .zw-switch__input {
      display: none;
  }
  &.is-checked {
    .zw-switch__core {
    border-color: #409eff;
    background-color: #409eff;
    .zw-switch__button {
      transform: translateX(20px);
    }
  }
}
}
</style>
