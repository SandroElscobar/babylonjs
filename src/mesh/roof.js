import {MeshBuilder, StandardMaterial, Texture} from "@babylonjs/core";

const createRoof = (scene) => {
    const roofMat = new StandardMaterial("roofMat")
    roofMat.diffuseTexture = new Texture("https://assets.babylonjs.com/environments/roof.jpg", scene)
    const roof = MeshBuilder.CreateCylinder("roof", {diameter: 1.3, height: 1.2, tessellation: 3})
    roof.scaling.x = 0.75
    roof.rotation.z = Math.PI/2
    roof.position.y = 1.22
    roof.material = roofMat

    return roof
}

export default createRoof
