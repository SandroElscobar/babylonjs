import {MeshBuilder, StandardMaterial, Texture, Tools, Vector3, Vector4} from "@babylonjs/core";
const createBox = (width) => {
    const boxMat = new StandardMaterial("boxMat")
    if (width === 2) {
        boxMat.diffuseTexture = new Texture("https://assets.babylonjs.com/environments/semihouse.png")
    }
    else {
        boxMat.diffuseTexture = new Texture("https://assets.babylonjs.com/environments/cubehouse.png");
    }
    const faceUV = []

    if (width === 2) {
        faceUV[0] = new Vector4(0.6, 0.0, 1.0, 1.0); //rear face
        faceUV[1] = new Vector4(0.0, 0.0, 0.4, 1.0); //front face
        faceUV[2] = new Vector4(0.4, 0, 0.6, 1.0); //right side
        faceUV[3] = new Vector4(0.4, 0, 0.6, 1.0); //left side
    } else {
        faceUV[0] = new Vector4(0.5, 0.0, 0.75, 1.0); //rear face
        faceUV[1] = new Vector4(0.0, 0.0, 0.25, 1.0); //front face
        faceUV[2] = new Vector4(0.25, 0, 0.5, 1.0); //right side
        faceUV[3] = new Vector4(0.75, 0, 1.0, 1.0); //left side
    }


    const box = new MeshBuilder.CreateBox("box", {width: width, faceUV: faceUV, wrap: true})
    box.position.y = 0.5
    box.material = boxMat

    return box
}

export default createBox