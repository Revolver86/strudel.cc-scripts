// STATIC CATHEDRAL
// Atmospheric Black Metal - Finding Transcendence in Digital Degradation
// 135 BPM, F# Dorian
// "Like a cathedral built from white noise and bit-crushed dreams"

$: setcps(135/60/4) // 135 BPM

// ==== INTRO: Filtered white noise evolving into bell-like tones (30s) ====
const intro = stack(
  // Filtered noise layer - starts heavy filtered, opens up gradually
  noise()
    .lpf(sine.range(200, 1200).slow(8))
    .gain(0.15)
    .room(0.9)
    .size(0.95),

  // Bell-like tones emerging from noise
  note("<fs3 a3 cs4 e4>")
    .sound("triangle")
    .lpf(sine.range(800, 2400).slow(4))
    .delay(0.6)
    .delaytime(0.375)
    .delayfeedback(0.7)
    .gain(perlin.range(0, 0.2).slow(3))
    .room(0.95)
    .size(0.98)
    .late(8) // Bells emerge after 8 cycles
).slow(2)
 .mask("<1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1>") // 17 cycles for ~30s

// ==== VERSE 1: Doom blast beats + melodic tremolo riff ====
const verse1Drums = stack(
  // Kick - doom-paced double bass
  s("bd:3*4")
    .gain(0.8)
    .crush(6)
    .shape(0.4)
    .speed(0.8),

  // Snare - blast beat pattern but not max speed
  s("~ sd:2 ~ sd:2")
    .gain(0.6)
    .crush(5)
    .room(0.3),

  // Cymbals/hats - washy and distant
  s("hh:7*8")
    .gain(perlin.range(0.15, 0.35))
    .crush(7)
    .lpf(4000)
    .room(0.6)
).late(17) // Start after intro
 .mask("<[1@32]>") // 32 cycles for verse 1

// Main tremolo riff - F# minor pentatonic + major 6th (melodic and sad)
const tremoloRiff = note("<fs3 a3 b3 cs4 ds4 e4 ds4 cs4>")
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
  .late(17)
  .mask("<[1@32]>")

// Clean guitar arpeggios in background (continues into transition)
const cleanArpeggios = note("<[fs4,a4,cs5] [a4,cs5,e5] [b3,ds4,fs4] [cs4,e4,gs4]>")
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
  .late(17)
  .mask("<[1@43]>") // Verse 1 (32) + Transition (11)

// Bass riff - simple and heavy
const bassRiff = note("<fs1 fs1 a1 b1>")
  .sound("sawtooth")
  .lpf(400)
  .gain(0.35)
  .shape(0.5)
  .room(0.4)
  .slow(2)
  .late(17)
  .mask("<[1@32]>") // Just verse 1

// ==== TRANSITION: Clean guitar + sub-bass drone (20s) ====
const transitionBass = note("fs1")
  .sound("sawtooth")
  .lpf(200)
  .gain(0.4)
  .room(0.7)
  .size(0.9)
  .late(49) // After intro + verse1
  .mask("<[1@11]>") // 11 cycles for ~20s

// ==== VERSE 2: Full intensity + corrupted church organ ====
const verse2Drums = stack(
  s("bd:3*4")
    .gain(0.8)
    .crush(6)
    .shape(0.4)
    .speed(0.8),
  s("~ sd:2 ~ sd:2")
    .gain(0.6)
    .crush(5)
    .room(0.3),
  s("hh:7*8")
    .gain(perlin.range(0.15, 0.35))
    .crush(7)
    .lpf(4000)
    .room(0.6)
).late(60) // After intro + verse1 + transition
 .mask("<[1@72]>") // Verse 2 + Bridge + Climax (32 + 24 + 16)

const verse2Tremolo = note("<fs3 a3 b3 cs4 ds4 e4 ds4 cs4>")
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
  .late(60)
  .mask("<[1@72]>")

const verse2Bass = note("<fs1 fs1 a1 b1>")
  .sound("sawtooth")
  .lpf(400)
  .gain(0.35)
  .shape(0.5)
  .room(0.4)
  .slow(2)
  .late(60)
  .mask("<[1@72]>")

// Corrupted church organ counter-melody
const corruptedOrgan = note("<a3 b3 cs4 ds4 e4 fs4 e4 ds4>")
  .sound("square")
  .lpf(sine.range(800, 1800).slow(4))
  .hpf(300)
  .crush(4) // Heavy bit-crushing for corruption
  .gain(0.2)
  .room(0.95)
  .size(0.98)
  .delay(0.4)
  .delaytime(0.25)
  .delayfeedback(0.5)
  .slow(1.5)
  .late(60)
  .mask("<[1@72]>")

// ==== BRIDGE: Pitched noise bursts as "choir of static" ====
const staticChoir = stack(
  // Low screams
  noise()
    .lpf(400)
    .hpf(150)
    .gain(perlin.range(0.1, 0.25).slow(2))
    .room(0.9)
    .size(0.95),

  // Mid screams
  noise()
    .lpf(1200)
    .hpf(600)
    .gain(perlin.range(0.08, 0.2).slow(1.5))
    .room(0.9)
    .size(0.95),

  // High screams
  noise()
    .lpf(3000)
    .hpf(1800)
    .gain(perlin.range(0.06, 0.15).slow(1.7))
    .room(0.95)
    .size(0.98)
).fast(perlin.range(1, 4).slow(8))
 .late(92) // Start at bridge (60 + 32)
 .mask("<[1@40]>") // Bridge + Climax (24 + 16)

// Building intensity in bridge
const bridgeBuild = note("<fs2 a2 b2 cs3>")
  .sound("sawtooth")
  .lpf(sine.range(600, 2400).slow(2))
  .gain(sine.range(0.15, 0.35).slow(4))
  .room(0.8)
  .size(0.9)
  .late(92)
  .mask("<[1@24]>") // Just bridge

// ==== CLIMAX: Soaring lead melody over all layers (16 bars) ====
const leadMelody = note("<fs5 e5 ds5 cs5 b4 a4 gs4 fs4 a4 b4 cs5 ds5 e5 fs5 gs5 a5>")
  .sound("sine")
  .lpf(6000) // Keep melodic elements relatively clean
  .gain(0.28)
  .room(0.9)
  .size(0.95)
  .delay(0.5)
  .delaytime(0.375)
  .delayfeedback(0.6)
  .slow(2)
  .late(116) // Start at climax (92 + 24)
  .mask("<[1@16]>")

// Additional harmonic layer for climax richness
const climaxHarmonics = note("<[fs4,a4,cs5] [e4,gs4,b4] [ds4,fs4,a4] [cs4,e4,gs4]>")
  .sound("triangle")
  .gain(0.15)
  .room(0.95)
  .size(0.98)
  .delay(0.4)
  .delaytime(0.25)
  .delayfeedback(0.7)
  .slow(4)
  .late(116)
  .mask("<[1@16]>")

// ==== OUTRO: Deconstructing back to filtered noise ====
const outroNoise = noise()
  .lpf(sine.range(1200, 200).slow(8))
  .gain(sine.range(0.15, 0.05).slow(10))
  .room(0.95)
  .size(0.98)
  .late(132) // Start at outro (116 + 16)
  .mask("<[1@20]>")

// Fragments of melody fading away
const outroFragments = note("<fs4 ~ ~ a4 ~ ~ ~ cs5 ~ ~ ~ ~>")
  .sound("triangle")
  .lpf(sine.range(2400, 800).slow(8))
  .gain(sine.range(0.2, 0.05).slow(10))
  .room(0.98)
  .size(0.99)
  .delay(0.7)
  .delaytime(0.5)
  .delayfeedback(0.8)
  .late(132)
  .mask("<[1@20]>")

// ==== MASTER MIX: Stack all layers ====
stack(
  intro,
  verse1Drums,
  tremoloRiff,
  cleanArpeggios,
  bassRiff,
  transitionBass,
  verse2Drums,
  verse2Tremolo,
  verse2Bass,
  corruptedOrgan,
  staticChoir,
  bridgeBuild,
  leadMelody,
  climaxHarmonics,
  outroNoise,
  outroFragments
).gain(0.8)
 .room(0.2) // Additional master reverb for cathedral space
 .size(0.8)
