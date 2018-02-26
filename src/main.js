import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
} from 'three'

import OrbitControls from './controls/orbit'

import * as config from './config'

import { load as loadMesh } from './mesh'
import { apply as applyMaterial } from './material'
import { add as addLight } from './light'


const WIDTH = window.innerWidth
const HEIGHT = window.innerHeight


const scene = new Scene()


const camera = new PerspectiveCamera(75, WIDTH / HEIGHT)
camera.position.set(2, 2, 2)


const control = new OrbitControls(camera)
control.autoRotate = true


const renderer = new WebGLRenderer({
  alpha: true,
  antialias: true
})
renderer.setSize( WIDTH, HEIGHT )


Promise
  .resolve(scene)
  .then(addLight('ambient', config.light.ambient))
  .then(addLight('directional', config.light.directional))
  .then(scene => {
    return loadMesh(config.mesh)
      .then(applyMaterial('standard', config.material))
      .then(mesh => scene.add(mesh))
  })
  .then(animate)


function animate () {
  requestAnimationFrame(animate)

  control.update()
  renderer.render(scene, camera)
}


document.body.appendChild(renderer.domElement)
