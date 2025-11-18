# Strudel Quick Reference

## Essential Commands

### Start/Stop
```javascript
hush()              // Stop all sounds
```
**Keyboard**: `Ctrl + .`

### Tempo
```javascript
setcps(0.5)         // Cycles per second (default)
setcpm(120)         // Cycles per minute
setcps(120/60/4)    // From BPM
```

---

## Mini Notation

| Syntax | Meaning | Example |
|--------|---------|---------|
| `space` | Separate events in one cycle | `"bd sd hh cp"` |
| `~` | Rest/silence | `"bd ~ sd ~"` |
| `[ ]` | Subdivide or stack | `"bd [sd cp]"` |
| `< >` | Alternate per cycle | `"<bd sd hh>"` |
| `*` | Repeat | `"bd*4"` |
| `/` | Slow down | `"bd/2"` |
| `( )` | Euclidean rhythm | `"bd(3,8)"` |
| `!` | Replicate | `"c!3"` |
| `,` | Polyrhythm | `"{bd bd, cp cp cp}"` |

---

## Core Functions

### Sounds
```javascript
s("bd sd hh")                // Samples
sound("piano")               // Set sound
note("c e g").sound("saw")   // Notes with synth
n(0)                         // Sample/harmonic number
bank("RolandTR909")          // Drum machine
```

### Waveforms
`sine`, `sawtooth`, `square`, `triangle`, `white`, `pink`, `brown`

---

## Pattern Creation

```javascript
seq("a", "b", "c")      // Fast sequence
stack(a, b, c)          // Play together
cat("a", "b")           // Slow sequence (one per cycle)
```

---

## Notes & Music Theory

```javascript
note("c d e f")              // Note names
note("c# d# f#")             // Sharps
note("db eb gb")             // Flats

n("0 2 4 6").scale("C:major")            // Scale degrees
n("0 2 4 6").scale("A:minor:pentatonic") // Pentatonic

chord("Cm7")                 // Chords
chord("<Cm7 Fm7 Bb7>")      // Chord progression

.transpose(2)                // Semitones up/down
.scaleTranspose(1)           // Scale degrees up/down
```

### Common Scales
`major`, `minor`, `dorian`, `mixolydian`, `pentatonic`, `blues`

---

## Effects

### Filters
```javascript
.lpf(1000)              // Low-pass filter (cutoff)
.lpq(5)                 // Low-pass resonance
.hpf(500)               // High-pass filter
.hpq(3)                 // High-pass resonance
```

### Time Effects
```javascript
.delay(0.5)             // Delay amount
.delaytime(0.25)        // Delay time
.room(0.5)              // Reverb amount
.size(0.8)              // Reverb size
```

### Distortion
```javascript
.crush(4)               // Bit crushing
.coarse(2)              // Sample rate reduction
.shape(0.5)             // Waveshaping distortion
```

---

## Control Parameters

```javascript
.gain(0.8)              // Volume
.velocity(0.9)          // MIDI-style velocity
.pan(0.5)               // Stereo (0=left, 1=right)
.speed(1)               // Playback speed (2=faster, -1=reverse)

// ADSR Envelope
.attack(0.1)            // Attack time
.decay(0.2)             // Decay time
.sustain(0.5)           // Sustain level/duration
.release(0.3)           // Release time

.cut(1)                 // Cut group (mute previous)
.legato(1)              // Note duration (1=full, 0.5=half)
```

---

## Pattern Manipulation

### Time
```javascript
.fast(2)                // Speed up
.slow(2)                // Slow down
.early(0.125)           // Start earlier
.late(0.125)            // Start later
.rev()                  // Reverse
```

### Math
```javascript
.add(2)                 // Add to values
.sub(2)                 // Subtract
.mul(2)                 // Multiply
.div(2)                 // Divide
```

### Transformations
```javascript
.off(1/8, x => x.add(12))           // Delayed transformation
.jux(rev())                          // Stereo effect
.layer(x => x, x => x.add(7))       // Multiple layers
.iter(4)                             // Divide and rotate
.mask("<1 [0 1]>")                   // Binary mask
.struct("1 0 1 0")                   // Rhythmic structure
```

---

## Conditional & Random

```javascript
.every(4, rev())                     // Every N cycles
.sometimes(x => x.speed(2))          // 50% probability
.rarely(x => x.gain(1.5))            // 25% probability
.almostAlways(x => x.lpf(800))       // 90% probability
.almostNever(x => x.speed(0.5))      // 10% probability
.degradeBy(0.5)                      // Random gaps (50%)
```

---

## Common Patterns

### Drums
```javascript
// Four on the floor
s("bd sd bd sd")

// With hi-hats
stack(
  s("bd sd bd sd"),
  s("hh*8").gain(0.3)
)

// Euclidean techno
s("bd(3,8)")

// Complete beat
stack(
  s("bd(3,8)").gain(1.2),
  s("sd(5,16)").gain(0.9),
  s("hh*8").gain(0.3).degradeBy(0.1)
)
```

### Bass
```javascript
// Simple
note("c2 ~ c2 ~").sound("sawtooth").lpf(500)

// With movement
note("c2 ~ [c2 eb2] ~ g2 ~ [g2 c3] ~")
  .sound("sawtooth")
  .lpf(sine.range(300, 800).slow(4))
```

### Melody
```javascript
// Scale-based
n("0 2 4 6 7 4 2 0")
  .scale("C:minor:pentatonic")
  .sound("piano")
  .room(0.4)

// With effects
note("c e g a")
  .sound("square")
  .delay(0.25)
  .off(1/8, x => x.add(12).gain(0.5))
```

---

## Complete Track Template

```javascript
setcps(0.5)

const drums = stack(
  s("bd ~ bd ~"),
  s("~ sd ~ sd"),
  s("hh*8").gain(0.3)
)

const bass = note("c2 ~ c2 eb2")
  .sound("sawtooth")
  .lpf(600)

const melody = n("0 2 4 7")
  .scale("C:minor")
  .sound("piano")
  .room(0.4)

stack(drums, bass, melody)
```

---

## Sample Banks

### Drum Machines
- `RolandTR808` - Classic 808
- `RolandTR909` - House/techno standard

### Usage
```javascript
s("bd sd hh").bank("RolandTR909")
// Equivalent to:
s("RolandTR909_bd RolandTR909_sd RolandTR909_hh")
```

View all: Open **sounds tab** in REPL

---

## Keyboard Shortcuts

| Action | Shortcut |
|--------|----------|
| Stop all sounds | `Ctrl + .` |
| Toggle comment | `Cmd + /` or `Ctrl + /` |
| Run code | `Ctrl + Enter` |

---

## Advanced

### Variables & Reuse
```javascript
const drums = s("bd sd bd sd")
const bass = note("c2 ~ c2 ~").sound("saw")

stack(drums, bass)
```

### Custom Samples
```javascript
samples({
  kick: 'https://example.com/kick.wav'
})

s("kick*4")
```

### MIDI
```javascript
note("c e g").midi()
note("c e g").midi().outputName("My Synth")
```

### Visualization
```javascript
note("c e g").pianoroll()
```

---

## Common Gotchas

1. **Double quotes** `"..."` for patterns, **single quotes** `'...'` for strings
2. Default tempo is `setcps(0.5)` (slow), use `setcps(1)` for faster
3. Comments: `//` for line, `/* */` for block
4. Stack loudness: Each layer adds volume, use `.gain()` to balance
5. Some effects (coarse) only work in Chromium browsers

---

## Resources

- **Main site**: https://strudel.cc/
- **Docs**: https://strudel.cc/learn/getting-started/
- **Cheatsheet**: https://eggg.uk/strudel/cheatsheet/
- **Examples**: Click shuffle in REPL
- **GitHub**: https://github.com/tidalcycles/strudel

---

## Quick Start Workflow

1. Set tempo: `setcps(0.5)`
2. Start with drums: `s("bd sd bd sd")`
3. Add bass: `note("c2 ~ c2 ~").sound("saw")`
4. Add melody: `n("0 2 4 7").scale("C:minor")`
5. Stack them: `stack(drums, bass, melody)`
6. Add effects: `.room(0.4).delay(0.3)`
7. Add variation: `.sometimes(x => x.fast(2))`
8. Tweak and perform!

**Remember**: Type `hush()` to stop everything

Happy live coding! 🎵
