import {ArcRotateCamera, Engine, HemisphericLight, Mesh, MeshBuilder, Scene, Vector3} from "@babylonjs/core";
import createCity from "./createSomeMesh/createCity";
import createAuto from "./createSomeMesh/createAuto";

const canvas = document.getElementById("canvas")
const engine = new Engine(canvas, true)

const createScene = () => {
    const scene = new Scene(engine)

    const camera = new ArcRotateCamera("camera", -Math.PI/2, Math.PI/2.5, 25, new Vector3(0, 0, 0))
    camera.attachControl(canvas, true)
    const light = new HemisphericLight("light", new Vector3(1, 1, 0))
    createCity()
    const car = createAuto(scene)
    return scene
}

const scene = createScene()
engine.runRenderLoop(() => scene.render())

window.addEventListener("resize", () => engine.resize())