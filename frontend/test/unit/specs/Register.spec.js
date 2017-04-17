import Vue from 'vue'
import VueResource from 'vue-resource'
import BootstrapVue from 'bootstrap-vue'
import store from './../../../state/index'
import Register from '@/components/Register'

Vue.use(BootstrapVue)
Vue.use(VueResource)

describe('Register', () => {
  it('should accept inputs', done => {
    const Constructor = Vue.extend(Register)
    const vm = new Constructor({
      store,
      components: {
        Register
      }
    }).$mount()

    let name = 'Hans'
    let password = '123'

    vm.name = name
    vm.password = password

    Vue.nextTick()
      .then(() => {
        expect(vm.$el.getElementsByTagName('input')[0].value).to.equal(name)
        expect(vm.$el.getElementsByTagName('input')[1].value).to.equal(password)
      })
      .catch(done())
  })
})
