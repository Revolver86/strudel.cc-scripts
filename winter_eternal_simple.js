// WINTER_ETERNAL - Simplified Version
// Atmospheric Black Metal: Traditional, Melodic, Emotional
// 150 BPM, E Minor

setcps(150/60/4)

// This version has all song elements separated for easy experimentation.
// Traditional black metal with actual riffs, melodies, and songcraft.

// ==== CHORD PROGRESSION ====
// Em - Gmaj7 - Am7 - Bsus4
// Notes: E G B - G B D F# - A C E G - B E F#

// ==== CLEAN INTRO ARPEGGIOS ====
const clean_intro = note("[e4 g4 b4 g4] [g4 b4 d5 f5] [a4 c5 e5 c5] [b4 e5 f5 e5]")
  .sound("gtr")
  .lpf(4000)
  .gain(0.25)
  .room(0.9)
  .size(0.95)
  .delay(0.4)
  .delaytime(0.375)
  .delayfeedback(0.6)
  .fast(4)  // Tremolo picking

// ==== MID-TEMPO BLAST BEATS ====
const blast_beats = stack(
  s("bd*4").gain(0.9).crush(5),
  s("[~ sd]*2").gain(0.7).crush(5),
  s("hh*8").gain(0.3).lpf(6000)
)

// ==== POWER CHORDS (Rhythm Guitar) ====
const power_chords = note("[e2 e2 e2 ~] [g2 g2 g2 ~] [a2 a2 a2 ~] [b2 b2 b2 ~]")
  .sound("sawtooth")
  .lpf(1200)
  .gain(0.35)
  .room(0.5)
  .crush(4)

// ==== BASS (Following Roots) ====
const bass = note("<e1 g1 a1 b1>")
  .sound("sawtooth")
  .lpf(300)
  .gain(0.4)
  .slow(4)

// ==== CHORUS: STRIPPED DRUMS ====
const chorus_drums = stack(
  s("bd ~ bd ~").gain(0.8),
  s("hh:3*4").gain(0.35).lpf(5000)
)

// ==== CHORUS: MEMORABLE LEAD MELODY ====
// E natural minor scale: E F# G A B C D
// Phrased musically with rhythm and space
const chorus_melody = note("[e5 ~ g5 a5] [b5 ~ a5 g5] [a5 ~ g5 fs5] [e5 ~ ~ ~]")
  .sound("sine")
  .lpf(5000)
  .gain(0.3)
  .room(0.8)
  .size(0.9)
  .delay(0.5)
  .delaytime(0.375)
  .delayfeedback(0.7)

// ==== VERSE 2: MAIN MELODY ====
const verse2_main = note("[e4 g4 b4 g4] [g4 b4 d5 f5] [a4 c5 e5 c5] [b4 e5 f5 e5]")
  .sound("sawtooth")
  .lpf(2000)
  .gain(0.25)
  .room(0.7)
  .fast(4)

// ==== VERSE 2: COUNTER-MELODY (Parallel Harmony) ====
// Thirds and sixths - not dissonance!
const verse2_counter = note("[g4 b4 d5 b4] [b4 d5 f5 a5] [c5 e5 g5 e5] [d5 g5 a5 g5]")
  .sound("sawtooth")
  .lpf(2200)
  .gain(0.2)
  .room(0.7)
  .fast(4)

// ==== BRIDGE: SPARSE DRUMS (Half-time feel) ====
const bridge_drums = stack(
  s("bd ~ ~ ~").gain(0.7),
  s("~ ~ sd ~").gain(0.6)
)

// ==== BRIDGE: MOURNFUL SOLO ====
// E minor pentatonic: E G A B D
// Play it like you mean it!
const bridge_solo = note("[e5 ~ g5 ~] [a5 ~ b5 ~] [d6 ~ b5 ~] [a5 ~ g5 ~]")
  .sound("sine")
  .lpf(4000)
  .gain(0.35)
  .room(0.9)
  .size(0.95)
  .delay(0.6)
  .delaytime(0.5)
  .delayfeedback(0.75)

// ==== OUTRO: SUSTAINED Em CHORD ====
const outro_sustain = note("e2")
  .sound("sawtooth")
  .lpf(800)
  .gain(0.3)
  .room(0.95)
  .size(0.98)

// ==== BUILD YOUR ARRANGEMENT ====
// Uncomment sections to build the song

stack(
  // INTRO - Clean and beautiful
  clean_intro,

  // VERSE - Full band enters
  // blast_beats,
  // power_chords,
  // bass,

  // CHORUS - Let it breathe, memorable melody
  // chorus_drums,
  // chorus_melody,

  // VERSE 2 - Parallel harmonies weaving
  // verse2_main,
  // verse2_counter,

  // BRIDGE - Emotional core
  // bridge_drums,
  // bridge_solo,

  // CLIMAX - Everything together
  // (Stack all elements)

  // OUTRO - Fade on Em
  // outro_sustain
).gain(0.8)
  .room(0.3)
  .size(0.7)
