import { isStyled } from 'babel-plugin-styled-components/lib/utils/detectors'

export default (t) => (path, state) => {
  if (isStyled(t)(path.node.tag, state)) {
    path.node.quasi.quasis.forEach((i) => {
      i.value = {
        raw: i.value.raw.replace(`:hover`, `:hover,&.\\:hover`),
        cooked: i.value.cooked.replace(`:hover`, `:hover,&.\\:hover`),
      }
    })
  }
}
