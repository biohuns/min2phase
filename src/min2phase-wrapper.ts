import { parse, Sequence } from "alg";
import { Combine, Invert, Puzzles, Transformation } from "kpuzzle";
import {
  initialize,
  Min2PhaseCube,
  randomCube as min2PhaseRandomCube,
  solve as min2phaseSolve
} from "./min2phase.js";

export { initialize };

const def = Puzzles["333"];
function reidToMin2Phase(state: Transformation): Min2PhaseCube {
  // Note: this is its own inverse.
  const conjugate = {
    EDGE: {
      permutation: [1, 0, 3, 2, 5, 4, 7, 6, 8, 9, 11, 10],
      orientation: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    },
    CORNER: {
      permutation: [0, 3, 2, 1, 4, 5, 6, 7],
      orientation: [0, 0, 0, 0, 0, 0, 0, 0]
    },
    CENTER: { permutation: [0, 1, 2, 3, 4, 5], orientation: [0, 0, 0, 0, 0, 0] }
  };
  const pseudo = Combine(
    def,
    Combine(def, conjugate, Invert(def, state)),
    conjugate
  );
  return {
    cp: pseudo["CORNER"].permutation,
    co: pseudo["CORNER"].orientation,
    ep: pseudo["EDGE"].permutation,
    eo: pseudo["EDGE"].orientation
  };
}

export function solve(state: Transformation): Sequence {
  return parse(min2phaseSolve(reidToMin2Phase(state)));
}

export function randomCube(): Sequence {
  return parse(min2phaseSolve(min2PhaseRandomCube()));
}
