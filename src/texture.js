import { TextureLoader } from 'three'

const loader = new TextureLoader()

const load = loader.load.bind(loader)

export { load }
