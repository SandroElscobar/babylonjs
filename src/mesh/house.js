import createBox from "./box";
import createRoof from "./roof";
import {Mesh} from "@babylonjs/core";

const createHouse = (width) => {
    const box = createBox(width)
    const roof = createRoof(width)
    return Mesh.MergeMeshes([box, roof], true, false, null, false, true)
}

export default createHouse