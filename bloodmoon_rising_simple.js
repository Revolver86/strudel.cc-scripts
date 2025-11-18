// BLOODMOON_RISING - Simplified Version
// Raw Driving Black Metal: Darkthrone Style
// 175 BPM, D Minor

setcps(175/60/4)

// This version shows all the riffs clearly. Focus: MEMORABLE and HEADBANGABLE.
// Test: Can you hum these riffs after one listen?

// ==== INTRO: OMINOUS DRONE ====
const intro_drone = note("d1")
  .sound("sawtooth")
  .lpf(200)
  .gain(0.5)
  .room(0.8)
  .size(0.9)

const intro_thunder = s("bd:0*2")
  .gain(perlin.range(0.3, 0.7).slow(4))
  .speed(0.4)
  .room(0.9)
  .delay(0.5)

// ==== MAIN RIFF: THE INSTANTLY RECOGNIZABLE ONE ====
// D minor - F major - C major - G minor
// Can you hum this? That's the test!
const main_riff = note("[d3 f3 a3 f3] [f3 a3 c4 a3] [c3 e3 g3 e3] [g3 bb3 d4 bb3]")
  .sound("sawtooth")
  .lpf(1800)
  .gain(0.35)
  .crush(5)
  .room(0.4)
  .fast(8)  // Tremolo picking

// ==== TIGHT BLAST BEATS ====
const blast_beats = stack(
  s("bd*8").gain(1.0).crush(6).speed(0.8),
  s("~ sd ~ sd ~ sd ~ sd").gain(0.8).crush(6),
  s("hh*16").gain(0.35).lpf(7000).crush(7)
)

// ==== BASS: FOLLOWING THE ROOTS ====
const bass = note("<d1 f1 c1 g1>")
  .sound("sawtooth")
  .lpf(350)
  .gain(0.45)
  .slow(4)

// ==== VERSE: CALL-RESPONSE HIGHER MELODY ====
const verse_high_melody = note("[d5 ~ ~ ~] [f5 ~ ~ ~] [c5 ~ ~ ~] [g5 ~ ~ ~]")
  .sound("sine")
  .lpf(4000)
  .gain(0.25)
  .room(0.6)
  .delay(0.3)

// ==== PRE-CHORUS: POWER CHORD DESCENT ====
// D5 → C5 → Bb5 → A5 (building tension!)
const prechorus_power = note("[d4!4 ~!4] [c4!4 ~!4] [bb3!4 ~!4] [a3!4 ~!4]")
  .sound("sawtooth")
  .lpf(1000)
  .gain(0.4)
  .crush(5)
  .room(0.3)

// ==== CHORUS: THE CATCHY ASCENDING RIFF ====
// D - E - F - G ascending (ANTHEMIC!)
const chorus_riff = note("[d3 e3 f3 g3] [d3 e3 f3 g3] [d3 e3 f3 g3] [d3 e3 f3 g3]")
  .sound("sawtooth")
  .lpf(2000)
  .gain(0.35)
  .crush(5)
  .room(0.5)
  .fast(8)

// ==== CHORUS LEAD: THE HOOK YOU REMEMBER ====
const chorus_lead = note("[d5 e5 f5 g5 a5 g5 f5 d5]")
  .sound("sine")
  .lpf(5000)
  .gain(0.3)
  .room(0.7)
  .delay(0.4)
  .delaytime(0.375)

// ==== ATMOSPHERIC PAD (Verse 2) ====
const atmospheric_pad = note("<d3 f3 c3 g3>")
  .sound("sine")
  .lpf(1000)
  .gain(0.15)
  .room(0.95)
  .size(0.98)
  .slow(4)

// ==== BREAKDOWN: GALLOPING BASS (No kick!) ====
const breakdown_gallop = note("<d1 d1 d1>")
  .sound("sawtooth")
  .lpf(400)
  .gain(0.5)
  .fast(3)

const breakdown_snare = s("~ sd ~ sd")
  .gain(0.8)
  .crush(6)

// Dark descending line
const breakdown_guitar = note("<d4 c4 bb3 a3 g3 f3 e3 d3>")
  .sound("sawtooth")
  .lpf(1500)
  .gain(0.3)
  .crush(5)
  .room(0.5)
  .slow(2)

// ==== BUILD YOUR ARRANGEMENT ====
stack(
  // INTRO - Ominous build
  intro_drone,
  intro_thunder,

  // MAIN SECTION - The memorable riff!
  // main_riff,
  // blast_beats,
  // bass,

  // VERSE - Call and response
  // verse_high_melody,

  // PRE-CHORUS - Tension build
  // prechorus_power,

  // CHORUS - The catchy hook!
  // chorus_riff,
  // chorus_lead,

  // VERSE 2 - With atmosphere
  // atmospheric_pad,

  // BREAKDOWN - Galloping tension
  // breakdown_gallop,
  // breakdown_snare,
  // breakdown_guitar,

  // FINAL CHORUS - Everything!
  // (Stack all chorus elements + pad)

).gain(0.85)
  .room(0.2)  // Raw Darkthrone sound
  .size(0.6)
