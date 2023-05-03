import {MeshBuilder, StandardMaterial, Texture, Tools, Vector3, Vector4} from "@babylonjs/core";

const faceUV = [];
faceUV[0] = new Vector4(0.5, 0.0, 0.75, 1.0); //rear face
faceUV[1] = new Vector4(0.0, 0.0, 0.25, 1.0); //front face
faceUV[2] = new Vector4(0.25, 0, 0.5, 1.0); //right side
faceUV[3] = new Vector4(0.75, 0, 1.0, 1.0); //left side

const createBox = (scene) => {
    const boxMat = new StandardMaterial("boxMat")
    boxMat.diffuseTexture = new Texture("https://doc.babylonjs.com/img/getstarted/cubehouse.png", scene)
    const box = new MeshBuilder.CreateBox("box", {faceUV: faceUV, wrap: true})
    box.position.y = 0.5
    box.material = boxMat

    return box
}

export default createBox