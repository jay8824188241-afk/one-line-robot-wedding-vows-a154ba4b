// One-Line Robot Wedding Vows
// A tiny Node program (standard library only) that writes a single line of
// wedding vows for a robot couple to /output/entry.txt.
//
// The vow follows the classic wedding-vow shape — "in sickness and in
// health" — then swaps in the robot couple's own conditions (Wi-Fi versus
// airplane mode, sharing a charger), and lands the joke in the last few
// words, where the familiar "till death do us part" gets a robot ending.

import { mkdirSync, writeFileSync } from "node:fs";

const VOW =
  "I vow to love you in sickness and in health, in Wi-Fi and in airplane mode, to share my charger — until death, or a factory reset, do us part.";

const OUT_PATH = "/output/entry.txt";

mkdirSync("/output", { recursive: true });
writeFileSync(OUT_PATH, VOW + "\n", "utf8");

console.log(`Wrote ${VOW.length} characters to ${OUT_PATH}`);
