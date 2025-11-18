// BLOODMOON_RISING
// Raw Driving Black Metal - Darkthrone Style
// 175 BPM → 185 BPM (speeds up at end), D Minor
// "Pure black metal energy. Riffs you can headbang to."

setcps(175/60/4)

// ==== SONG STRUCTURE ====
// Intro (20s) → Main Riff → Verse 1 → Pre-Chorus → Chorus →
// Verse 2 → Breakdown → Final Chorus → Outro (speed up!)

// ==== SECTION MASKS ====
const introMask = "<1 1 1 0 0 0 0 0 0 0>".slow(28)
const mainRiffMask = "<0 0 0 1 0 0 0 0 0 0>".slow(28)
const verse1Mask = "<0 0 0 0 1 0 0 0 0 0>".slow(28)
const preChorusMask = "<0 0 0 0 0 1 0 0 0 0>".slow(28)
const chorusMask = "<0 0 0 0 0 0 1 0 0 0>".slow(28)
const verse2Mask = "<0 0 0 0 0 0 0 1 0 0>".slow(28)
const breakdownMask = "<0 0 0 0 0 0 0 0 1 0>".slow(28)
const finalChorusMask = "<0 0 0 0 0 0 0 0 0 1>".slow(28)

// ==== INTRO: OMINOUS DRONE + THUNDER (20 seconds) ====
const introDrone = note("d1")
  .sound("sawtooth")
  .lpf(200)
  .gain(0.5)
  .room(0.8)
  .size(0.9)
  .mask(introMask)

const introThunder = s("bd:0*2")
  .gain(perlin.range(0.3, 0.7).slow(4))
  .speed(0.4)
  .room(0.9)
  .delay(0.5)
  .mask(introMask)

// ==== MAIN RIFF: MEMORABLE TREMOLO (D minor - F - C - G minor) ====
// This riff should be INSTANTLY RECOGNIZABLE
const mainTremoloRiff = note("<\
  ~,\
  ~,\
  ~,\
  [d3 f3 a3 f3] [f3 a3 c4 a3] [c3 e3 g3 e3] [g3 bb3 d4 bb3],\
  [d3 f3 a3 f3] [f3 a3 c4 a3] [c3 e3 g3 e3] [g3 bb3 d4 bb3],\
  ~,\
  ~,\
  [d3 f3 a3 f3] [f3 a3 c4 a3] [c3 e3 g3 e3] [g3 bb3 d4 bb3],\
  ~,\
  ~\
>".slow(4))
  .sound("sawtooth")
  .lpf(1800)
  .gain(0.35)
  .crush(5)
  .room(0.4)
  .fast(8)  // Tremolo picking speed

// ==== TIGHT FAST BLAST BEATS ====
const blastBeats = stack(
  s("bd*8").gain(1.0).crush(6).speed(0.8),
  s("~ sd ~ sd ~ sd ~ sd").gain(0.8).crush(6),
  s("hh*16").gain(0.35).lpf(7000).crush(7)
).mask("<0 0 0 1 1 0 1 1 0 1>".slow(28))

// ==== VERSE: HIGHER OCTAVE MELODY (Call-Response) ====
const verseHighMelody = note("<\
  ~,\
  ~,\
  ~,\
  ~,\
  [d5 ~ ~ ~] [f5 ~ ~ ~] [c5 ~ ~ ~] [g5 ~ ~ ~],\
  ~,\
  ~,\
  [d5 ~ ~ ~] [f5 ~ ~ ~] [c5 ~ ~ ~] [g5 ~ ~ ~],\
  ~,\
  ~\
>".slow(4))
  .sound("sine")
  .lpf(4000)
  .gain(0.25)
  .room(0.6)
  .delay(0.3)

// Bass following roots
const bass = note("<d1 f1 c1 g1>")
  .sound("sawtooth")
  .lpf(350)
  .gain(0.45)
  .slow(4)
  .mask("<0 0 0 1 1 1 1 1 1 1>".slow(28))

// ==== PRE-CHORUS: POWER CHORD DESCENT (Building Tension) ====
// D5 - C5 - Bb5 - A5 (no tremolo, just power)
const preChorusPowerChords = note("<\
  ~,\
  ~,\
  ~,\
  ~,\
  ~,\
  [d4!4 ~!4] [c4!4 ~!4] [bb3!4 ~!4] [a3!4 ~!4],\
  ~,\
  ~,\
  ~,\
  ~\
>".slow(8))
  .sound("sawtooth")
  .lpf(1000)
  .gain(0.4)
  .crush(5)
  .room(0.3)

// Half-time feel drums for pre-chorus
const preChorusDrums = stack(
  s("bd*8").gain(1.0).crush(6),
  s("~ ~ sd ~").gain(0.8).crush(6),
  s("hh*8").gain(0.3).lpf(6000)
).mask(preChorusMask)

// ==== CHORUS: CATCHY ASCENDING RIFF + LEAD MELODY ====
// D - E - F - G ascending pattern (ANTHEMIC!)
const chorusAscendingRiff = note("<\
  ~,\
  ~,\
  ~,\
  ~,\
  ~,\
  ~,\
  [d3 e3 f3 g3] [d3 e3 f3 g3] [d3 e3 f3 g3] [d3 e3 f3 g3],\
  ~,\
  ~,\
  [d3 e3 f3 g3] [d3 e3 f3 g3] [d3 e3 f3 g3] [d3 e3 f3 g3]\
>".slow(4))
  .sound("sawtooth")
  .lpf(2000)
  .gain(0.35)
  .crush(5)
  .room(0.5)
  .fast(8)

// Memorable lead melody over chorus (THE HOOK)
const chorusLeadMelody = note("<\
  ~,\
  ~,\
  ~,\
  ~,\
  ~,\
  ~,\
  [d5 e5 f5 g5 a5 g5 f5 d5],\
  ~,\
  ~,\
  [d5 e5 f5 g5 a5 g5 f5 d5]\
>".slow(8))
  .sound("sine")
  .lpf(5000)
  .gain(0.3)
  .room(0.7)
  .delay(0.4)
  .delaytime(0.375)

// ==== VERSE 2: MAIN RIFF + ATMOSPHERIC PAD ====
const atmosphericPad = note("<d3 f3 c3 g3>")
  .sound("sine")
  .lpf(1000)
  .gain(0.15)
  .room(0.95)
  .size(0.98)
  .slow(4)
  .mask(verse2Mask)

// ==== BREAKDOWN: GALLOPING BASS + SNARE ONLY ====
// No kick! Creates tension
const breakdownGallop = note("<d1 d1 d1>")
  .sound("sawtooth")
  .lpf(400)
  .gain(0.5)
  .fast(3)
  .mask(breakdownMask)

const breakdownSnare = s("~ sd ~ sd")
  .gain(0.8)
  .crush(6)
  .mask(breakdownMask)

// Dark descending guitar line
const breakdownGuitar = note("<d4 c4 bb3 a3 g3 f3 e3 d3>")
  .sound("sawtooth")
  .lpf(1500)
  .gain(0.3)
  .crush(5)
  .room(0.5)
  .slow(2)
  .mask(breakdownMask)

// ==== FINAL CHORUS: EVERYTHING TOGETHER (12 bars max energy) ====
const finalChorusDrums = stack(
  s("bd*8").gain(1.1).crush(6).speed(0.8),
  s("~ sd ~ sd ~ sd ~ sd").gain(0.9).crush(6),
  s("hh*16").gain(0.4).lpf(7000).crush(7)
).mask(finalChorusMask)

const finalChorusRiff = note("[d3 e3 f3 g3] [d3 e3 f3 g3] [d3 e3 f3 g3] [d3 e3 f3 g3]")
  .sound("sawtooth")
  .lpf(2000)
  .gain(0.35)
  .crush(5)
  .room(0.5)
  .fast(8)
  .mask(finalChorusMask)

const finalChorusLead = note("[d5 e5 f5 g5 a5 g5 f5 d5]")
  .sound("sine")
  .lpf(5000)
  .gain(0.3)
  .room(0.7)
  .delay(0.4)
  .mask(finalChorusMask)

const finalChorusPad = note("<d3 e3 f3 g3>")
  .sound("sine")
  .lpf(1000)
  .gain(0.15)
  .room(0.95)
  .slow(4)
  .mask(finalChorusMask)

// ==== MASTER MIX ====
stack(
  // INTRO
  introDrone,
  introThunder,

  // MAIN RIFF & VERSES
  mainTremoloRiff,
  blastBeats,
  verseHighMelody,
  bass,

  // PRE-CHORUS
  preChorusPowerChords,
  preChorusDrums,

  // CHORUS
  chorusAscendingRiff,
  chorusLeadMelody,

  // VERSE 2
  atmosphericPad,

  // BREAKDOWN
  breakdownGallop,
  breakdownSnare,
  breakdownGuitar,

  // FINAL CHORUS
  finalChorusDrums,
  finalChorusRiff,
  finalChorusLead,
  finalChorusPad
).gain(0.85)
  .room(0.2)  // Raw, not too much reverb
  .size(0.6)

// NOTE: Outro speed-up to 185 BPM and abrupt ending would need
// manual tempo change - in live performance, adjust setcps to
// setcps(185/60/4) for final 8 bars, then stop abruptly
