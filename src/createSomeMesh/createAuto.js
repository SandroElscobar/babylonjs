import {Animation, MeshBuilder, StandardMaterial, Texture, Vector3, Vector4} from "@babylonjs/core";

const createAuto = (scene) => {
    const faceUV = []
    const wheelUV = []
    faceUV[0] = new Vector4(0, 0.5, 0.38, 1);
    faceUV[1] = new Vector4(0, 0, 1, 0.5);
    faceUV[2] = new Vector4(0.38, 1, 0, 0.5);

    const outline = [
        new Vector3(-0.3, 0, -0.1),
        new Vector3(0.2, 0, -0.1)
    ]

    for (let i; i < 20; i++) {
        outline.push(new Vector3(0.2 * Math.cos(i * Math.PI/40), 0, 0.2 * Math.sin(i * Math.PI/40) -0.1))
    }

    outline.push(new Vector3(0, 0, 0.1))
    outline.push(new Vector3(-0.3, 0, 0.1))

    const car = MeshBuilder.ExtrudePolygon("car", {shape: outline, depth: 0.2 , faceUV: faceUV, wrap: true},)
    car.position.y = 2
    const carMat = new StandardMaterial("carMat")
    carMat.diffuseTexture = new Texture("https://assets.babylonjs.com/environments/car.png")
    car.material = carMat

    const wheelMat = new StandardMaterial("wheelMat")
    wheelMat.diffuseTexture = new Texture("https://assets.babylonjs.com/environments/wheel.png")

    const animWheel = new Animation("wheelAnimation", "rotation.y", 30, Animation.ANIMATIONTYPE_FLOAT, Animation.ANIMATIONLOOPMODE_CYCLE)
    const wheelKeys = []
    wheelKeys.push({
        frame: 0,
        value: 0
    })

    wheelKeys.push({
        frame: 30,
        value: 2 * Math.PI
    })

    animWheel.setKeys(wheelKeys)

    const wheelRB = MeshBuilder.CreateCylinder("wheelRB", {diameter: 0.125, height: 0.05, faceUV: wheelUV})
    wheelRB.material = wheelMat
    wheelRB.parent = car
    car.rotation.x = -Math.PI/2
    wheelRB.position.z = -0.1
    wheelRB.position.x = -0.2
    wheelRB.position.y = 0.035
    wheelRB.animations = []
    wheelRB.animations.push(animWheel)

    const wheelRF = wheelRB.clone("wheelRF")
    wheelRF.position.x = 0.1
    const wheelLB = wheelRB.clone("wheelLB")
    wheelLB.position.y = - 0.2 - 0.035
    const wheelLF = wheelRF.clone("wheelLF")
    wheelLF.position.y = -0.2 - 0.035

    scene.beginAnimation(wheelRB, 0, 30, true)
    scene.beginAnimation(wheelRF, 0, 30, true)
    scene.beginAnimation(wheelLB, 0, 30, true)
    scene.beginAnimation(wheelLF, 0, 30, true)

    return car
}

export default createAuto