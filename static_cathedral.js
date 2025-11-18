// STATIC CATHEDRAL
// Atmospheric Black Metal - Finding Transcendence in Digital Degradation
// 135 BPM, F# Dorian
// "Like a cathedral built from white noise and bit-crushed dreams"

setcps(135/60/4)

// ==== SECTION STRUCTURE ====
// Using long alternating patterns to create distinct sections
// Each section repeats for multiple cycles before transitioning

// ==== DRUMS: Evolve through sections ====
const drums = "<\
  [~ ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~],\
  [~ ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~],\
  bd:3*4 bd:3*4 bd:3*4 bd:3*4,\
  bd:3*4 bd:3*4 bd:3*4 bd:3*4,\
  bd:3*4 bd:3*4 bd:3*4 bd:3*4,\
  bd:3*4 bd:3*4 bd:3*4 bd:3*4,\
  [~ ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~]\
>".slow(4).stack(
  s("~ sd:2 ~ sd:2")
    .gain(0.6)
    .crush(5)
    .room(0.3)
    .mask("<0 0 1 1 1 1 0>".slow(16)),
  s("hh:7*8")
    .gain(perlin.range(0.15, 0.35))
    .crush(7)
    .lpf(4000)
    .room(0.6)
    .mask("<0 0 1 1 1 1 0>".slow(16))
).gain(0.8).crush(6).shape(0.4).speed(0.8)

// ==== TREMOLO RIFF: Main melodic element ====
const tremolo = note("<\
  ~ ~ ~ ~,\
  ~ ~ ~ ~,\
  [fs3 a3 b3 cs4] [ds4 e4 ds4 cs4] [fs3 a3 b3 cs4] [ds4 e4 ds4 cs4],\
  [fs3 a3 b3 cs4] [ds4 e4 ds4 cs4] [fs3 a3 b3 cs4] [ds4 e4 ds4 cs4],\
  [fs3 a3 b3 cs4] [ds4 e4 ds4 cs4] [fs3 a3 b3 cs4] [ds4 e4 ds4 cs4],\
  [fs3 a3 b3 cs4] [ds4 e4 ds4 cs4] [fs3 a3 b3 cs4] [ds4 e4 ds4 cs4],\
  ~ ~ ~ ~\
>".slow(4))
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

// ==== BASS: Simple and heavy ====
const bass = note("<\
  ~ ~ ~ ~,\
  fs1 fs1 fs1 fs1,\
  [fs1 fs1 a1 b1] [fs1 fs1 a1 b1] [fs1 fs1 a1 b1] [fs1 fs1 a1 b1],\
  fs1 fs1 fs1 fs1,\
  [fs1 fs1 a1 b1] [fs1 fs1 a1 b1] [fs1 fs1 a1 b1] [fs1 fs1 a1 b1],\
  [fs1 fs1 a1 b1] [fs1 fs1 a1 b1] [fs1 fs1 a1 b1] [fs1 fs1 a1 b1],\
  fs1 fs1 fs1 fs1\
>".slow(4))
  .sound("sawtooth")
  .lpf(400)
  .gain(0.35)
  .shape(0.5)
  .room(0.4)

// ==== CLEAN ARPEGGIOS: Ethereal background ====
const clean = note("<\
  [fs4,a4,cs5] [a4,cs5,e5] [b3,ds4,fs4] [cs4,e4,gs4],\
  [fs4,a4,cs5] [a4,cs5,e5] [b3,ds4,fs4] [cs4,e4,gs4],\
  [fs4,a4,cs5] [a4,cs5,e5] [b3,ds4,fs4] [cs4,e4,gs4],\
  [fs4,a4,cs5] [a4,cs5,e5] [b3,ds4,fs4] [cs4,e4,gs4],\
  [fs4,a4,cs5] [a4,cs5,e5] [b3,ds4,fs4] [cs4,e4,gs4],\
  [fs4,a4,cs5] [a4,cs5,e5] [b3,ds4,fs4] [cs4,e4,gs4],\
  [fs4,a4,cs5] [a4,cs5,e5] [b3,ds4,fs4] [cs4,e4,gs4]\
>".slow(8))
  .sound("gtr")
  .lpf(5000)
  .hpf(400)
  .gain(0.12)
  .room(0.95)
  .size(0.98)
  .delay(0.5)
  .delaytime(0.375)
  .delayfeedback(0.6)

// ==== CORRUPTED ORGAN: Verse 2 onward ====
const organ = note("<\
  ~ ~ ~ ~,\
  ~ ~ ~ ~,\
  ~ ~ ~ ~,\
  ~ ~ ~ ~,\
  [a3 b3 cs4 ds4] [e4 fs4 e4 ds4] [a3 b3 cs4 ds4] [e4 fs4 e4 ds4],\
  [a3 b3 cs4 ds4] [e4 fs4 e4 ds4] [a3 b3 cs4 ds4] [e4 fs4 e4 ds4],\
  ~ ~ ~ ~\
>".slow(6))
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

// ==== STATIC CHOIR: Bridge and climax ====
const choir = stack(
  noise().lpf(400).hpf(150).gain(perlin.range(0.1, 0.25).slow(2)),
  noise().lpf(1200).hpf(600).gain(perlin.range(0.08, 0.2).slow(1.5)),
  noise().lpf(3000).hpf(1800).gain(perlin.range(0.06, 0.15).slow(1.7))
).room(0.92)
  .size(0.96)
  .fast(perlin.range(1, 4).slow(8))
  .mask("<0 0 0 0 1 1 0>".slow(16))

// ==== LEAD MELODY: Climax only ====
const lead = note("<\
  ~ ~ ~ ~,\
  ~ ~ ~ ~,\
  ~ ~ ~ ~,\
  ~ ~ ~ ~,\
  ~ ~ ~ ~,\
  [fs5 e5 ds5 cs5] [b4 a4 gs4 fs4] [a4 b4 cs5 ds5] [e5 fs5 gs5 a5],\
  ~ ~ ~ ~\
>".slow(8))
  .sound("sine")
  .lpf(6000)
  .gain(0.28)
  .room(0.9)
  .size(0.95)
  .delay(0.5)
  .delaytime(0.375)
  .delayfeedback(0.6)

// ==== INTRO/OUTRO NOISE: Bookends ====
const noise_texture = noise()
  .lpf(sine.range(200, 1200).slow(8))
  .gain("<0.15 0.15 0 0 0 0.1 0.08>".slow(16))
  .room(0.95)
  .size(0.98)

// ==== BELLS: Intro ====
const bells = note("<fs3 a3 cs4 e4>")
  .sound("triangle")
  .lpf(sine.range(800, 2400).slow(4))
  .delay(0.6)
  .delaytime(0.375)
  .delayfeedback(0.7)
  .gain(perlin.range(0.05, 0.2).slow(3))
  .room(0.95)
  .size(0.98)
  .mask("<1 1 0 0 0 0 0>".slow(16))

// ==== MASTER MIX ====
stack(
  noise_texture,
  bells,
  drums,
  tremolo,
  bass,
  clean,
  organ,
  choir,
  lead
).gain(0.8).room(0.2).size(0.8)
