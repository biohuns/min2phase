# `min2phase.js`

A JS package for Chen Shuang's Kociemba-based [min2phase](https://github.com/cs0x7f/min2phase) 3x3x3 solver.

## Usage

The default import uses automatically uses web workers if they are available ([all modern browsers](https://caniuse.com/#feat=webworkers)) and does computation on the thread if not (e.g. `node.js`).

    import {parse, algToString} from "alg"
    import {KPuzzle, Puzzles} from "kpuzzle"
    import min2phase from "min2phase"

    const puzzle = new KPuzzle(Puzzles["333"]);
    puzzle.applyAlg(parse("R U R' U R U2 R'"));

    // Optional: pre-initialize ahead of time.
    min2phase.initialize();

    const solution = await min2phase.solve(puzzle.state);
    console.log(algToString(solution));

## Use multiple web workers

    import {OffThreadMin2Phase} from "min2phase"

    const worker1 = new OffThreadMin2Phase();
    const worker2 = new OffThreadMin2Phase();

    Promise.all([worker1.initialize(), worker2.initialize()]);

    // Workers are both ready to solve.
