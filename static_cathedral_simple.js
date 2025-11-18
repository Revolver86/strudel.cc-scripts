// STATIC CATHEDRAL - Simplified Version
// Atmospheric Black Metal: Finding Transcendence in Digital Degradation
// 135 BPM, F# Dorian

setcps(135/60/4)

// This version shows the composition more clearly with separate,
// easy-to-modify layers. Each element can be adjusted independently.

// INTRO/OUTRO: Filtered noise foundation
const intro_noise = noise()
  .lpf(sine.range(200, 1200).slow(8))
  .gain(0.15)
  .room(0.95)
  .size(0.98)

// BELLS: Atmospheric intro tones
const bells = note("fs3 a3 cs4 e4")
  .sound("triangle")
  .lpf(sine.range(800, 2400).slow(4))
  .delay(0.6)
  .delaytime(0.375)
  .delayfeedback(0.7)
  .gain(perlin.range(0.05, 0.2).slow(3))
  .room(0.95)
  .size(0.98)
  .slow(2)

// DRUMS: Doom blast beats (bit-crushed and heavy)
const drums = stack(
  // Kick
  s("bd:3*4")
    .gain(0.8)
    .crush(6)
    .shape(0.4)
    .speed(0.8),

  // Snare
  s("~ sd:2 ~ sd:2")
    .gain(0.6)
    .crush(5)
    .room(0.3),

  // Hi-hats (washy and distant)
  s("hh:7*8")
    .gain(perlin.range(0.15, 0.35))
    .crush(7)
    .lpf(4000)
    .room(0.6)
)

// TREMOLO RIFF: Main melodic line (F# minor pentatonic + major 6th)
const tremolo = note("fs3 a3 b3 cs4 ds4 e4 ds4 cs4")
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
  .fast(4) // Tremolo picking speed

// BASS: Simple, heavy foundation
const bass = note("fs1 fs1 a1 b1")
  .sound("sawtooth")
  .lpf(400)
  .gain(0.35)
  .shape(0.5)
  .room(0.4)
  .slow(2)

// CLEAN GUITAR: Ethereal arpeggios
const clean = note("[fs4,a4,cs5] [a4,cs5,e5] [b3,ds4,fs4] [cs4,e4,gs4]")
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

// CORRUPTED ORGAN: Bit-crushed square wave church organ
const organ = note("a3 b3 cs4 ds4 e4 fs4 e4 ds4")
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

// STATIC CHOIR: Pitched noise as vocal texture
const choir = stack(
  noise().lpf(400).hpf(150).gain(perlin.range(0.1, 0.25).slow(2)),
  noise().lpf(1200).hpf(600).gain(perlin.range(0.08, 0.2).slow(1.5)),
  noise().lpf(3000).hpf(1800).gain(perlin.range(0.06, 0.15).slow(1.7))
).room(0.92)
  .size(0.96)
  .fast(perlin.range(1, 4).slow(8))

// LEAD MELODY: Soaring climax melody
const lead = note("fs5 e5 ds5 cs5 b4 a4 gs4 fs4 a4 b4 cs5 ds5 e5 fs5 gs5 a5")
  .sound("sine")
  .lpf(6000)
  .gain(0.28)
  .room(0.9)
  .size(0.95)
  .delay(0.5)
  .delaytime(0.375)
  .delayfeedback(0.6)
  .slow(4)

// ==== BUILD YOUR OWN ARRANGEMENT ====
// Uncomment layers to build up the song
// Start minimal and add elements

stack(
  // INTRO ELEMENTS
  intro_noise,
  bells,

  // VERSE ELEMENTS - uncomment to add
  drums,
  tremolo,
  bass,
  clean,

  // VERSE 2 / CLIMAX - uncomment to add
  // organ,
  // choir,
  // lead
).gain(0.8).room(0.2).size(0.8)
