import ColladaLoader from './loaders/collada'

const loader = new ColladaLoader()

function load (opts) {
  const { url } = opts

  const setup = mesh =>
    Object.assign(mesh, opts)

  const load = resolve => {
    const callback = ({ scene }) => {
      scene.traverse(obj => {
        if (obj.isMesh) resolve(obj)
      })
    }

    loader.load(url, callback)
  }

  return new Promise(load)
    .then(setup)
}

export { load }
