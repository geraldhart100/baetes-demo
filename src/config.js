const mesh = {
  url           : 'assets/models/model.dae',
  castShadow    : true,
  receiveShadow : true
}

const material = {
  map          : 'assets/textures/DefaultMaterial_albedo.jpg',
  normalMap    : 'assets/textures/DefaultMaterial_normal.png',
  roughnessMap : 'assets/textures/DefaultMaterial_roughness.jpg',
  metalnessMap : 'assets/textures/DefaultMaterial_metallic.jpg',
}

const light = {
  ambient: {
    intensity: 0.65
  },
  directional: {
    intensity: 0.35
  }
}

export { mesh, material, light }
