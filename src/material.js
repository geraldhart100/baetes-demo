import * as R from 'ramda'

import {
  MeshBasicMaterial,
  MeshStandardMaterial
} from 'three'

import { load as loadTexture } from './texture'

const MATERIALS = {
  basic    : MeshBasicMaterial,
  standard : MeshStandardMaterial
}


/**
 * Helpers
 */

const setupTextures = opts => {
  const TEXTURE_PROPS = {
    'alphaMap'     : true,
    'aoMap'        : true,
    'bumpMap'      : true,
    'metalnessMap' : true,
    'map'          : true,
    'normalMap'    : true,
    'roughnessMap' : true
  }

  const parse = (val, key) =>
    TEXTURE_PROPS[key]
      ? loadTexture(val)
      : val

  return R.mapObjIndexed(parse, opts)
}

const parseOptions = R.curry(
  setupTextures
)

/**
 * Methods
 */

/**
 * Apply material to mesh
 *
 * @param {string} type
 * @param {Object} opts
 * @param {THREE.Mesh} mesh
 *
 * @returns {Mesh}
 */

function apply (type, opts, mesh) {
  const Material = MATERIALS[type]

  const options = parseOptions(opts)

  mesh.material = new Material(options)

  return mesh
}

/**
 * Expose
 */

const applyCurried = R.curryN(3, apply)

export { applyCurried as apply }
