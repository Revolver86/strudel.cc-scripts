// MEMETIC_KILL_AGENT - Simplified Version
// Aggressive Digital Black Metal: Information Warfare
// 190 BPM, B Locrian

setcps(190/60/4)

// This version has all weapon systems as separate modules.
// Uncomment sections to activate different phases of the attack.

// ==== INTRO: HARSH NOISE BURST ====
const harsh_noise = noise()
  .gain(0.9)
  .crush(3)
  .distort(0.8)

const distorted_kicks = s("bd:3*8")
  .gain(1.2)
  .speed(0.7)
  .crush(4)
  .distort(0.6)

// ==== BLAST BEATS: MAXIMUM INTENSITY ====
const blast_kicks = s("bd:3*8")
  .gain(1.0)
  .speed(0.8)
  .crush(6)

const blast_snare = s("[~ sd:2]*4")
  .gain(0.8)
  .crush(6)

const blast_hats = s("hh:8*16")
  .gain(0.4)
  .crush(7)
  .lpf(8000)

// ==== TREMOLO ATTACK: THREE LAYERS ====
// Layer 1: Main riff (B Locrian)
const tremolo_main = note("b2 c3 d3 e3 f3 g3 f3 e3")
  .sound("square")
  .lpf(3000)
  .crush(5)
  .gain(0.3)
  .fast(8)

// Layer 2: Harmony (minor third up)
const tremolo_harmony = note("d3 e3 f3 g3 a3 bb3 a3 g3")
  .sound("square")
  .lpf(3500)
  .crush(5)
  .gain(0.25)
  .fast(8)

// Layer 3: Dissonant tritones
const tremolo_dissonant = note("[f3 f3 b3 b3]")
  .sound("square")
  .lpf(4000)
  .crush(5)
  .gain(0.2)
  .fast(4)

// ==== BREAKDOWN: RELOAD ====
const reload_hats = s("hh:8*16")
  .gain(0.35)
  .crush(6)

const reload_bass = note("<b0 f1>")
  .sound("square")
  .lpf(300)
  .gain(0.5)
  .crush(4)
  .slow(2)

// ==== PALM-MUTED CHUGGING ====
const chug_riff = note("[b1!4 ~!4 b1!4 ~!4] [b1!4 ~!4 c2!4 d2!4]")
  .sound("square")
  .lpf(800)
  .crush(5)
  .gain(0.4)

// ==== ALARM SIREN (8-bit lead) ====
const siren = note("[b5 f6]*8")
  .sound("square")
  .lpf(6000)
  .gain(0.3)
  .crush(3)

// ==== STEREO CHAOS (use .pan() for stereo) ====
const chaos_left = stack(
  s("bd:3*4").gain(0.9).crush(6),
  s("[~ sd:2]*2").gain(0.7).crush(6)
).pan(0)

const chaos_right = stack(
  s("bd:3*4").gain(0.9).crush(6),
  s("sd:2*8").gain(0.7).crush(6)
).pan(1)

// ==== STACCATO STABS ====
const stabs = note("[b3!1 ~!1]*8")
  .sound("square")
  .lpf(2000)
  .crush(5)
  .gain(0.35)

// ==== LOCKED GROOVE CLIMAX ====
const groove_kicks = s("bd:3*16")
  .gain(1.1)
  .speed(0.8)
  .crush(6)

const groove_snare = s("~ sd:2 ~ sd:2")
  .gain(0.9)
  .crush(6)

const groove_riff = note("[b2!2 ~!2 c3!2 d3!2] [e3!2 f3!2 b2!4]")
  .sound("square")
  .lpf(2500)
  .crush(5)
  .gain(0.4)

// ==== BUILD YOUR ATTACK SEQUENCE ====
// Uncomment layers to activate weapon systems

stack(
  // INTRO - Hostile intent
  // harsh_noise,
  // distorted_kicks,

  // VERSE 1 - Full engagement
  blast_kicks,
  blast_snare,
  blast_hats,
  tremolo_main,
  tremolo_harmony,
  tremolo_dissonant,

  // BREAKDOWN - Reload
  // reload_hats,
  // reload_bass,

  // VERSE 2 - Evolved attack
  // chug_riff,
  // siren,

  // BRIDGE - Stereo chaos
  // chaos_left,
  // chaos_right,
  // stabs,

  // CLIMAX - Locked groove
  // groove_kicks,
  // groove_snare,
  // groove_riff
).gain(0.85)
  .room(0.1)
  .clip(0.9)
