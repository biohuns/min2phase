import { Sequence } from "alg";
import { Transformation } from "kpuzzle";
import { Min2PhaseSolver } from "./min2phase-solver";
import { initialize, randomCube, solve } from "./min2phase-wrapper";

export class OnThreadMin2Phase implements Min2PhaseSolver {
  async initialize(): Promise<void> {
    return initialize();
  }
  async solve(state: Transformation): Promise<Sequence> {
    return solve(state);
  }
  async randomCube(): Promise<Sequence> {
    return randomCube();
  }
}
