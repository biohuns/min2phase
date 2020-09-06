import { Sequence } from "alg";
import { Transformation } from "kpuzzle";

export abstract class Min2PhaseSolver {
  initialize: () => Promise<void>;
  solve: (state: Transformation) => Promise<Sequence>;
  randomCube: () => Promise<Sequence>;
}
