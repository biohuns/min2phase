import { parse, structureEquals } from "alg";
import { KPuzzle, Puzzles } from "kpuzzle";
import min2phase from "../src";

describe("solve()", () => {
  it("should solve simple case", async () => {
    const puzzle = new KPuzzle(Puzzles["333"]);
    puzzle.applyAlg(parse("R U R' U R U2 R'"));

    expect(
      structureEquals(parse("U' L F U2"), await min2phase.solve(puzzle.state))
    );
  });
});
