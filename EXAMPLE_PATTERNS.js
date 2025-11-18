// ========================================
// STRUDEL.CC EXAMPLE PATTERNS COLLECTION
// ========================================
// Copy and paste these into https://strudel.cc/
// Modify and experiment to create your own music!

// ========================================
// 1. BASIC BEATS
// ========================================

// Simple four-on-the-floor
s("bd sd bd sd")

// With hi-hats
stack(
  s("bd sd bd sd"),
  s("hh*8").gain(0.3)
)

// Using drum machine banks
stack(
  s("bd sd bd sd").bank("RolandTR909"),
  s("hh*8").gain(0.3).bank("RolandTR909")
)

// ========================================
// 2. EUCLIDEAN RHYTHMS
// ========================================

// Classic 3 over 8 techno kick
s("bd(3,8)")

// Layered Euclidean patterns
stack(
  s("bd(3,8)").gain(1.2),
  s("sd(5,16)").gain(0.9),
  s("hh(7,16)").gain(0.3),
  s("oh(2,16)").gain(0.6)
).bank("RolandTR909")

// Complex polyrhythm
stack(
  s("bd(5,8)"),
  s("cp(3,8,2)"),
  s("hh(13,16)").gain(0.3)
)

// ========================================
// 3. MELODIC PATTERNS
// ========================================

// Simple melody
note("c d e f g a b c5")

// With piano sound
note("c d e f g a b c5").sound("piano")

// Using scales
n("0 2 4 6 7 4 2 0").scale("C:minor")

// Chord progression
chord("<Cm7 Fm7 Bb7 Ebmaj7>").sound("piano")

// Arpeggio with effects
n("0 2 4 7 9 7 4 2")
  .scale("A:minor")
  .sound("sawtooth")
  .lpf(1200)
  .room(0.3)

// ========================================
// 4. BASSLINES
// ========================================

// Simple bass
note("c2 ~ c2 ~ e2 ~ g2 ~")
  .sound("sawtooth")
  .lpf(500)

// Funky bass with filter
note("c2 [c2 eb2] ~ g2 ~ [g2 c3] ~")
  .sound("sawtooth")
  .lpf(sine.range(200, 800).slow(4))
  .lpq(5)
  .gain(0.9)

// Sub bass
note("<c1 c1 f1 g1>")
  .sound("sine")
  .gain(1.2)

// ========================================
// 5. EFFECTS EXAMPLES
// ========================================

// Reverb and delay
s("cp sd cp sd")
  .room(0.5)
  .delay(0.3)
  .delaytime(0.375)

// Filter sweeps
s("bd*4")
  .lpf(sine.range(200, 2000).slow(2))
  .lpq(10)

// Bit crushing
s("bd sd hh cp")
  .crush(4)
  .gain(1.2)

// Stereo panning
s("hh*8")
  .pan(saw.range(0, 1).slow(2))
  .gain(0.4)

// ========================================
// 6. PATTERN TRANSFORMATIONS
// ========================================

// Reverse every 4 cycles
s("bd sd hh cp")
  .every(4, rev())

// Sometimes fast
s("bd sd hh cp")
  .sometimes(x => x.fast(2))

// Rarely slow down
s("hh*8")
  .rarely(x => x.speed(0.5))

// Octave jumps with offset
note("c e g")
  .off(1/8, x => x.add(12).gain(0.6))

// Degraded hi-hats (random gaps)
s("hh*16")
  .degradeBy(0.4)
  .gain(0.3)

// ========================================
// 7. COMPLETE TRACK EXAMPLES
// ========================================

// EXAMPLE A: Minimal Techno
// -------------------------
setcps(0.55)

stack(
  // Kick
  s("bd(3,8)").bank("RolandTR909").gain(1.2),

  // Snare
  s("~ sd ~ sd").bank("RolandTR909").gain(0.9),

  // Hi-hats
  s("hh*8").bank("RolandTR909")
    .gain(0.3)
    .degradeBy(0.1),

  // Bass
  note("c2 ~ c2 ~ eb2 ~ g2 ~")
    .sound("sawtooth")
    .lpf(400)
    .lpq(3)
    .gain(0.8)
)

// EXAMPLE B: Melodic House
// -------------------------
setcps(0.5)

const drums = stack(
  s("bd ~ ~ ~ bd ~ ~ ~").gain(1.1),
  s("~ ~ sd ~ ~ ~ sd ~").gain(0.9),
  s("hh*8").gain(0.25),
  s("~ oh ~ ~ ~ oh ~ ~").gain(0.6)
).bank("RolandTR909")

const bass = note("c2 ~ [c2 eb2] ~ g2 ~ [g2 c3] ~")
  .sound("sawtooth")
  .lpf(600)
  .gain(0.9)

const melody = n("0 2 4 7 9 7 4 2")
  .scale("C:minor:pentatonic")
  .sound("piano")
  .room(0.4)
  .delay(0.25)
  .off(1/8, x => x.add(12).gain(0.4))
  .every(4, rev())

stack(drums, bass, melody)

// EXAMPLE C: Ambient
// ------------------
setcps(0.3)

stack(
  // Pad
  chord("<Cm7 Fm7 Gm7 Bb7>")
    .sound("sawtooth")
    .lpf(800)
    .room(0.8)
    .gain(0.6)
    .slow(4),

  // High melody
  n("0 2 4 6 7 9 11 7")
    .scale("C:minor")
    .sound("sine")
    .add(48)
    .room(0.9)
    .delay(0.5)
    .gain(0.4)
    .slow(2),

  // Bass pulse
  note("c1")
    .sound("sine")
    .every(3, x => x.transpose(5))
    .gain(0.7)
)

// EXAMPLE D: Breakbeat
// --------------------
setcps(0.6)

stack(
  // Amen break-style pattern
  s("bd [~ sd] [bd bd] [~ sd]")
    .bank("RolandTR909")
    .sometimes(x => x.speed(0.5)),

  // Hi-hats with variation
  s("hh*8")
    .bank("RolandTR909")
    .gain(0.3)
    .sometimes(x => x.speed(2)),

  // Bass
  note("c2 ~ c2 eb2 ~ g2 ~ c3")
    .sound("sawtooth")
    .lpf(700)
    .crush(3)
)

// EXAMPLE E: Experimental
// -----------------------
setcps(0.45)

stack(
  // Glitchy drums
  s("bd sd").iter(4)
    .sometimes(x => x.speed("<1 2 0.5>")),

  // Degraded hi-hats
  s("hh*16").degradeBy(0.7).gain(0.3),

  // Random melody
  n(run(8))
    .scale("<C:minor D:dorian Eb:major F:minor>".slow(4))
    .sound("square")
    .lpf(sine.range(400, 2000))
    .room(0.5)
    .jux(rev())
)

// ========================================
// 8. TEMPO VARIATIONS
// ========================================

// Slow (60 BPM)
setcps(60/60/4)

// Medium (120 BPM)
setcps(120/60/4)

// Fast (140 BPM)
setcps(140/60/4)

// Techno (128 BPM)
setcps(128/60/4)

// House (124 BPM)
setcps(124/60/4)

// D&B (170 BPM)
setcps(170/60/4)

// ========================================
// 9. ADVANCED PATTERN TECHNIQUES
// ========================================

// Polymetric patterns
stack(
  s("bd*3"),      // 3 kicks per cycle
  s("sd*4"),      // 4 snares per cycle
  s("hh*5").gain(0.3)  // 5 hi-hats per cycle
)

// Nested subdivisions
s("bd [sd cp] hh [cp [bd sd]]")

// Alternating patterns
s("<[bd sd bd sd] [bd bd sd sd]>")

// Conditional transformations
s("bd sd hh cp")
  .every(2, x => x.fast(2))
  .every(4, rev())
  .sometimes(x => x.gain(1.5))

// Complex layering
note("c e g").layer(
  x => x,                    // original
  x => x.add(7),            // fifth above
  x => x.add(12),           // octave above
  x => x.sub(12).gain(0.5)  // octave below (quieter)
).sound("sawtooth").lpf(1000)

// ========================================
// 10. USING CUSTOM SAMPLES
// ========================================

// Load from URL
samples({
  mykick: 'https://example.com/samples/kick.wav',
  mysnare: 'https://example.com/samples/snare.wav'
})

// Use them
s("mykick mysnare mykick mysnare")

// Load from GitHub
samples('github:yaxu/clean-breaks')
s("break:0 break:1 break:2")

// ========================================
// 11. LIVE CODING PERFORMANCE PATTERNS
// ========================================

// Start minimal, build up by uncommenting

const drums = stack(
  s("bd ~ ~ ~ bd ~ ~ ~"),
  // s("~ ~ sd ~ ~ ~ sd ~"),
  // s("hh*8").gain(0.3),
)

const bass = note("c2 ~ c2 ~")
  .sound("sawtooth")
  .lpf(500)
  // .lpf(sine.range(300, 800).slow(4))

const melody = n("0 2 4")
  .scale("C:minor")
  // .scale("<C:minor D:dorian>".slow(8))
  .sound("piano")
  // .room(0.4)
  // .delay(0.3)

stack(
  drums,
  bass,
  // melody
)

// ========================================
// 12. VISUALIZATIONS
// ========================================

// Piano roll
note("c d e f g a b c5")
  .pianoroll()

// With custom settings
note("c e g b")
  .pianoroll({
    cycles: 2,
    vertical: 1,
    fold: 1
  })

// ========================================
// 13. USEFUL PATTERNS FOR SONG STRUCTURE
// ========================================

// Intro (sparse)
stack(
  s("bd ~ ~ ~"),
  s("~ ~ ~ hh").gain(0.3)
)

// Build-up (add elements)
stack(
  s("bd ~ bd ~"),
  s("~ sd ~ sd"),
  s("hh*4").gain(0.3)
)

// Drop (full energy)
stack(
  s("bd ~ bd bd"),
  s("~ sd ~ sd"),
  s("hh*8").gain(0.3),
  note("c2 ~ c2 eb2 ~ g2 ~ c3").sound("sawtooth").lpf(600)
)

// Breakdown (minimal)
note("c e g c5")
  .sound("piano")
  .room(0.7)
  .slow(2)

// ========================================
// 14. HELPER PATTERNS
// ========================================

// Kick drum patterns
s("bd ~ ~ ~")              // four on the floor
s("bd ~ bd ~")             // two step
s("bd ~ ~ ~ bd ~ ~ bd")    // off-beat
s("bd(3,8)")               // Euclidean

// Snare patterns
s("~ sd ~ sd")             // backbeat
s("~ ~ sd ~")              // classic
s("~ sd ~ [sd sd]")        // with fill

// Hi-hat patterns
s("hh*8")                  // straight 8ths
s("hh*4")                  // straight quarters
s("hh [~ hh] hh [~ hh]")   // swung
s("hh*8").degradeBy(0.3)   // sparse

// Bass patterns
note("c2 ~ c2 ~")          // simple root
note("c2 ~ c2 eb2")        // with third
note("c2 ~ [c2 g2] ~")     // with fifth
note("c2 ~ c3 c2")         // octave jump

// ========================================
// 15. STOP EVERYTHING
// ========================================

hush()

// ========================================
// TIPS FOR LIVE CODING:
// ========================================
// 1. Start with drums, add bass, then melody
// 2. Use comments (//) to toggle parts on/off (cmd-/)
// 3. Keep it simple - complex patterns can be hard to type live
// 4. Use variables to store patterns for reuse
// 5. Build up slowly - add one element at a time
// 6. Use .every(), .sometimes() for variation
// 7. Don't be afraid to delete and restart
// 8. Listen and respond to what you hear
// 9. Practice common patterns so you can type them quickly
// 10. Have fun and experiment!

// ========================================
// READY TO CREATE?
// ========================================
// Copy any of these examples to https://strudel.cc/
// Modify them, combine them, make them your own!
// Happy live coding! 🎵
