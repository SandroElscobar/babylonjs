import {MeshBuilder, StandardMaterial, Texture} from "@babylonjs/core";

const createRoof = (width) => {
    const roofMat = new StandardMaterial("roofMat")
    roofMat.diffuseTexture = new Texture("https://assets.babylonjs.com/environments/roof.jpg")
    const roof = MeshBuilder.CreateCylinder("roof", {diameter: 1.3, height: 1.2, tessellation: 3})
    roof.material = roofMat
    roof.scaling.x = 0.75
    roof.scaling.y = width
    roof.rotation.z = Math.PI/2
    roof.position.y = 1.22

    return roof
}

export default createRoof
