// WINTER_ETERNAL
// Atmospheric Black Metal - Traditional Style
// 150 BPM, E Minor
// "Cold and beautiful, heavy but melodic. Real black metal."

setcps(150/60/4)

// ==== SONG STRUCTURE ====
// Intro (30s) → Verse 1 → Chorus → Verse 2 → Bridge → Climax → Outro
// Focus: Memorable melodies, clear dynamics, emotional arc

// ==== SECTION MASKS ====
const introMask = "<1 1 1 1 0 0 0 0 0 0>".slow(32)
const verse1Mask = "<0 0 0 0 1 0 0 0 0 0>".slow(32)
const chorusMask = "<0 0 0 0 0 1 0 0 0 0>".slow(32)
const verse2Mask = "<0 0 0 0 0 0 1 0 0 0>".slow(32)
const bridgeMask = "<0 0 0 0 0 0 0 1 0 0>".slow(32)
const climaxMask = "<0 0 0 0 0 0 0 0 1 0>".slow(32)
const outroMask = "<0 0 0 0 0 0 0 0 0 1>".slow(32)

// ==== INTRO: CLEAN TREMOLO ARPEGGIOS (30 seconds) ====
// Progression: Em - Gmaj7 - Am7 - Bsus4
const cleanIntro = note("<\
  [e4 g4 b4 g4] [g4 b4 d5 f5] [a4 c5 e5 c5] [b4 e5 f5 e5],\
  [e4 g4 b4 g4] [g4 b4 d5 f5] [a4 c5 e5 c5] [b4 e5 f5 e5],\
  [e4 g4 b4 g4] [g4 b4 d5 f5] [a4 c5 e5 c5] [b4 e5 f5 e5],\
  [e4 g4 b4 g4] [g4 b4 d5 f5] [a4 c5 e5 c5] [b4 e5 f5 e5]\
>".slow(4))
  .sound("gtr")
  .lpf(4000)
  .gain(0.25)
  .room(0.9)
  .size(0.95)
  .delay(0.4)
  .delaytime(0.375)
  .delayfeedback(0.6)
  .fast(4)
  .mask(introMask)

// ==== VERSE 1: BLAST BEATS + POWER CHORDS + CLEAN ARPEGGIOS ====
// Mid-tempo blast beats
const verse1Drums = stack(
  s("bd*4").gain(0.9).crush(5),
  s("[~ sd]*2").gain(0.7).crush(5),
  s("hh*8").gain(0.3).lpf(6000)
).mask(verse1Mask)

// Power chord rhythm (Em - G5 - Am - B5)
const powerChords = note("<\
  ~,\
  ~,\
  ~,\
  ~,\
  [e2 e2 e2 ~] [g2 g2 g2 ~] [a2 a2 a2 ~] [b2 b2 b2 ~],\
  ~,\
  ~,\
  ~,\
  ~,\
  ~\
>".slow(8))
  .sound("sawtooth")
  .lpf(1200)
  .gain(0.35)
  .room(0.5)
  .crush(4)

// Clean arpeggios continue
const cleanVerse = note("[e4 g4 b4 g4] [g4 b4 d5 f5] [a4 c5 e5 c5] [b4 e5 f5 e5]")
  .sound("gtr")
  .lpf(4000)
  .gain(0.2)
  .room(0.9)
  .size(0.95)
  .delay(0.4)
  .delaytime(0.375)
  .delayfeedback(0.6)
  .fast(4)
  .mask(verse1Mask)

// Bass following root notes
const bassVerse = note("<e1 g1 a1 b1>")
  .sound("sawtooth")
  .lpf(300)
  .gain(0.4)
  .slow(4)
  .mask(verse1Mask)

// ==== CHORUS: STRIPPED DRUMS + MEMORABLE LEAD MELODY ====
// Just ride and kick on quarters
const chorusDrums = stack(
  s("bd ~ bd ~").gain(0.8),
  s("hh:3*4").gain(0.35).lpf(5000)
).mask(chorusMask)

// Memorable lead melody (E natural minor scale, phrased musically)
const chorusLead = note("<\
  ~,\
  ~,\
  ~,\
  ~,\
  ~,\
  [e5 ~ g5 a5] [b5 ~ a5 g5] [a5 ~ g5 fs5] [e5 ~ ~ ~],\
  ~,\
  ~,\
  ~,\
  ~\
>".slow(8))
  .sound("sine")
  .lpf(5000)
  .gain(0.3)
  .room(0.8)
  .size(0.9)
  .delay(0.5)
  .delaytime(0.375)
  .delayfeedback(0.7)

// Power chords continue but breathe
const chorusChords = note("<e2 g2 a2 b2>")
  .sound("sawtooth")
  .lpf(1200)
  .gain(0.3)
  .room(0.6)
  .crush(4)
  .slow(4)
  .mask(chorusMask)

// ==== VERSE 2: FULL BLAST + COUNTER-MELODY ====
const verse2Drums = stack(
  s("bd*4").gain(0.9).crush(5),
  s("[~ sd]*2").gain(0.7).crush(5),
  s("hh*8").gain(0.3).lpf(6000)
).mask(verse2Mask)

// Main melody
const verse2Main = note("[e4 g4 b4 g4] [g4 b4 d5 f5] [a4 c5 e5 c5] [b4 e5 f5 e5]")
  .sound("sawtooth")
  .lpf(2000)
  .gain(0.25)
  .room(0.7)
  .fast(4)
  .mask(verse2Mask)

// Counter-melody in parallel harmony (thirds and sixths)
const verse2Counter = note("[g4 b4 d5 b4] [b4 d5 f5 a5] [c5 e5 g5 e5] [d5 g5 a5 g5]")
  .sound("sawtooth")
  .lpf(2200)
  .gain(0.2)
  .room(0.7)
  .fast(4)
  .mask(verse2Mask)

const bassVerse2 = note("<e1 g1 a1 b1>")
  .sound("sawtooth")
  .lpf(300)
  .gain(0.4)
  .slow(4)
  .mask(verse2Mask)

// ==== BRIDGE: HALF-TIME + MOURNFUL SOLO ====
// Sparse drums (half-time feel)
const bridgeDrums = stack(
  s("bd ~ ~ ~").gain(0.7),
  s("~ ~ sd ~").gain(0.6)
).mask(bridgeMask)

// Mournful solo (E minor pentatonic: E G A B D)
const bridgeSolo = note("<\
  ~,\
  ~,\
  ~,\
  ~,\
  ~,\
  ~,\
  ~,\
  [e5 ~ g5 ~] [a5 ~ b5 ~] [d6 ~ b5 ~] [a5 ~ g5 ~],\
  ~,\
  ~\
>".slow(8))
  .sound("sine")
  .lpf(4000)
  .gain(0.35)
  .room(0.9)
  .size(0.95)
  .delay(0.6)
  .delaytime(0.5)
  .delayfeedback(0.75)

// Bass continues
const bassBridge = note("<e1 ~ a1 ~>")
  .sound("sawtooth")
  .lpf(250)
  .gain(0.45)
  .slow(8)
  .mask(bridgeMask)

// ==== CLIMAX: EVERYTHING TOGETHER (16 bars) ====
const climaxDrums = stack(
  s("bd*4").gain(1.0).crush(5),
  s("[~ sd]*2").gain(0.8).crush(5),
  s("hh*8").gain(0.35).lpf(6000)
).mask(climaxMask)

// Verse riff
const climaxRhythm = note("[e2 e2 e2 ~] [g2 g2 g2 ~] [a2 a2 a2 ~] [b2 b2 b2 ~]")
  .sound("sawtooth")
  .lpf(1200)
  .gain(0.35)
  .room(0.5)
  .crush(4)
  .mask(climaxMask)

// Chorus melody on top
const climaxMelody = note("[e5 ~ g5 a5] [b5 ~ a5 g5] [a5 ~ g5 fs5] [e5 ~ ~ ~]")
  .sound("sine")
  .lpf(5000)
  .gain(0.3)
  .room(0.8)
  .delay(0.5)
  .delaytime(0.375)
  .delayfeedback(0.7)
  .mask(climaxMask)

// Clean arpeggios layer
const climaxClean = note("[e4 g4 b4 g4] [g4 b4 d5 f5] [a4 c5 e5 c5] [b4 e5 f5 e5]")
  .sound("gtr")
  .lpf(4000)
  .gain(0.2)
  .room(0.9)
  .fast(4)
  .mask(climaxMask)

const bassClimax = note("<e1 g1 a1 b1>")
  .sound("sawtooth")
  .lpf(300)
  .gain(0.45)
  .slow(4)
  .mask(climaxMask)

// ==== OUTRO: MIRROR INTRO WITH GENTLE DRUMS ====
const outroArpeggio = note("[e4 g4 b4 g4] [g4 b4 d5 f5] [a4 c5 e5 c5] [b4 e5 f5 e5]")
  .sound("gtr")
  .lpf(4000)
  .gain(0.25)
  .room(0.95)
  .size(0.98)
  .delay(0.5)
  .delaytime(0.375)
  .delayfeedback(0.7)
  .fast(4)
  .mask(outroMask)

// Gentle distorted layer
const outroDistorted = note("<[e3 g3 b3] [g3 b3 d4] [a3 c4 e4] [b3 e4 f4]>")
  .sound("sawtooth")
  .lpf(1500)
  .gain(0.2)
  .room(0.8)
  .slow(4)
  .mask(outroMask)

// Gentle drums
const outroDrums = stack(
  s("bd ~ ~ ~").gain(0.5),
  s("hh*4").gain(0.2).lpf(4000)
).mask(outroMask)

// Sustained Em chord (fade)
const outroSustain = note("e2")
  .sound("sawtooth")
  .lpf(800)
  .gain(sine.range(0.3, 0.05).slow(16))
  .room(0.95)
  .size(0.98)
  .mask(outroMask)

// ==== MASTER MIX ====
stack(
  // INTRO
  cleanIntro,

  // VERSE 1
  verse1Drums,
  powerChords,
  cleanVerse,
  bassVerse,

  // CHORUS
  chorusDrums,
  chorusLead,
  chorusChords,

  // VERSE 2
  verse2Drums,
  verse2Main,
  verse2Counter,
  bassVerse2,

  // BRIDGE
  bridgeDrums,
  bridgeSolo,
  bassBridge,

  // CLIMAX
  climaxDrums,
  climaxRhythm,
  climaxMelody,
  climaxClean,
  bassClimax,

  // OUTRO
  outroArpeggio,
  outroDistorted,
  outroDrums,
  outroSustain
).gain(0.8)
  .room(0.3)  // More reverb than aggressive track, less than ambient
  .size(0.7)
