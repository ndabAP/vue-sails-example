<template>
  <b-modal
    no-fade
    :no-close-on-backdrop="true"
    :no-close-on-esc="true"
    :hide-header-close="true"
    :ok-only="true"
    id="help"
    :title="t('help.desktop.modal.title')"
    size="lg">
    <div class="card mb-2">
      <div class="card-body">
        <div v-for="(message, index) in messages" :key="index">
          <p v-if="message.message.assistant" class="mb-0"><b class="mr-2">{{ message.message.assistant.name}}</b>
            {{ message.message.assistant.message }}</p>
          <p v-if="message.message.assistant" class="text-muted">
            <small>{{ message.time}}</small>
          </p>
          <p v-if="message.message.user" class="text-right mb-0">{{ message.message.user.message }} <b
            class="ml-2">You</b></p>
          <p class="text-right text-muted" v-if="message.message.user">
            <small>{{ message.time }}</small>
          </p>
        </div>
      </div>
    </div>
    <b-form-input type="text" @keyup.enter.native="postMessage" v-model="message"></b-form-input>
    <template slot="modal-footer">
      <b-button @click="setIsVisibleHelp(false)" size="sm" variant="secondary">
        {{ t('help.desktop.button.first')}}
      </b-button>
    </template>
  </b-modal>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  props: ['io'],

  data: () => ({
    assistant: '',
    message: '',

    messages: [{
      message: {
        assistant: {
          name: 'System',
          message: 'Hey, how can we help you?'
        }
      },

      time: new Date().toString()
    }]
  }),

  mounted () {
    this.$root.$emit('bv::show::modal', 'help')
    this.$emit('helpMounted')
  },

  created () {
    this.setRandomAssistantName()
  },

  computed: {
    isHelpVisible: {
      get () {
        return this.$store.state.isHelpVisible
      },

      set (isHelpVisible) {
        this.store.commit('SET_IS_HELP_VISIBLE', isHelpVisible)
      }
    }
  },

  updated () {
    let card = this.$el.querySelector('.card')
    card.scrollTop = card.scrollHeight
  },

  methods: {
    postMessage () {
      this.messages.push({
        message: {
          user: {
            message: this.message
          }
        },

        time: new Date().toString()
      })

      this.io.socket.post('/api/help', {message: this.message}, message => {
        this.messages.push({
          message: {
            assistant: {
              name: this.assistant,
              message: message.answer
            }
          },

          time: new Date().toString()
        })
      })

      this.$set(this, 'message', '')
    },

    setRandomAssistantName () {
      const assistants = [
        'Irvin Case',
        'Juliette Cooper',
        'Sheldon James'
      ]

      const assistant = assistants[Math.floor(Math.random() * assistants.length)]
      this.$set(this, 'assistant', assistant)
    },

    ...mapMutations({
      setIsVisibleHelp: 'SET_IS_VISIBLE_HELP'
    })
  }
}
</script>

<style scoped>
  .card {
    max-height: 350px;
    min-height: 200px;
    overflow-y: scroll;
  }
</style>
