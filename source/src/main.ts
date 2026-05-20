import App from '@/App.vue'
import i18n from '@/i18n'
import router from '@/router'
import { createApp } from 'vue'
import { createVuetify } from 'vuetify'
import { md2 } from 'vuetify/blueprints'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'
import 'vuetify/styles'

const vuetify = createVuetify({
  components,
  directives,
  defaults: { global: { FontFace: 'Sofia Sans' } },
  icons: { defaultSet: 'mdi', aliases, sets: { mdi } },
  blueprint: md2,
})

const app = createApp(App)

app.use(i18n)
app.use(router)
app.use(vuetify)

app.mount('#app')
