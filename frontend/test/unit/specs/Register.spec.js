import Vue from 'vue'
import Vuex from 'vuex'
import { mount } from 'avoriaz'
import sinon from 'sinon'
import VueResource from 'vue-resource'
import BootstrapVue from 'bootstrap-vue'
import store from './../../../state/index'
import Register from '@/components/Register'

Vue.use(BootstrapVue)
Vue.use(VueResource)

describe('Register', () => {
  it('should accept inputs', () => {
    const wrapper = mount(Register, {store})

    let name = 'Hans'
    let password = '123'

    const nameInput = wrapper.find('input')[0]
    const passwordInput = wrapper.find('input')[1]

    nameInput.element.value = name
    passwordInput.element.value = password

    nameInput.simulate('input')
    passwordInput.simulate('input')

    expect(wrapper.vm.$store.state.user.name).to.equal(name)
    expect(wrapper.vm.$store.state.user.password).to.equal(password)
  })

  it('should call vuex action if button is clicked', () => {
    const actions = {
      saveUser: sinon.stub()
    }
    const store = new Vuex.Store({
      state: {
        user: {
          name: 'Hans',
          password: '123'
        }
      },
      actions: actions
    })

    const wrapper = mount(Register, {store})
    const button = wrapper.find('button')[0]
    button.simulate('click')

    expect(actions.saveUser.calledOnce).to.equal(true)
  })
})
