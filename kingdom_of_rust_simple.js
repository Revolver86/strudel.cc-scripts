// KINGDOM_OF_RUST - Simplified Movements
// Epic Atmospheric Black Metal: Story-Driven Composition
// 155 BPM, C# Minor

setcps(155/60/4)

// This version shows each movement's key elements separately.
// An epic story told through transforming musical themes.

// ==== CHORD PROGRESSION (Main Theme) ====
// C# minor - Amaj7 - E - B
// This progression appears throughout, transformed in each movement

// ==== INTRO: MAJESTIC FALLEN EMPIRE ====
const intro_clean = note("[cs4 e4 gs4 e4] [a4 cs5 e5 gs5] [e4 gs4 b4 gs4] [b4 ds5 fs5 ds5]")
  .sound("gtr")
  .lpf(3500)
  .gain(0.2)
  .room(0.95)
  .size(0.98)
  .delay(0.5)
  .fast(4)

const intro_strings_pad = note("<cs3 a3 e3 b3>")
  .sound("sine")
  .lpf(1200)
  .gain(0.18)
  .room(0.98)
  .size(0.99)
  .slow(4)

const intro_war_drums = s("bd:0 ~ ~ ~ ~ ~ bd:0 ~")
  .gain(0.4)
  .speed(0.6)
  .room(0.9)

// ==== MOVEMENT I: GLORY REMEMBERED (Triumphant) ====
const glory_blast_beats = stack(
  s("bd*4").gain(0.9).crush(5),
  s("~ sd ~ sd").gain(0.7).crush(5),
  s("hh*8").gain(0.3).lpf(6000)
)

const glory_rhythm = note("[cs2!4 ~!4] [a2!4 ~!4] [e2!4 ~!4] [b2!4 ~!4]")
  .sound("sawtooth")
  .lpf(1000)
  .gain(0.35)
  .crush(4)

// Triumphant lead (C# natural minor ascending)
const glory_lead = note("[cs4 ds4 e4 fs4] [gs4 a4 b4 cs5] [ds5 cs5 b4 a4] [gs4 fs4 e4 ds4]")
  .sound("sine")
  .lpf(4500)
  .gain(0.25)
  .room(0.7)
  .delay(0.4)

// Harmony in fifths
const glory_harmony = note("[gs4 as4 b4 cs5] [ds5 e5 fs5 gs5] [as5 gs5 fs5 e5] [ds5 cs5 b4 as4]")
  .sound("sine")
  .lpf(5000)
  .gain(0.2)
  .room(0.7)

// ==== TRANSITION: THE FALL (Industrial Marching) ====
const fall_march = stack(
  s("bd ~ sd ~").gain(0.8),
  s("~ ~ sd ~").gain(0.6)
)

const fall_chug = note("[cs2!8 ~!8]")
  .sound("sawtooth")
  .lpf(600)
  .gain(0.4)
  .crush(5)

// ==== MOVEMENT II: OCCUPATION (C# Phrygian - Menacing) ====
// C# Phrygian: C# D E F# G# A B (flat-2nd creates exotic menace)
const occupation_riff = note("[cs3 d3 e3 fs3] [gs3 a3 b3 cs4] [d4 cs4 b3 a3] [gs3 fs3 e3 d3]")
  .sound("sawtooth")
  .lpf(1800)
  .gain(0.3)
  .crush(5)
  .room(0.5)
  .fast(8)

const occupation_chaos = noise()
  .lpf(sine.range(500, 2000).slow(4))
  .gain(0.1)
  .room(0.7)

// ==== BRIDGE: REFLECTION (Mournful Solo) ====
const reflection_solo = note("[cs5 ~ ds5 e5] [fs5 ~ e5 ~] [gs5 ~ fs5 ~] [e5 ~ ds5 ~] [cs5 ~ ~ ~]")
  .sound("gtr")
  .lpf(4000)
  .gain(0.3)
  .room(0.95)
  .delay(0.7)
  .delaytime(0.5)
  .delayfeedback(0.8)
  .slow(3)

const reflection_bass = note("<cs1 ~ e1 ~ gs1 ~>")
  .sound("sawtooth")
  .lpf(250)
  .gain(0.35)
  .slow(6)

// ==== MOVEMENT III: RECLAMATION (Slow Build) ====
// Starts with just kick and bass, gradually adds layers
const reclamation_foundation = stack(
  s("bd ~ ~ ~").gain(0.7),
  note("cs1").sound("sawtooth").lpf(300).gain(0.4)
)

// Returning glory theme but in minor, darker
const reclamation_theme = note("[cs4 ds4 e4 fs4] [gs4 a4 b4 cs5]")
  .sound("sawtooth")
  .lpf(2000)
  .gain(0.3)
  .room(0.6)
  .fast(4)

// ==== CLIMAX: THE BATTLE (Everything Combined) ====
// All three melodies layered:
const battle_lead1 = note("[cs4 ds4 e4 fs4] [gs4 a4 b4 cs5]")
  .sound("sine")
  .lpf(4500)
  .gain(0.25)

const battle_lead2 = note("[gs4 as4 b4 cs5] [ds5 e5 fs5 gs5]")
  .sound("sine")
  .lpf(5000)
  .gain(0.2)

const battle_lead3 = note("[cs3 d3 e3 fs3] [gs3 a3 b3 cs4]")
  .sound("sawtooth")
  .lpf(1800)
  .gain(0.2)
  .fast(8)

const battle_pad = note("<cs3 a3 e3 b3>")
  .sound("sine")
  .lpf(1200)
  .gain(0.18)
  .room(0.98)
  .slow(4)

// ==== OUTRO: VICTORY (Octave Climb) ====
// C# - D# - E - F# - G# - A - B - C# (climbing full octave)
const victory_climb = note("<cs3 ds3 e3 fs3 gs3 a3 b3 cs4>")
  .sound("sawtooth")
  .lpf(1500)
  .gain(0.4)
  .room(0.8)
  .slow(8)

// Final massive chord
const victory_chord = note("[cs2 cs3 cs4]")
  .sound("sawtooth")
  .lpf(2000)
  .gain(0.45)
  .room(0.95)
  .size(0.98)

// Peaceful ending - clean guitar returns
const peace_ending = note("[cs4 e4 gs4]")
  .sound("gtr")
  .lpf(3500)
  .gain(0.2)
  .room(0.98)
  .delay(0.7)

// ==== BUILD YOUR EPIC JOURNEY ====
// Uncomment movements to experience the story

stack(
  // INTRO - Fallen empire atmosphere
  intro_clean,
  intro_strings_pad,
  intro_war_drums,

  // MOVEMENT I - Glory remembered
  // glory_blast_beats,
  // glory_rhythm,
  // glory_lead,
  // glory_harmony,

  // TRANSITION - The fall
  // fall_march,
  // fall_chug,

  // MOVEMENT II - Occupation and corruption
  // occupation_riff,
  // occupation_chaos,

  // BRIDGE - Reflection and loss
  // reflection_solo,
  // reflection_bass,

  // MOVEMENT III - Reclamation builds
  // reclamation_foundation,
  // reclamation_theme,

  // CLIMAX - The battle (all layers!)
  // battle_lead1,
  // battle_lead2,
  // battle_lead3,
  // battle_pad,

  // OUTRO - Victory and peace
  // victory_climb,
  // victory_chord,
  // peace_ending
).gain(0.8)
  .room(0.3)
  .size(0.7)

// NOTE: For the complete epic, tempo would slow from 155 to 100 BPM
// during outro. This would require manual setcps change:
// setcps(100/60/4) for the victory section
