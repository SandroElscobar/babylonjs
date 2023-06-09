import {Color3, MeshBuilder, StandardMaterial} from "@babylonjs/core";


const createGround = () => {
    const groundMat =  new StandardMaterial("groundMat")
    groundMat.diffuseColor = new Color3(0, 1, 0)
    const ground = MeshBuilder.CreateGround("ground", {width: 15, height: 15})
    ground.material = groundMat

    return ground
}

export default createGround