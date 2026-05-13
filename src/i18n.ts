import de from '@/locales/de.json'
import en from '@/locales/en.json'
import { createI18n } from 'vue-i18n'

const i18n = createI18n({
	legacy: false, // you must set `false`, to use Composition API
	locale: 'en',
	fallbackLocale: 'en',
	messages: { en, de }
})

export default i18n
