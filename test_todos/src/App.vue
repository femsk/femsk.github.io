<template>
  <div>
    <todos></todos>
    <button class="button" @click="add">add component</button>
    <div v-bind:is="listView"></div>
  </div>
</template>

<script>
import Todos from './components/Todos';

export default {
  data () {
    return {
      listView: false
    }
  },
  components: {
    Todos
  },
  methods: {
    add() {
      this.listView = Todos
    }
  }
}
</script>

<style lang='sass'>
  .button 
    display: inline-block
    border: none
    color: #fff
    text-decoration: none
    background-color: #4d4d7d
    padding: 10px 30px
    font-size: 12px
    font-weight: 600
    letter-spacing: 2px
    border-radius: 2px
    text-align: center
    position: relative
    outline: none
    transition: background-color .1s ease
    cursor: pointer
    &::after
      transition: background-color .2s ease
      position: absolute
      content: ''
      height: 4px
      bottom: 0
      width: 100%
      background-color: darken(#4d4d7d, 50%)
      opacity: .18
      border-bottom-left-radius: 2px
      border-bottom-right-radius: 2px
      left: 0
    &:focus, &:hover
      text-decoration: none
      color: #fff
    &:hover
      background-color: lighten(#4d4d7d, 5%)
      &::after
        opacity: .22
    &:active
      background-color: darken(#4d4d7d, 5%)
      &::after
        opacity: .32
</style>