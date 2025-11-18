/*
@title Neural Collapse
@by Claude & Human
@license CC BY-NC-SA
@details Black metal/industrial/indie outsider
Concept: A neural network's catastrophic failure when encountering
input far outside its training distribution
*/

// ========================================
// NEURAL COLLAPSE - Black Metal/Industrial
// 185 BPM, E Phrygian (E F G A B C D)
// ========================================

setcps(185/60/4)  // 185 BPM converted to cycles per second

// ========================================
// SECTION 1: CORRUPTED INTRO (Atmospheric)
// Single arpeggio building into wrongness
// ========================================

const intro = stack(
  // Corrupted arpeggio - the "before" state
  n("0 3 7 10 12 10 7 3")
    .scale("E:phrygian")
    .add(24)  // high register
    .sound("square")
    .lpf(sine.range(400, 1200).slow(2))
    .room(0.7)
    .gain(0.6)
    .degradeBy(0.1)  // slight glitching
    .slow(2),

  // Ominous sub drone
  note("e1")
    .sound("sine")
    .gain(0.5)
    .slow(4),

  // Distant corrupted noise
  s("white")
    .gain(0.15)
    .lpf(300)
    .hpf(8000)
    .room(0.9)
)

// ========================================
// SECTION 2: FIRST VERSE - Full Intensity
// Blast beats + dual tremolo riffs
// ========================================

const blastBeats = stack(
  // Double bass/kick - relentless
  s("bd*8")
    .bank("RolandTR909")
    .speed("<1 1.1 0.9>")  // slight variation
    .gain(1.3)
    .crush(5)  // digital brutality
    .coarse(4),

  // Snare on 2 and 4 (blast beat style)
  s("~ sd ~ sd ~ sd ~ sd")
    .bank("RolandTR909")
    .gain(1.1)
    .crush(6)
    .sometimes(x => x.speed(1.5)),

  // Harsh hi-hats
  s("hh*16")
    .gain(0.4)
    .crush(8)
    .degradeBy(0.2)  // some chaos
    .pan(saw.range(0, 1).fast(4))  // disorienting pan
)

const mainRiff = n("0 0 3 1 0 -2 3 1")
  .scale("E:phrygian")
  .add(12)  // octave up
  .sound("sawtooth")
  .lpf(1200)
  .lpq(8)  // harsh resonance
  .gain(0.9)
  .crush(4)
  .fast(2)  // tremolo picking speed

const counterRiff = n("0 0 3 1 0 -2 3 1")
  .scale("E:phrygian")
  .add(18)  // tritone up for maximum dissonance
  .transpose(6)  // additional dissonance
  .sound("sawtooth")
  .lpf(800)
  .lpq(10)
  .gain(0.7)
  .crush(5)
  .fast(2)
  .pan(0.2)  // different stereo position

const subBass = note("e1 ~ e1 ~ e1 e1 ~ ~")
  .sound("sine")
  .gain(1.1)

const verse1 = stack(
  blastBeats,
  mainRiff,
  counterRiff,
  subBass
)

// ========================================
// SECTION 3: BREAKDOWN - Neural Pathway Collapsing
// Everything drops except industrial kick and clean melody
// ========================================

const industrialKick = s("bd ~ ~ bd ~ bd ~ ~")
  .bank("RolandTR909")
  .gain(1.4)
  .crush(3)
  .room(0.3)

const collapseMelody = n("7 5 3 1 0 -2 -4 -5")
  .scale("E:phrygian")
  .add(36)  // very high, fragile
  .sound("sine")
  .attack(0.01)
  .release(0.4)
  .room(0.8)
  .delay(0.4)
  .delaytime(0.375)
  .gain(0.7)
  .slow(2)

const breakdown = stack(
  industrialKick,
  collapseMelody,
  // Distant memory of the riff
  mainRiff.gain(0.2).lpf(400).room(0.9).slow(4)
)

// ========================================
// SECTION 4: SECOND VERSE - Evolved Chaos
// Full intensity returns with variations + 8-bit lead
// ========================================

const evolvedRiff = n("0 3 1 0 -2 0 3 5")
  .scale("E:phrygian")
  .add(12)
  .sound("sawtooth")
  .lpf(sine.range(800, 1600).fast(2))
  .lpq(12)
  .gain(0.9)
  .crush(5)
  .fast(2)

const bitLead = n("12 14 15 14 12 10 8 7")
  .scale("E:phrygian")
  .add(24)
  .sound("square")
  .lpf(2000)
  .gain(0.6)
  .crush(8)  // maximum 8-bit character
  .delay(0.25)

const verse2 = stack(
  blastBeats.sometimes(x => x.fast(2)),  // even more intense
  evolvedRiff,
  counterRiff.transpose(3),  // different dissonance
  bitLead,
  subBass
)

// ========================================
// SECTION 5: CLIMACTIC BRIDGE
// Descending chromatic chaos - consciousness fragmenting
// ========================================

const chromaticLead = n("12 11 10 9 8 7 6 5 4 3 2 1 0")
  .scale("E:chromatic")
  .add(24)
  .sound("square")
  .lpf(1500)
  .gain(0.8)
  .crush(6)
  .delay(0.5)
  .delaytime("<0.25 0.375>")
  .every(2, rev())  // fragments reversing

const chaosBeats = stack(
  s("bd*16").gain(1.2).crush(4).degradeBy(0.3),  // chaotic kick
  s("sd*8").gain(0.9).crush(7).degradeBy(0.5),   // fragmenting snare
  s("hh*32").gain(0.3).crush(8).degradeBy(0.6)   // noise dissolving
)

const bridge = stack(
  chaosBeats,
  chromaticLead,
  mainRiff.gain(0.7).fast(4),  // hyper-speed riff
  counterRiff.gain(0.6).fast(4),
  subBass.gain(1.3)
)

// ========================================
// SECTION 6: DECONSTRUCTION OUTRO
// Back to arpeggio but heavily corrupted
// ========================================

const corruptedArpeggio = n("0 3 7 10 12 10 7 3")
  .scale("E:phrygian")
  .add(24)
  .sound("square")
  .lpf(400)
  .crush(8)  // heavily degraded
  .coarse(8)  // wrong sample rate
  .gain(0.7)
  .degradeBy(0.4)  // lots of missing notes
  .sometimes(x => x.transpose(13))  // wrong notes
  .room(0.9)
  .slow(2)

const glitchNoise = s("white pink")
  .gain(0.25)
  .lpf(sine.range(200, 2000))
  .crush(4)
  .degradeBy(0.7)

const outro = stack(
  corruptedArpeggio,
  glitchNoise,
  note("e1").sound("sine").gain(0.3).slow(8),  // fading drone
  // Ghost of the blast beat
  s("bd*8").gain(0.3).crush(8).degradeBy(0.8)
)

// ========================================
// FULL SONG STRUCTURE
// Comment/uncomment sections for live performance
// ========================================

// INTRO (8 cycles)
// intro

// VERSE 1 (8 cycles)
// verse1

// BREAKDOWN (4 cycles)
// breakdown

// VERSE 2 (8 cycles)
// verse2

// BRIDGE (8 cycles)
// bridge

// BREAKDOWN REPRISE (4 cycles)
// breakdown

// OUTRO (8 cycles)
// outro

// ========================================
// FULL ARRANGEMENT (use this for complete playthrough)
// ========================================

cat(
  intro.slow(8),
  verse1.slow(8),
  breakdown.slow(4),
  verse2.slow(8),
  bridge.slow(8),
  breakdown.slow(4),
  outro.slow(8)
)

// ========================================
// ALTERNATIVE: MINIMAL VERSION (for testing)
// ========================================

/*
setcps(185/60/4)

stack(
  s("bd*8").crush(5).coarse(4).gain(1.2),
  s("~ sd ~ sd").crush(6).gain(0.9),
  s("hh*16").gain(0.3).crush(8).degradeBy(0.2),
  n("0 0 3 1 0 -2 3 1").scale("E:phrygian")
    .sound("sawtooth")
    .lpf(1200)
    .lpq(8)
    .crush(4)
    .fast(2)
    .gain(0.8),
  note("e1").sound("sine").gain(1.0)
)
*/

// ========================================
// PERFORMANCE NOTES:
// ========================================
// - Use hush() to stop everything
// - Start with just intro to set mood
// - Build up section by section
// - The crush() and coarse() values can be adjusted for more/less brutality
// - Adjust gain() values to balance mix
// - The .degradeBy() values control how glitchy/chaotic things get
// - BPM can be adjusted: setcps(YOUR_BPM/60/4)
//
// For live coding:
// 1. Start with intro
// 2. Gradually add verse1 elements one at a time
// 3. Drop to breakdown for contrast
// 4. Build back up with verse2
// 5. Peak with bridge
// 6. Deconstruct with outro
//
// Theme achieved through:
// - Progressive bit-crushing = data corruption
// - Degradation = neural pathways failing
// - Chromatic descent = structured collapse
// - Return to arpeggio but "wrong" = corrupted memory
// ========================================
