# Comprehensive Guide to Strudel.cc Live Coding

## Table of Contents
1. [Introduction](#introduction)
2. [Getting Started](#getting-started)
3. [Core Concepts](#core-concepts)
4. [Mini Notation Syntax](#mini-notation-syntax)
5. [Pattern Creation Functions](#pattern-creation-functions)
6. [Sounds and Samples](#sounds-and-samples)
7. [Notes and Music Theory](#notes-and-music-theory)
8. [Audio Effects](#audio-effects)
9. [Pattern Manipulation](#pattern-manipulation)
10. [Time Modifiers](#time-modifiers)
11. [Conditional and Random Modifiers](#conditional-and-random-modifiers)
12. [Rhythm and Euclidean Patterns](#rhythm-and-euclidean-patterns)
13. [Control Parameters](#control-parameters)
14. [Tempo and Timing](#tempo-and-timing)
15. [MIDI, OSC, and SuperDirt](#midi-osc-and-superdirt)
16. [Advanced Techniques](#advanced-techniques)
17. [Live Performance Best Practices](#live-performance-best-practices)
18. [Complete Examples](#complete-examples)
19. [Resources and References](#resources-and-references)

---

## Introduction

**Strudel** is a music live coding environment for the browser that ports the TidalCycles pattern language to JavaScript. It allows you to create beats, melodies, and entire compositions by writing code directly in your browser - no installation required.

### What is Strudel?
- Web-based live coding tool initiated by Alex McLean and Felix Roos in 2022
- JavaScript implementation of TidalCycles algorithmic pattern language
- Runs entirely in the browser
- No need to know JavaScript or Tidal Cycles to make music
- Built-in samples and synthesizers
- Real-time pattern manipulation

### Access Strudel
- **Main Website**: https://strudel.cc/
- **REPL (Live Coding Environment)**: https://strudel.cc/
- **Documentation**: https://strudel.cc/workshop/getting-started/

---

## Getting Started

### Basic Structure
At the core of Strudel, everything is made of **functions**. The query function is not just a way to access a pattern, but is the pattern itself (functional programming principle).

### Your First Sound
```javascript
s("bd sd hh bd")
```
This plays: bass drum, snare drum, hi-hat, bass drum

### Your First Note
```javascript
note("c a f e")
```
This plays the notes C, A, F, E

### Playing Patterns
Patterns automatically loop and are divided into cycles. Use `.note()` to interpret strings as musical notes:
```javascript
note("c2 ~ c2 ~ e2 ~ g1 ~").sound("piano")
```

### Comments
```javascript
// This is a line comment

/* This is a
   block comment */
```

Use `cmd-/` (Mac) or `ctrl-/` (Windows/Linux) to toggle comments quickly.

### Stopping Sound
```javascript
hush()  // Stops all sounds
```
Keyboard shortcut: `Ctrl + .` (period)

---

## Core Concepts

### Cycles
Everything in Strudel is organized in **cycles**. A cycle is one loop iteration. Patterns repeat every cycle.

### Chaining Functions
Strudel makes heavy use of **chained functions** (methods preceded by a dot):
```javascript
s("hh*4")
  .note("c4(5,8)")
  .gain(0.5)
  .lpf(800)
```

### Double vs Single Quotes
- **Double quotes** `"..."`: Parse strings using mini-notation
- **Single quotes** `'...'`: Regular strings, not parsed as patterns

---

## Mini Notation Syntax

Mini-notation is a custom language designed for writing rhythmic patterns with minimal text.

### Basic Separation
**Spaces** separate notes and squash them into one cycle:
```javascript
s("bd sd hh cp")  // 4 sounds evenly distributed
```

### Rests
Use `~` for silence/rest:
```javascript
s("bd ~ sd ~")  // bass drum, rest, snare, rest
```

### Subsequences with Square Brackets `[ ]`
Square brackets create subdivisions - nest events inside one step:
```javascript
s("bd [sd cp] hh")  // sd and cp share one step
```

Stack events to play simultaneously:
```javascript
s("[bd sd]")  // play bd and sd at the same time
```

### Sequential Groups with Angle Brackets `< >`
Play patterns sequentially (one per cycle):
```javascript
s("<bd sd hh cp>")  // plays bd on cycle 1, sd on cycle 2, etc.
```

### Repetition with `*`
Repeat patterns:
```javascript
s("bd*4")  // plays bass drum 4 times per cycle
s("bd [sd cp]*2")  // plays bd once, then [sd cp] twice
```

### Slow Down with `/`
Divide patterns to slow them down:
```javascript
s("bd/2")  // plays bass drum every 2 cycles (half speed)
```

### Euclidean Rhythms `(beats, segments, offset)`
Express rhythms like "3 beats over 8 segments":
```javascript
s("bd(3,8)")  // 3 bass drums distributed over 8 steps
s("bd(3,8,1)")  // same but starting on position 1
```

### Polyrhythms
Combine different rhythmic rates:
```javascript
s("{bd bd bd, cp cp cp cp}")  // 3 bass drums vs 4 claps
```

### Choice `!`
Replicate an element:
```javascript
note("c!2 [eb,<g a bb a>]")  // c plays twice
```

---

## Pattern Creation Functions

### `seq()` / `fastcat()`
Items are crammed into one cycle:
```javascript
seq("e5", "b4", ["d5", "c5"]).note()
```

### `stack()` / `polyrhythm()` / `pr()`
Items play simultaneously:
```javascript
stack(
  s("bd sd bd sd"),
  s("hh*8").gain(0.3),
  note("c2 e2 g2")
)
```

Equivalent to:
```javascript
stack("g3", "b3", ["e4", "d4"]).note()
```

### `cat()` / `slowcat()`
Each item takes one full cycle:
```javascript
cat("bd", "sd", "hh")  // bd in cycle 1, sd in cycle 2, etc.
```

### Chained Versions
```javascript
s("hh*4").seq(note("c4(5,8)"))
s("hh*4").stack(note("c4(5,8)"))
```

---

## Sounds and Samples

### Using `.s()` or `.sound()`
```javascript
s("bd sd hh cp")  // use samples
note("c d e f").sound("piano")  // use piano sound
```

### Default Sounds
If you don't set a sound but use `note()`, the default is **triangle** waveform.

### Waveforms
Basic waveforms: `sine`, `sawtooth`, `square`, `triangle`
```javascript
note("c3 e3 g3").sound("sawtooth")
```

Noise types: `white`, `pink`, `brown`
```javascript
s("white pink brown")
```

### ZZFX Synth Waveforms
`z_sawtooth`, `z_tan`, `z_noise`, `z_sine`, `z_square`

### Accessing Samples
Use `n()` to select sample variations:
```javascript
s("bd").n(0)  // first bass drum sample
s("bd").n("<0 1 2>")  // cycle through samples
```

### Viewing Available Samples
Open the **sounds tab** in the REPL to see:
- **Samples**: Categorized sample collections
- **Drum Machines**: RolandTR808, RolandTR909, etc.
- **Synths**: Built-in synthesizers
- **Wavetables**: Wavetable sounds
- **User/Import**: Custom imported sounds

Numbers next to names indicate sample count:
```
RolandTR909_hh(4)  // 4 hi-hat variations available
```

### Using Drum Machine Banks with `.bank()`
```javascript
s("bd sd hh").bank("RolandTR909")
```

Equivalent to:
```javascript
s("RolandTR909_bd RolandTR909_sd RolandTR909_hh")
```

### Built-in Sample Libraries
- **tidal-drum-machines**: Comprehensive drum machine samples
- **VCSL**: Instrument samples
- **Dirt-Samples**: TidalCycles sample library

### Loading Custom Samples

#### From URL:
```javascript
samples({
  conga: ['https://example.com/samples/conga.wav']
})
```

#### From GitHub:
```javascript
samples('github:yaxu/clean-breaks')

// With custom mapping:
samples({
  bd: 'bd/BT0AADA.wav',
  sd: 'sd/rytm-01-classic.wav',
}, 'github:tidalcycles/Dirt-Samples/master/')
```

#### From Local Disk:
1. Open the **sounds tab** in REPL
2. Open **import-sounds** tab
3. Press "import sounds folder"
4. Select a folder with audio files

#### Loading Default Samples:
```javascript
async function loadSamples() {
  const ds = "https://raw.githubusercontent.com/felixroos/dough-samples/main/";
  return Promise.all([
    samples(`${ds}/tidal-drum-machines.json`),
    samples(`${ds}/piano.json`),
    samples(`${ds}/Dirt-Samples.json`),
  ]);
}
```

---

## Notes and Music Theory

### Note Names
Use standard note names with octave numbers:
```javascript
note("c3 d3 e3 f3 g3 a3 b3 c4")
```

Use `#` for sharps, `b` for flats:
```javascript
note("c# d# f# g# a#")
note("db eb gb ab bb")
```

### Scales
Apply scales with `.scale()`:
```javascript
n("0 2 4 6").scale("C:major")
n("0 2 4 6").scale("A2:minor")
n("0 2 4 6").scale("D:dorian")
n("0 2 4 6").scale("G:mixolydian")
n("0 2 4 6").scale("A2:minor:pentatonic")
n("0 2 4 6").scale("F:major:pentatonic")
```

Scales available include: major, minor, dorian, mixolydian, pentatonic, and over 40 other scale types.

### Chords
Use chord notation:
```javascript
chord("<C^7 A7b13 Dm7 G7>")
```

Chord voicings automatically generate smooth voice leading.

### Transposition

#### By Semitones:
```javascript
note("c e g").transpose(2)  // up 2 semitones
note("c e g").transpose(-7)  // down 7 semitones
note("c e g").transpose("<0 -7>".slow(3))  // alternate
```

#### Within Scale:
```javascript
n("0 2 4").scale("C:major").scaleTranspose(1)  // up 1 scale degree
```

### Creating Custom Control Parameters
```javascript
const { x, y } = createParams('x', 'y')
```

---

## Audio Effects

### Filters

#### Low-Pass Filter (lpf):
Cuts high frequencies:
```javascript
s("bd sd").lpf(1000)  // cutoff at 1000 Hz
s("bd sd").lpf(1000).lpq(5)  // with resonance
```

#### High-Pass Filter (hpf):
Cuts low frequencies:
```javascript
s("bd sd").hpf(500)
s("bd sd").hpf(500).hpq(3)
```

Frequencies audible between 0-20000 Hz.

### Distortion and Bit Crushing

#### `.crush()`:
Bit crushing effect:
```javascript
s("bd sd").crush(4)
```

#### `.coarse()`:
Sample rate reduction (Chromium browsers only):
```javascript
s("bd sd").coarse(2)  // half sample rate
s("bd sd").coarse(3)  // third sample rate
```

### Delay
```javascript
s("bd sd hh cp").delay(0.5)  // delay amount
s("bd sd hh cp").delay(0.5).delaytime("0.25 0.5")  // delay time
```

### Reverb

#### `.room()`:
Reverb amount:
```javascript
s("bd sd").room(0.5)  // 50% reverb
```

#### `.size()`:
Room size:
```javascript
s("bd sd").room(0.5).size(0.8)
```

### Other Effects
- **Bandpass filter**: `.bpf()`
- **Vowel filter**: `.vowel()`
- **Waveshape distortion**: `.shape()`
- **Tremolo**: `.tremolo()`
- **Compressor**: `.compress()`
- **Phaser**: `.phaser()`

### Dry/Wet Mix
Control effect balance:
```javascript
s("bd sd").room(0.5).dry(0.7)  // more dry signal
```

### Signal Chain
Sound splits into:
1. **Dry output** (`.dry()`)
2. **Delay** (`.delay()`)
3. **Reverb** (`.room()`)

All joined into the "orbit" of the pattern.

---

## Pattern Manipulation

### Mathematical Operations

#### `.add()`:
Add to values:
```javascript
note("c e g").add(2)  // transpose up 2 semitones
```

#### `.sub()`:
Subtract from values:
```javascript
note("c e g").sub(2)
```

#### `.mul()`:
Multiply values:
```javascript
n("0 1 2 3").mul(2)
```

#### `.div()`:
Divide values:
```javascript
n("0 2 4 6").div(2)
```

### Pattern Reversal

#### `.rev()`:
Reverse the pattern:
```javascript
s("bd sd hh cp").rev()
```

### Pattern Offset

#### `.off()`:
Apply transformation at time offset:
```javascript
note("c e g")
  .off(1/8, x => x.add(12))  // octave up delayed by 1/8

s("bd sd").off(1/8, x => x.add(12).degradeBy(0.5))
```

### Stereo Effects

#### `.jux()`:
Apply transformation to one stereo channel:
```javascript
s("bd sd hh cp").jux(rev())
```

### Pattern Division

#### `.iter()`:
Divides pattern into subdivisions, incrementing start each cycle:
```javascript
s("bd sd hh cp").iter(4)
```

#### `.chunk()`:
Like iter but in reverse order:
```javascript
s("bd sd hh cp").chunk(4)
```

### Layering

#### `.layer()`:
Like superimpose but without original:
```javascript
note("c e g").layer(
  x => x.add(7),
  x => x.add(12)
)
```

### Masking

#### `.mask()`:
Return silence when mask is 0 or ~:
```javascript
note("c [eb,g] d [eb,g]").mask("<1 [0 1]>")
```

#### `.struct()`:
Apply binary rhythmic structure:
```javascript
s("bd").struct("1 0 0 1 0 0 1 0")
```

---

## Time Modifiers

### `.fast()` and `.slow()`
Speed up or slow down patterns:
```javascript
s("bd sd hh cp").fast(2)  // twice as fast
s("bd sd hh cp").slow(2)  // half speed
```

### `.early()` and `.late()`
Shift pattern timing:
```javascript
s("bd sd hh cp").early(0.125)  // start earlier
s("bd sd hh cp").late(0.125)   // start later
```

---

## Conditional and Random Modifiers

### `.every()`
Apply transformation every N cycles:
```javascript
s("bd sd hh cp").every(4, rev())
s("bd sd hh cp").every(3, x => x.fast(2))
```

### `.sometimes()`
Apply with 50% probability:
```javascript
s("bd sd hh cp").sometimes(x => x.speed(0.5))
```

### `.sometimesBy()`
Apply with custom probability:
```javascript
s("bd sd hh cp").sometimesBy(0.25, x => x.speed(2))
```

### Probability Shortcuts
```javascript
.rarely(fn)        // 25% chance (.sometimesBy(0.25))
.almostNever(fn)   // 10% chance (.sometimesBy(0.1))
.almostAlways(fn)  // 90% chance (.sometimesBy(0.9))
.never(fn)         // 0% chance
.always(fn)        // 100% chance
```

Example:
```javascript
s("hh*8").rarely(x => x.speed(0.5))
```

### `.degradeBy()`
Randomly remove events:
```javascript
s("hh*8").degradeBy(0.5)  // 50% chance each step is skipped
```

---

## Rhythm and Euclidean Patterns

### Euclidean Rhythms
Distribute N beats over M steps:
```javascript
s("bd(3,8)")     // 3 beats over 8 steps
s("bd(5,8)")     // 5 beats over 8 steps
s("bd(3,8,1)")   // 3 beats over 8 steps, offset by 1
```

Classic techno groove:
```javascript
s("bd(3,8)")  // kick pattern
```

### Polyrhythms with `{ }`
Layer different rhythmic rates:
```javascript
s("{bd bd bd, cp cp cp cp}")  // 3 vs 4
```

### Complex Polyrhythmic Structures
Combine stack with Euclidean rhythms:
```javascript
stack(
  s("bd(3,8)"),
  s("sd(5,16)"),
  s("hh(7,16)").gain(0.3)
)
```

---

## Control Parameters

### `.gain()` and `.velocity()`
Control volume:
```javascript
s("bd sd hh cp").gain(0.8)
s("bd sd hh cp").velocity(0.9)
```

`.velocity()` multiplies with `.gain()`.

### `.pan()`
Stereo positioning (0 = left, 1 = right):
```javascript
s("bd sd").pan("<0 1>")  // alternate left/right
s("bd sd hh cp").pan("0 0.33 0.66 1")
```

### `.speed()`
Playback speed:
```javascript
s("bd").speed(1)     // normal
s("bd").speed(2)     // twice as fast (higher pitch)
s("bd").speed(0.5)   // half speed (lower pitch)
s("bd").speed(-1)    // backwards
```

### `.n`
Waveform harmonics or sample selection:
```javascript
note("c").sound("sawtooth").n(5)  // limit overtones
s("bd").n("<0 1 2>")  // cycle through samples
```

### ADSR Envelope

#### `.attack()`:
Time to reach peak:
```javascript
note("c e g").sound("sawtooth").attack(0.1)
```

#### `.decay()`:
Time to decay to sustain level:
```javascript
note("c e g").sound("sawtooth").decay(0.2)
```

#### `.sustain()`:
Sustain level and total duration:
```javascript
note("c e g").sound("sawtooth").sustain(0.5)
```

#### `.release()`:
Release time:
```javascript
note("c e g").sound("sawtooth").release(0.3)
```

### `.cut()` and `.cutgroup()`
Stop previous sample when new one plays (drum machine style):
```javascript
s("hh oh").cut(1)  // open hi-hat cuts when closed plays
```

### `.legato()`
Override sample duration (multiple of inter-onset time):
```javascript
s("bd sd").legato(0.5)  // ends halfway to next event
s("bd sd").legato(1)    // ends when next starts
s("bd sd").legato(2)    // overlaps fully with next
```

---

## Tempo and Timing

### Set Cycles Per Second (CPS)
```javascript
setcps(0.5)  // default
setcps(1)    // faster
```

### Set Cycles Per Minute (CPM)
```javascript
setcpm(120)
```

Relation: `setcpm(x)` = `setcps(x / 60)`

### Convert BPM to CPS
Use formula: `setcps(bpm/60/4)`

Examples:
```javascript
setcps(120/60/4)  // 120 BPM
setcps(140/60/4)  // 140 BPM
setcps(104/60/4)  // 104 BPM
```

---

## MIDI, OSC, and SuperDirt

### MIDI Output
Strudel supports MIDI via WebMIDI (no additional software needed):

```javascript
note("c e g a").midi()  // send to first MIDI device
note("c e g a").midi().outputName("My Synth")
```

### MIDI Control Change
```javascript
ccv(64).ccn(1).midi()  // CC 1, value 64
```

### OSC (Open Sound Control)
Pattern other software/hardware:
```javascript
note("c e g").osc()
```

### SuperDirt Support
Use TidalCycles' SuperDirt synth engine:
1. Install SuperCollider + sc3 plugins
2. Run `pnpm run osc` to start OSC server
3. Use `.superdirt()` in patterns

Or use **StrudelDirt** (optimized for Strudel).

### MIDI Clock Sync
Send MIDI clock to sync DAW:
```javascript
// Clock out capabilities built-in
```

---

## Advanced Techniques

### Orbits and Audio Routing
Orbits control output routing:
```javascript
s("bd").orbit(0)  // orbit 0
s("sd").orbit(1)  // orbit 1
```

By default, orbits mix to stereo channels 1-2. Enable "Multi Channel Orbits" in settings:
- Orbit `i` maps to channels `2i` and `2i + 1`
- Use tools like Blackhole 16 to route to DAW

**Warning**: Sending to multiple orbits creates copies that multiply volume.

### Multichannel Audio with `.ch()`
Route to specific output channels:
```javascript
note("e a b g").ch(2)      // output to channel 2
note("e a b g").ch("2:3")  // output to channels 2-3
```

### Global vs Local Effects
- **Local effects**: Separate chain per event
- **Global effects**: Same chain for all events in same orbit

### Reusable Patterns with `register()`
```javascript
const effectChain = register('effectChain', (pat) =>
  pat
    .s("sawtooth")
    .cutoff(500)
    .room(0.5)
)

note("c e g").effectChain()
```

### Variables and Reuse
```javascript
const drums = s("bd sd bd sd").bank("RolandTR909")
const hats = s("hh*8").gain(0.3).bank("RolandTR909")
const bass = note("c2 ~ c2 ~ e2 ~ g1 ~").sound("sawtooth")

stack(drums, hats, bass)
```

### Async/Await Support
```javascript
await initTidal()
```

Top-level await supported in REPL via transpilation.

### Accumulation Modifiers
Combine patterns in advanced ways:
```javascript
note("c e g").add.out(note("0 2 4"))
```

---

## Live Performance Best Practices

### From-Scratch Preparation Tips
1. **Avoid documentation** during performance - know your functions
2. **Don't be precious** - delete code that doesn't sound good
3. **Recreate similar feels** - delete and rebuild for consistency
4. **Don't plan in advance** - use your ear and respond in real-time
5. **Limit sounds** - focus on a small palette
6. **Start minimal** - simple loop that morphs over time
7. **Build complexity gradually** - chain simple functions together

### Performance Workflow
1. Start with a simple loop
2. Morph the loop gradually
3. Add new beats, instruments, or sequences incrementally
4. Use comments (`cmd-/`) to quickly toggle code on/off
5. Keep syntax manageable for real-time typing

### Quick Controls
- **Hush**: `hush()` or `Ctrl + .`
- **Toggle comments**: `cmd-/` or `ctrl-/`
- **Stop button**: Use the REPL stop button

### Keyboard Shortcuts
- Start/Stop: Use REPL buttons or shortcuts
- Comment toggle: `cmd-/` or `ctrl-/`
- Emergency stop: `Ctrl + .`

---

## Complete Examples

### Example 1: Basic Four-on-the-Floor Beat
```javascript
setcps(120/60/4)

stack(
  s("bd sd bd sd").bank("RolandTR909"),
  s("hh*8").gain(0.3).bank("RolandTR909")
)
```

### Example 2: Techno Pattern with Bass
```javascript
setcpm(90/4)

const drums = sound(`
  [- - oh - ] [- - - - ] [- - - - ] [- - - - ],
  [hh hh - - ] [hh - hh - ] [hh - hh - ] [hh - hh - ],
  [- - - - ] [cp - - - ] [- - - - ] [cp - - - ],
  [bd - - - ] [- - - bd] [- - bd - ] [- - - bd]
`)

const bass = note("c2 ~ c2 ~ e2 ~ g1 ~")
  .sound("sawtooth")
  .lpf(500)
  .lpq(3)
  .delay(0.5)
  .delaytime("0.25 0.5")

stack(drums, bass)
```

### Example 3: Melodic Pattern with Scales
```javascript
setcps(0.6)

stack(
  // Melody
  n("0 2 4 6 4 2 7 4")
    .scale("C:minor")
    .sound("piano")
    .room(0.3),

  // Bass
  note("c2 ~ c2 ~ eb2 ~ g2 ~")
    .sound("sawtooth")
    .lpf(400)
    .gain(0.8),

  // Drums
  s("bd ~ sd ~").bank("RolandTR909"),
  s("hh*8").gain(0.2).bank("RolandTR909")
)
```

### Example 4: Euclidean Groove
```javascript
setcps(0.5)

stack(
  s("bd(3,8)").bank("RolandTR909").gain(1.2),
  s("sd(5,16)").bank("RolandTR909").gain(0.9),
  s("hh(7,16)").bank("RolandTR909").gain(0.3),
  s("oh(2,16)").bank("RolandTR909").gain(0.6)
)
```

### Example 5: Chord Progression
```javascript
setcps(0.5)

note(chord("<Cm7 Fm7 Bb7 Ebmaj7>"))
  .sound("piano")
  .velocity("<0.8 0.7 0.9 0.6>")
  .room(0.4)
  .every(4, rev())
```

### Example 6: Advanced Live Coding Pattern
```javascript
setcps(0.55)

// Drums
const kicks = s("bd(3,8)").bank("RolandTR909").gain(1.1)
const snares = s("sd(5,16)").bank("RolandTR909").sometimes(x => x.speed(0.5))
const hats = s("hh*8").bank("RolandTR909").gain(0.25).degradeBy(0.1)

// Bass
const bass = note("c2 ~ [c2 eb2] ~ g2 ~ [g2 c3] ~")
  .sound("sawtooth")
  .lpf(sine.range(200, 800).slow(8))
  .lpq(5)
  .gain(0.9)

// Melody
const melody = n("0 2 4 6 7 4 2 0")
  .scale("C:minor:pentatonic")
  .sound("piano")
  .room(0.4)
  .delay(0.3)
  .delaytime(0.375)
  .off(1/8, x => x.add(12).gain(0.4))
  .every(4, rev())

// Effects on drums
const effectDrums = stack(kicks, snares, hats)
  .sometimes(x => x.speed(2))
  .every(8, x => x.rev())

stack(effectDrums, bass, melody)
```

### Example 7: Custom Sample Loading
```javascript
// Load custom samples
samples({
  myKick: 'https://example.com/kick.wav',
  mySnare: 'https://example.com/snare.wav',
})

// Use them
s("myKick mySnare myKick mySnare")
```

### Example 8: MIDI Output Pattern
```javascript
note("c e g a b c5")
  .scale("C:major")
  .midi()
  .outputName("My Synthesizer")
```

---

## Visual Feedback

### Pianoroll Visualization
```javascript
note("c e g b").pianoroll()

// With options:
note("c e g b").pianoroll({
  cycles: 4,        // cycles to display
  playhead: 0.5,    // playhead position (0-1)
  vertical: 1,      // vertical orientation
  fold: 1,          // no gaps (Ableton-style)
  autorange: 1,     // auto-deduce value range
})
```

### Inline Pianoroll
```javascript
note("c e g b")._pianoroll()
```

### Punchcard and Scope
Additional visualizations available in REPL.

---

## Metadata and Documentation

### Music Metadata
Use tags in comments:
```javascript
/*
@title My Awesome Track
@by Your Name
@license CC BY-NC-SA
@details Created with Strudel live coding
@url https://yourwebsite.com
*/
```

---

## Resources and References

### Official Documentation
- **Main site**: https://strudel.cc/
- **Getting Started**: https://strudel.cc/workshop/getting-started/
- **Coding Syntax**: https://strudel.cc/learn/code/
- **JavaScript API**: https://strudel.cc/functions/intro/
- **Pattern Creation**: https://strudel.cc/learn/factories/
- **Audio Effects**: https://strudel.cc/learn/effects/
- **Mini Notation**: https://strudel.cc/learn/mini-notation/
- **Technical Manual**: https://strudel.cc/technical-manual/docs/
- **Samples Guide**: https://strudel.cc/learn/samples/
- **Synths**: https://strudel.cc/learn/synths/
- **Tonal Functions**: https://strudel.cc/learn/tonal/

### Cheatsheets and Quick References
- https://eggg.uk/strudel/cheatsheet/
- https://tilde.club/~moondog8/stuff/2024-10-24-strudel-live-code-cheat-sheet/
- https://gist.github.com/heroheman/7ac4a565f2f13903c4e354b8af8b94f0 (German)

### GitHub Repositories
- **Main Repo**: https://github.com/tidalcycles/strudel
- **Awesome Strudel**: https://github.com/terryds/awesome-strudel (curated resources)
- **Song Collection**: https://github.com/eefano/strudel-songs-collection

### Community and Tutorials
- **Mirakl Tech Blog**: Beats, Bytes, and Basslines introduction
- **Universe of Tracks**: Strudel Live Coding guide
- **Loophole Letters**: Strudel articles and updates
- **Tidal Club**: Community forums

### Examples and Inspiration
- Browse examples in REPL: Click shuffle icon
- https://strudel.cc/examples/
- Search "awesome-strudel" repository for song covers and remixes

---

## Quick Function Reference

### Pattern Creation
- `seq()` / `fastcat()` - Cram items into one cycle
- `stack()` - Play items simultaneously
- `cat()` / `slowcat()` - Each item takes one cycle

### Core Controls
- `s()` / `sound()` - Select sound/sample
- `note()` - Play musical notes
- `n()` - Sample number or harmonic partials
- `bank()` - Select drum machine bank
- `scale()` - Apply musical scale

### Effects
- `lpf()` / `hpf()` - Low/high-pass filters
- `lpq()` / `hpq()` - Filter resonance
- `room()` / `size()` - Reverb
- `delay()` / `delaytime()` - Delay
- `crush()` - Bit crushing
- `coarse()` - Sample rate reduction

### Time
- `fast()` / `slow()` - Speed up/down
- `early()` / `late()` - Timing offset
- `rev()` - Reverse

### Conditional
- `every()` - Every N cycles
- `sometimes()` - 50% probability
- `rarely()` - 25% probability
- `degradeBy()` - Random removal

### Math
- `add()` / `sub()` / `mul()` / `div()` - Arithmetic
- `transpose()` - Transpose semitones
- `scaleTranspose()` - Transpose scale degrees

### Pattern Manipulation
- `off()` - Time-offset transformation
- `jux()` - Stereo transformation
- `iter()` / `chunk()` - Pattern division
- `layer()` - Layer transformations
- `mask()` / `struct()` - Structural masking

### Control Parameters
- `gain()` / `velocity()` - Volume
- `pan()` - Stereo position
- `speed()` - Playback speed
- `attack()` / `decay()` / `sustain()` / `release()` - ADSR envelope
- `cut()` / `cutgroup()` - Sample cutting
- `legato()` - Note duration

### System
- `setcps()` / `setcpm()` - Set tempo
- `hush()` - Stop all sounds
- `samples()` - Load samples
- `register()` - Register reusable pattern

### MIDI/OSC
- `.midi()` - MIDI output
- `.osc()` - OSC output
- `.ccn()` / `.ccv()` - MIDI CC
- `.orbit()` - Output routing
- `.ch()` - Channel routing

---

## Tips and Tricks

1. **Start small**: Begin with simple patterns and build complexity
2. **Use variables**: Store patterns in variables for reuse
3. **Comment liberally**: Use `//` or `cmd-/` to toggle code sections
4. **Explore samples**: Open sounds tab to see what's available
5. **Chain effects**: Build complex sounds by chaining simple effects
6. **Euclidean rhythms**: Use `(beats, steps)` for interesting grooves
7. **Probabilistic variations**: Use `sometimes()`, `rarely()` for variety
8. **Layer strategically**: Use `stack()` to layer drums, bass, melody
9. **Control gain**: Use `.gain()` to balance mixed elements
10. **Experiment with `.off()`**: Create echoes, harmonies, variations
11. **Use scales**: Constrain melodies with `.scale()` for musicality
12. **Visualize**: Use `.pianoroll()` to see your patterns
13. **Save often**: Copy your code to save your work
14. **Browse examples**: Shuffle button in REPL for inspiration
15. **Join community**: Tidal Club and GitHub discussions

---

## Conclusion

Strudel is a powerful, accessible live coding environment for creating music in the browser. This guide covers the fundamentals through advanced techniques, but the best way to learn is to **experiment** and **play**.

Visit **https://strudel.cc/** and start coding your music today!

For more information, explore the official documentation and join the community.

Happy live coding! 🎵
