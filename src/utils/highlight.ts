import * as shiki from 'shiki'
import { isDark } from '~/composables/dark'
shiki.setCDN('/node_modules/shiki/languages/vue.tmLanguage.json')

const highlighter = await shiki
  .getHighlighter({

  })

export const highlight = (str: string, lang: string) => {
  const code = highlighter.codeToHtml(str, { lang }, (isDark.value ? 'vitesse-light' : 'vitesse-dark'))
  console.log(isDark)
  return code
}
