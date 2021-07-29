import Vue from 'vue'

export default (_, inject) => {
  const eventBus = new Vue()
  inject('eventBus', eventBus)
}
