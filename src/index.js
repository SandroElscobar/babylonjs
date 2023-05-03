import {ArcRotateCamera, Engine, HemisphericLight, MeshBuilder, Scene, Vector3} from "@babylonjs/core";
import createGround from "./mesh/ground";
import createBox from "./mesh/box";
import createRoof from "./mesh/roof";

const canvas = document.getElementById("canvas")
const engine = new Engine(canvas, true)

const createScene = () => {
    const scene = new Scene(engine)

    const camera = new ArcRotateCamera("camera", -Math.PI/2, Math.PI/2.5, 15, new Vector3(0, 0, 0))
    camera.attachControl(canvas, true)
    const light = new HemisphericLight("light", new Vector3(1, 1, 0))
    const box = createBox(scene)
    const ground = createGround()
    const roof = createRoof(scene)


    return scene
}

const scene = createScene()
engine.runRenderLoop(() => scene.render())

window.addEventListener("resize", () => engine.resize())