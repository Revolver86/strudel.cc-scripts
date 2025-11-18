/*
@title Corrupted Transmission
@by Claude & Human
@license CC BY-NC-SA
@details Black metal/industrial/indie outsider - Simplified version
A more accessible take on digital black metal
*/

// ========================================
// CORRUPTED TRANSMISSION
// Black Metal/Industrial/Indie Outsider
// ========================================

setcps(0.75)  // ~180 BPM feel

// ========================================
// BUILDING BLOCKS
// ========================================

// Harsh industrial drums
const drums = stack(
  s("bd*4").crush(5).coarse(4).gain(1.3),
  s("~ sd ~ sd").crush(6).gain(1.0),
  s("hh*8").crush(8).gain(0.3).degradeBy(0.15)
)

// Main tremolo riff (E Phrygian: E F G A B C D)
const blackmetalRiff = n("0 0 3 1 0 -2 0 1")
  .scale("E:phrygian")
  .sound("sawtooth")
  .lpf(1200)
  .lpq(6)
  .crush(4)
  .gain(0.9)
  .fast(2)

// Dissonant counter-riff
const dissonantLayer = n("6 7 9 6 7 9 10 9")
  .scale("E:phrygian")
  .sound("square")
  .lpf(900)
  .crush(6)
  .gain(0.6)
  .fast(2)
  .pan(0.3)

// Sub bass pulse
const bass = note("e1 ~ e1 ~ e1 e1 ~ ~")
  .sound("sine")
  .gain(1.1)

// 8-bit melodic lead
const melody = n("7 5 3 5 7 8 10 8")
  .scale("E:phrygian")
  .add(24)
  .sound("square")
  .crush(7)
  .lpf(2000)
  .gain(0.7)
  .delay(0.3)
  .room(0.4)

// Atmospheric pad
const atmospherePad = note("<e2 f2 g2 a2>")
  .sound("sawtooth")
  .lpf(600)
  .room(0.8)
  .gain(0.4)
  .slow(4)

// Glitch percussion
const glitchPerc = s("~ ~ cp ~")
  .crush(8)
  .speed("<1 2 0.5 -1>")
  .gain(0.8)
  .degradeBy(0.3)

// ========================================
// SONG SECTIONS
// ========================================

// Minimal intro
const intro = stack(
  melody.slow(2).gain(0.6).room(0.7),
  note("e1").sound("sine").gain(0.5)
)

// Full verse
const verse = stack(
  drums,
  blackmetalRiff,
  dissonantLayer,
  bass,
  glitchPerc
)

// Verse with lead
const verseWithLead = stack(
  drums,
  blackmetalRiff,
  dissonantLayer,
  bass,
  melody,
  glitchPerc
)

// Breakdown - sparse and eerie
const breakdown = stack(
  s("bd ~ ~ bd").crush(3).gain(1.2),
  melody.slow(2).gain(0.8).room(0.9),
  atmospherePad
)

// Chaotic climax
const climax = stack(
  drums.sometimes(x => x.fast(2)),
  blackmetalRiff.fast(2),
  dissonantLayer.fast(2),
  melody.every(2, rev()),
  bass.gain(1.3),
  s("white").lpf(500).gain(0.2).crush(4)
)

// Corrupted outro
const outro = stack(
  melody.degradeBy(0.5).crush(8).coarse(8).room(0.9),
  note("e1").sound("sine").gain(0.3),
  s("bd*8").crush(8).gain(0.4).degradeBy(0.7)
)

// ========================================
// COMPLETE SONG STRUCTURE
// ========================================

cat(
  intro.slow(4),           // 4 cycles intro
  verse.slow(4),           // 4 cycles verse
  verseWithLead.slow(4),   // 4 cycles verse + melody
  breakdown.slow(4),       // 4 cycles breakdown
  verse.slow(4),           // 4 cycles verse return
  climax.slow(4),          // 4 cycles climax
  breakdown.slow(2),       // 2 cycles brief break
  outro.slow(4)            // 4 cycles outro
)

// ========================================
// LIVE PERFORMANCE VERSION
// (Comment out the cat() above and uncomment sections below)
// ========================================

/*
setcps(0.75)

// Start here - build up gradually
intro

// Add drums
verse

// Add melody
verseWithLead

// Drop down
breakdown

// Build back up
verse

// Peak intensity
climax

// Wind down
outro

// Stop everything
hush()
*/

// ========================================
// EXPERIMENTAL VARIATIONS
// ========================================

// Version with more degradation
/*
stack(
  drums.degradeBy(0.3),
  blackmetalRiff.degradeBy(0.2).sometimes(x => x.transpose(7)),
  melody.degradeBy(0.4).crush(8),
  bass
)
*/

// Slower, doomier version
/*
setcps(0.5)
stack(
  s("bd ~ ~ ~").crush(4).gain(1.5),
  blackmetalRiff.slow(2).lpf(600),
  note("e1 ~ e2 e1").sound("sine").gain(1.2)
)
*/

// Ambient/noise version
/*
stack(
  melody.slow(4).room(0.9).degradeBy(0.6),
  s("white").lpf(sine.range(200, 1000)).gain(0.3),
  note("e1").sound("sine").gain(0.6)
)
*/

// ========================================
// CUSTOMIZATION TIPS
// ========================================
//
// SPEED:
// - setcps(0.5) = slower, doomier (~120 BPM)
// - setcps(0.75) = medium (~180 BPM) [default]
// - setcps(1.0) = faster (~240 BPM)
//
// BRUTALITY LEVEL:
// - .crush(3-5) = moderate digital distortion
// - .crush(6-8) = heavy bit crushing
// - .coarse(2-4) = moderate sample rate reduction
// - .coarse(5-8) = extreme lo-fi
//
// CHAOS LEVEL:
// - .degradeBy(0.1-0.2) = slight glitching
// - .degradeBy(0.3-0.5) = moderate randomness
// - .degradeBy(0.6-0.8) = heavy chaos
//
// MIX BALANCE:
// Adjust .gain() values:
// - Drums: 1.0-1.5 (loud)
// - Riffs: 0.7-1.0 (present but not overwhelming)
// - Melody: 0.6-0.8 (on top but not overpowering)
// - Bass: 1.0-1.3 (foundation)
//
// FILTERS:
// - .lpf(500-800) = dark, muffled
// - .lpf(1000-1500) = aggressive but controlled
// - .lpf(2000-3000) = bright, harsh
//
// SPACE/ATMOSPHERE:
// - .room(0.3-0.5) = subtle space
// - .room(0.6-0.8) = big reverb
// - .room(0.9) = drowning in reverb
//
// ========================================
