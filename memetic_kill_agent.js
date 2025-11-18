// MEMETIC_KILL_AGENT
// Aggressive Digital Black Metal - Information Warfare
// 190 BPM, B Locrian
// "Ideas as weapons. Patterns that rewrite your brain."

setcps(190/60/4)

// ==== WEAPON DEPLOYMENT SEQUENCE ====
// Intro (threat detected) → Verse 1 (engagement) → Breakdown (reload)
// → Verse 2 (suppression) → Bridge (overwhelming force) → Climax (target destroyed) → Termination

// ==== SECTION MASKS ====
// Using binary patterns to control weapon phases
const introMask = "<1 1 0 0 0 0 0>".slow(24)
const verse1Mask = "<0 0 1 0 0 0 0>".slow(24)
const breakdownMask = "<0 0 0 1 0 0 0>".slow(24)
const verse2Mask = "<0 0 0 0 1 0 0>".slow(24)
const bridgeMask = "<0 0 0 0 0 1 0>".slow(24)
const climaxMask = "<0 0 0 0 0 0 1>".slow(24)

// ==== INTRO: HARSH NOISE BURST (10 seconds / ~3 cycles) ====
const introNoise = noise()
  .gain(0.9)
  .crush(3)
  .distort(0.8)
  .mask(introMask)

const introKicks = s("bd:3*8")
  .gain(1.2)
  .speed(0.7)
  .crush(4)
  .distort(0.6)
  .mask(introMask)

// ==== VERSE 1: THREE-LAYER TREMOLO ATTACK ====
// B Locrian scale: B C D E F G A
// Main riff in B Locrian
const tremoloMain = note("<\
  ~,\
  ~,\
  [b2 c3 d3 e3 f3 g3 f3 e3] [b2 c3 d3 e3 f3 g3 f3 e3],\
  ~,\
  [b2 c3 d3 e3 f3 g3 f3 e3] [b2 c3 d3 e3 f3 g3 f3 e3],\
  [b2 c3 d3 e3 f3 g3 f3 e3] [b2 c3 d3 e3 f3 g3 f3 e3],\
  [b2 c3 d3 e3 f3 g3 f3 e3] [b2 c3 d3 e3 f3 g3 f3 e3]\
>".slow(4))
  .sound("square")
  .lpf(3000)
  .crush(5)
  .gain(0.3)
  .fast(8)

// Harmony riff (minor third up = D)
const tremoloHarmony = note("<\
  ~,\
  ~,\
  [d3 e3 f3 g3 a3 bb3 a3 g3] [d3 e3 f3 g3 a3 bb3 a3 g3],\
  ~,\
  [d3 e3 f3 g3 a3 bb3 a3 g3] [d3 e3 f3 g3 a3 bb3 a3 g3],\
  [d3 e3 f3 g3 a3 bb3 a3 g3] [d3 e3 f3 g3 a3 bb3 a3 g3],\
  [d3 e3 f3 g3 a3 bb3 a3 g3] [d3 e3 f3 g3 a3 bb3 a3 g3]\
>".slow(4))
  .sound("square")
  .lpf(3500)
  .crush(5)
  .gain(0.25)
  .fast(8)

// Dissonant tritone layer
const tremoloDissonant = note("<\
  ~,\
  ~,\
  [f3 f3 b3 b3] [f3 f3 b3 b3],\
  ~,\
  [f3 f3 b3 b3] [f3 f3 b3 b3],\
  [f3 f3 b3 b3] [f3 f3 b3 b3],\
  [f3 f3 b3 b3] [f3 f3 b3 b3]\
>".slow(4))
  .sound("square")
  .lpf(4000)
  .crush(5)
  .gain(0.2)
  .fast(4)

// ==== MAXIMUM INTENSITY BLAST BEATS ====
const blastBeats = stack(
  // Kick - relentless
  s("bd:3*8")
    .gain(1.0)
    .speed(0.8)
    .crush(6)
    .mask("<0 0 1 0 1 0 1>".slow(24)),

  // Snare - classic blast
  s("[~ sd:2]*4")
    .gain(0.8)
    .crush(6)
    .mask("<0 0 1 0 1 0 1>".slow(24)),

  // Hi-hat - machine gun
  s("hh:8*16")
    .gain(0.4)
    .crush(7)
    .lpf(8000)
    .mask("<0 0 1 0 1 0 1>".slow(24))
)

// ==== BREAKDOWN: RELOAD (8 bars) ====
const breakdownHats = s("hh:8*16")
  .gain(0.35)
  .crush(6)
  .mask(breakdownMask)

const breakdownBass = note("<b0 f1>")
  .sound("square")
  .lpf(300)
  .gain(0.5)
  .crush(4)
  .slow(2)
  .mask(breakdownMask)

// ==== VERSE 2: PALM-MUTED CHUGGING + SIREN ====
// Evolved riff with rhythmic variation
const chugRiff = note("<\
  ~,\
  ~,\
  ~,\
  ~,\
  [b1!4 ~!4 b1!4 ~!4] [b1!4 ~!4 c2!4 d2!4],\
  ~,\
  [b1!4 ~!4 b1!4 ~!4] [b1!4 ~!4 c2!4 d2!4]\
>".slow(4))
  .sound("square")
  .lpf(800)
  .crush(5)
  .gain(0.4)

// 8-bit alarm siren lead
const sirenLead = note("<\
  ~,\
  ~,\
  ~,\
  ~,\
  [b5 f6]*8,\
  ~,\
  [b5 f6]*8\
>".slow(4))
  .sound("square")
  .lpf(6000)
  .gain(0.3)
  .crush(3)

// ==== BRIDGE: STEREO CHAOS ====
// Left ear: standard blast
const blastLeft = stack(
  s("bd:3*4").gain(0.9).crush(6),
  s("[~ sd:2]*2").gain(0.7).crush(6),
  s("hh:8*8").gain(0.3).crush(7)
).pan(0).mask(bridgeMask)

// Right ear: bomb blast (snare every hit)
const blastRight = stack(
  s("bd:3*4").gain(0.9).crush(6),
  s("sd:2*8").gain(0.7).crush(6),
  s("hh:8*8").gain(0.3).crush(7)
).pan(1).mask(bridgeMask)

// Staccato guitar stabs
const staccatoStabs = note("<\
  ~,\
  ~,\
  ~,\
  ~,\
  ~,\
  [b3!1 ~!1]*8,\
  ~\
>".slow(4))
  .sound("square")
  .lpf(2000)
  .crush(5)
  .gain(0.35)

// ==== CLIMAX: LOCKED GROOVE ====
// Switch to driving 16th note kicks
const climaxKicks = s("bd:3*16")
  .gain(1.1)
  .speed(0.8)
  .crush(6)
  .mask(climaxMask)

// Snare on 2 and 4
const climaxSnare = s("~ sd:2 ~ sd:2")
  .gain(0.9)
  .crush(6)
  .mask(climaxMask)

// Rhythmic headbang riff
const climaxRiff = note("<\
  ~,\
  ~,\
  ~,\
  ~,\
  ~,\
  ~,\
  [b2!2 ~!2 c3!2 d3!2] [e3!2 f3!2 b2!4]\
>".slow(4))
  .sound("square")
  .lpf(2500)
  .crush(5)
  .gain(0.4)

// Stack all previous melodic ideas (information overload)
const overloadLayer1 = note("b5 f6 b5 f6")
  .sound("square")
  .lpf(7000)
  .gain(0.2)
  .crush(3)
  .mask(climaxMask)

const overloadLayer2 = note("[b2 c3 d3 e3]")
  .sound("square")
  .lpf(3000)
  .gain(0.25)
  .crush(5)
  .fast(4)
  .mask(climaxMask)

// ==== MASTER WEAPON DEPLOYMENT ====
stack(
  // INTRO: Threat detected
  introNoise,
  introKicks,

  // VERSE 1: Engagement
  tremoloMain,
  tremoloHarmony,
  tremoloDissonant,
  blastBeats,

  // BREAKDOWN: Reload
  breakdownHats,
  breakdownBass,

  // VERSE 2: Suppression
  chugRiff,
  sirenLead,

  // BRIDGE: Overwhelming force
  blastLeft,
  blastRight,
  staccatoStabs,

  // CLIMAX: Target destroyed
  climaxKicks,
  climaxSnare,
  climaxRiff,
  overloadLayer1,
  overloadLayer2
).gain(0.85)
  .room(0.1)  // Minimal reverb - dry and hostile
  .clip(0.9)  // Hard limiting for aggression

// TERMINATION: Abrupt cut handled by section masks ending
