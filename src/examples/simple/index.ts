import { run } from '../../core'
import { viewHandler } from '../../interfaces/view'
import { styleHandler } from '../../groups/style'
import { warn, error } from '../../utils/log' // DEV ONLY
import { mergeStates } from '../../utils/reattach' // DEV ONLY

let app = run({
  root: require('./app').default,
  groups: {
    style: styleHandler('app-style'),
  },
  interfaces: {
    view: viewHandler('#app'),
  },
  // DEV ONLY (you can handle it manually)
  warn,
  error,
})

// Hot reload - DEV ONLY
if (module.hot) {
  module.hot.accept('./app', () => {
    let m = require('./app').default
    app.moduleAPI.reattach(m, mergeStates)
  })
}
