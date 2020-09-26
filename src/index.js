import syntax from 'babel-plugin-syntax-jsx'
import pseudoState from './visitors/pseudoState'

export default function ({ types: t }) {
  return {
    inherits: syntax,
    visitor: {
      CallExpression(path, state) {
        pseudoState(t)(path, state)
      },
      TaggedTemplateExpression(path, state) {
        pseudoState(t)(path, state)
      },
    },
  }
}
