import Vue from 'vue'
import store from './../../../state/index'
import Register from '@/components/Register'

describe('Register.vue', () => {
  it('should post register data', (done) => {
    const Constructor = Vue.extend(Register)
    const vm = new Constructor({
      store,
      components: {
        Register
      }
    }).$mount()

    vm.name = 'Hans'

    Vue.nextTick()
      .then(() => {
        expect(vm.$el.textContent).to.equal('Hans')
      })
      .catch(done)
  })
})
