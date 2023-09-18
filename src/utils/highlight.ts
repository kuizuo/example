import * as shiki from 'shiki'
import { isDark } from '~/composables/dark'

shiki.setCDN('/node_modules/shiki/languages/vue.tmLanguage.json')

const highlighter = await shiki
  .getHighlighter({

  })

export function highlight(str: string, lang: string) {
  const code = highlighter.codeToHtml(str, { lang }, (isDark.value ? 'vitesse-light' : 'vitesse-dark'))
  return code
}
