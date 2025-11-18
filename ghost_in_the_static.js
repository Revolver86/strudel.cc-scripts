/*
@title Ghost in the Static
@by Claude & Human
@license CC BY-NC-SA
@details Indie/Outsider with Black Metal & Industrial elements
More melodic and emotional, but still harsh and experimental
*/

// ========================================
// GHOST IN THE STATIC
// Indie Outsider / Black Metal / Industrial
// More melodic, introspective, haunting
// ========================================

setcps(0.55)  // Slower, more deliberate

// ========================================
// PART 1: LONELY MELODY
// Clean, fragile, lo-fi
// ========================================

const lonelyMelody = n("0 2 3 7 5 3 2 0")
  .scale("E:minor")  // Minor instead of Phrygian for more accessible sound
  .add(36)  // High, fragile register
  .sound("sine")
  .attack(0.02)
  .release(0.6)
  .room(0.8)
  .delay(0.5)
  .delaytime(0.375)
  .gain(0.7)

const softDrone = note("e2")
  .sound("sawtooth")
  .lpf(300)
  .room(0.9)
  .gain(0.3)

const intro = stack(
  lonelyMelody,
  softDrone,
  s("~").degradeBy(1)  // silence
)

// ========================================
// PART 2: GLITCHY BEATS ENTER
// Lo-fi drums, broken and distant
// ========================================

const brokenBeats = stack(
  s("bd ~ ~ ~")
    .crush(6)
    .gain(0.9)
    .degradeBy(0.2),

  s("~ ~ sd ~")
    .crush(7)
    .gain(0.7)
    .sometimes(x => x.speed(0.5)),

  s("~ hh ~ hh")
    .crush(8)
    .gain(0.3)
    .degradeBy(0.4)
)

const melodicSection = stack(
  lonelyMelody,
  brokenBeats,
  softDrone.gain(0.4)
)

// ========================================
// PART 3: BLACK METAL ERUPTION
// Harsh but still melodic
// ========================================

const aggressiveDrums = stack(
  s("bd*4").crush(5).gain(1.2),
  s("~ sd ~ sd").crush(6).gain(0.9),
  s("hh*8").crush(8).gain(0.3).degradeBy(0.15)
)

const tremoloRiff = n("0 2 3 5 7 5 3 2")
  .scale("E:minor")
  .sound("sawtooth")
  .lpf(1400)
  .lpq(5)
  .crush(4)
  .fast(2)
  .gain(0.8)

const harmonyRiff = n("7 9 10 12 14 12 10 9")
  .scale("E:minor")
  .sound("square")
  .lpf(1000)
  .crush(5)
  .fast(2)
  .gain(0.5)
  .pan(0.7)

const heavySection = stack(
  aggressiveDrums,
  tremoloRiff,
  harmonyRiff,
  note("e1 ~ e1 g1").sound("sine").gain(1.0),
  // Keep melody ghosting in background
  lonelyMelody.gain(0.3).room(0.9)
)

// ========================================
// PART 4: INDUSTRIAL BREAKDOWN
// Mechanical, cold, repetitive
// ========================================

const mechanicalBeat = stack(
  s("bd ~ bd bd ~ bd ~ ~")
    .crush(4)
    .gain(1.3),

  s("~ ~ ~ cp")
    .crush(8)
    .gain(0.8)
    .speed("<1 -1>"),

  s("hh ~ hh ~")
    .crush(7)
    .gain(0.4)
)

const industrialBass = note("e1 e2 e1 b1")
  .sound("square")
  .lpf(200)
  .crush(3)
  .gain(1.1)

const glitchLead = n("12 14 15 17 15 14 12 10")
  .scale("E:minor")
  .add(24)
  .sound("square")
  .crush(8)
  .coarse(6)
  .gain(0.6)
  .degradeBy(0.3)

const industrialSection = stack(
  mechanicalBeat,
  industrialBass,
  glitchLead
)

// ========================================
// PART 5: EMOTIONAL CLIMAX
// Everything combines
// ========================================

const climaxMelody = n("0 2 3 7 5 3 2 0 7 9 10 12 10 9 7 5")
  .scale("E:minor")
  .add(36)
  .sound("sine")
  .room(0.7)
  .delay(0.4)
  .gain(0.9)

const climax = stack(
  aggressiveDrums,
  tremoloRiff.gain(0.9),
  harmonyRiff.gain(0.6),
  climaxMelody,
  note("e1 ~ e1 ~ g1 ~ b1 ~").sound("sine").gain(1.2),
  // Noise layer for texture
  s("white").lpf(800).gain(0.15).crush(5)
)

// ========================================
// PART 6: DISINTEGRATION
// Everything falls apart
// ========================================

const disintegration = stack(
  lonelyMelody.degradeBy(0.6).crush(8).coarse(8),
  s("bd ~ ~ ~").crush(8).degradeBy(0.7).gain(0.6),
  s("white pink").lpf(400).gain(0.2).degradeBy(0.8),
  note("e2").sound("sine").gain(0.2)
)

// ========================================
// COMPLETE SONG
// ========================================

cat(
  intro.slow(4),              // 4 cycles - alone
  melodicSection.slow(4),     // 4 cycles - beats enter
  heavySection.slow(6),       // 6 cycles - eruption
  industrialSection.slow(4),  // 4 cycles - mechanical
  melodicSection.slow(4),     // 4 cycles - return to melody
  climax.slow(8),             // 8 cycles - peak
  industrialSection.slow(4),  // 4 cycles - one more time
  disintegration.slow(6)      // 6 cycles - fade to nothing
)

// ========================================
// LIVE PERFORMANCE GUIDE
// ========================================

/*
ACT 1: FRAGILITY
intro
melodicSection

ACT 2: AGGRESSION
heavySection

ACT 3: MECHANICAL
industrialSection

ACT 4: RETURN
melodicSection
climax

ACT 5: DISSOLUTION
disintegration

STOP:
hush()
*/

// ========================================
// MINIMAL JAMMER VERSION
// (for quick improvisation)
// ========================================

/*
setcps(0.55)

stack(
  // Your choice of drums:
  // brokenBeats
  // aggressiveDrums
  // mechanicalBeat

  // Your choice of melody:
  // lonelyMelody
  // climaxMelody

  // Your choice of riff:
  // tremoloRiff
  // harmonyRiff

  // Bass:
  note("e1 ~ e1 ~").sound("sine").gain(1.0)
)
*/

// ========================================
// THEME & CONCEPT
// ========================================
// "Ghost in the Static" explores the feeling of being
// half-present, caught between digital and emotional,
// harsh and gentle, aggressive and vulnerable.
//
// The melody represents the "ghost" - a fragile human
// element trying to persist through increasingly
// hostile digital environments (heavy sections).
//
// Unlike "Neural Collapse" which is about failure,
// this is about persistence - the melody keeps
// returning even as everything disintegrates.
//
// Musical influences:
// - Indie: Clean melodies, emotional vulnerability
// - Black Metal: Tremolo riffs, blast beats, aggression
// - Industrial: Mechanical rhythms, digital distortion
// - Outsider: Lo-fi aesthetic, unconventional structure
// ========================================
