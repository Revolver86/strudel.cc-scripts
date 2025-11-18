// STATIC CATHEDRAL - Simplified Version
// Atmospheric Black Metal: Finding Transcendence in Digital Degradation
// 135 BPM, F# Dorian - "A cathedral built from white noise and bit-crushed dreams"

setcps(135/60/4)

// ==== SECTION 1: FILTERED NOISE INTRO ====
const noiseIntro = noise()
  .lpf(sine.range(200, 1200).slow(8))
  .gain(0.15)
  .room(0.9)
  .size(0.95)

const bells = note("<fs3 a3 cs4 e4>")
  .sound("triangle")
  .lpf(sine.range(800, 2400).slow(4))
  .delay(0.6)
  .delaytime(0.375)
  .delayfeedback(0.7)
  .gain(perlin.range(0.05, 0.2).slow(3))
  .room(0.95)
  .size(0.98)

// ==== SECTION 2: DRUMS (DOOM BLAST BEATS) ====
const drums = stack(
  s("bd:3*4").gain(0.8).crush(6).shape(0.4).speed(0.8),
  s("~ sd:2 ~ sd:2").gain(0.6).crush(5).room(0.3),
  s("hh:7*8").gain(perlin.range(0.15, 0.35)).crush(7).lpf(4000).room(0.6)
)

// ==== SECTION 3: MAIN TREMOLO RIFF (F# minor pentatonic + major 6th) ====
const tremolo = note("<fs3 a3 b3 cs4 ds4 e4 ds4 cs4>")
  .sound("sawtooth")
  .lpf(2400)
  .resonance(8)
  .vowel("<a e i>")
  .gain(0.25)
  .room(0.7)
  .size(0.8)
  .delay(0.3)
  .delaytime(0.1875)
  .delayfeedback(0.4)
  .fast(4)

// ==== SECTION 4: CLEAN GUITAR ARPEGGIOS ====
const clean = note("<[fs4,a4,cs5] [a4,cs5,e5] [b3,ds4,fs4] [cs4,e4,gs4]>")
  .sound("gtr")
  .lpf(5000)
  .hpf(400)
  .gain(0.12)
  .room(0.95)
  .size(0.98)
  .delay(0.5)
  .delaytime(0.375)
  .delayfeedback(0.6)
  .slow(2)

// ==== SECTION 5: BASS RIFF (SIMPLE AND HEAVY) ====
const bass = note("<fs1 fs1 a1 b1>")
  .sound("sawtooth")
  .lpf(400)
  .gain(0.35)
  .shape(0.5)
  .room(0.4)
  .slow(2)

// ==== SECTION 6: SUB-BASS DRONE ====
const subDrone = note("fs1")
  .sound("sawtooth")
  .lpf(200)
  .gain(0.4)
  .room(0.7)
  .size(0.9)

// ==== SECTION 7: CORRUPTED CHURCH ORGAN ====
const organ = note("<a3 b3 cs4 ds4 e4 fs4 e4 ds4>")
  .sound("square")
  .lpf(sine.range(800, 1800).slow(4))
  .hpf(300)
  .crush(4)
  .gain(0.2)
  .room(0.95)
  .size(0.98)
  .delay(0.4)
  .delaytime(0.25)
  .delayfeedback(0.5)
  .slow(1.5)

// ==== SECTION 8: CHOIR OF STATIC (PITCHED NOISE) ====
const choir = stack(
  noise().lpf(400).hpf(150).gain(perlin.range(0.1, 0.25).slow(2)),
  noise().lpf(1200).hpf(600).gain(perlin.range(0.08, 0.2).slow(1.5)),
  noise().lpf(3000).hpf(1800).gain(perlin.range(0.06, 0.15).slow(1.7))
).room(0.92)
 .size(0.96)
 .fast(perlin.range(1, 4).slow(8))

// ==== SECTION 9: BRIDGE BUILD ====
const bridge = note("<fs2 a2 b2 cs3>")
  .sound("sawtooth")
  .lpf(sine.range(600, 2400).slow(2))
  .gain(sine.range(0.15, 0.35).slow(4))
  .room(0.8)
  .size(0.9)

// ==== SECTION 10: SOARING LEAD MELODY (CLIMAX) ====
const lead = note("<fs5 e5 ds5 cs5 b4 a4 gs4 fs4 a4 b4 cs5 ds5 e5 fs5 gs5 a5>")
  .sound("sine")
  .lpf(6000)
  .gain(0.28)
  .room(0.9)
  .size(0.95)
  .delay(0.5)
  .delaytime(0.375)
  .delayfeedback(0.6)
  .slow(2)

const harmonics = note("<[fs4,a4,cs5] [e4,gs4,b4] [ds4,fs4,a4] [cs4,e4,gs4]>")
  .sound("triangle")
  .gain(0.15)
  .room(0.95)
  .size(0.98)
  .delay(0.4)
  .delaytime(0.25)
  .delayfeedback(0.7)
  .slow(4)

// ==== SECTION 11: OUTRO FRAGMENTS ====
const fragments = note("<fs4 ~ ~ a4 ~ ~ ~ cs5 ~ ~ ~ ~>")
  .sound("triangle")
  .lpf(sine.range(2400, 800).slow(8))
  .gain(sine.range(0.2, 0.05).slow(10))
  .room(0.98)
  .size(0.99)
  .delay(0.7)
  .delaytime(0.5)
  .delayfeedback(0.8)

// ==== MASTER ARRANGEMENT ====
// Layer everything together - adjust sections by commenting/uncommenting
stack(
  // INTRO LAYERS (uncomment for full intro)
  noiseIntro.slow(2),
  bells.slow(2),

  // VERSE 1 LAYERS
  drums,
  tremolo,
  clean,
  bass,

  // VERSE 2 ADDITIONS
  organ,

  // BRIDGE/CLIMAX LAYERS
  choir,
  bridge,
  lead,
  harmonics,

  // TRANSITION/OUTRO ELEMENTS
  subDrone,
  fragments
).gain(0.8)
 .room(0.2)
 .size(0.8)