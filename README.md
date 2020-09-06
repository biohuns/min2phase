# `@biohuns/min2phase.js`

![CI](https://github.com/biohuns/min2phase.js/workflows/CI/badge.svg)

This JS package is fork from [cubing/min2phase.js](https://github.com/cubing/min2phase.js). For Chen Shuang's Kociemba-based [cs0x7f/min2phase](https://github.com/cs0x7f/min2phase) 3x3x3 solver.

## Usage

The default import uses automatically uses web workers if they are available ([all modern browsers](https://caniuse.com/#feat=webworkers)) and does computation on the thread if not (e.g. `node.js`).

```js
import { defaultOffThread as min2phase } from "@biohuns/min2phase";
import { algToString } from "alg";

// Optional: pre-initialize ahead of time.
min2phase.initialize();

const solution = await min2phase.randomCube();
console.log(algToString(solution));
```

## Use multiple web workers

```js
import { OffThreadMin2Phase } from "@biohuns/min2phase";

const worker1 = new OffThreadMin2Phase();
const worker2 = new OffThreadMin2Phase();

Promise.all([worker1.initialize(), worker2.initialize()]);

// Workers are both ready to solve.
```
