import {
  AmbientLight,
  DirectionalLight,
} from 'three'

import {
  omit,
  curry
} from 'ramda'

const LIGHTS = {
  ambient     : AmbientLight,
  directional : DirectionalLight
}

function create (type, opts) {
  const Light = LIGHTS[type]

  const { color, intensity } = opts

  const props = omit(['color', 'intensity'], opts)

  const light = new Light(color, intensity)

  return Object.assign(light, props)
}


const add = curry(
  (type, opts, scene) => scene.add(create(type, opts))
)

export default create

export { add }
