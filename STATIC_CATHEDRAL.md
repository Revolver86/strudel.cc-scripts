# STATIC CATHEDRAL

**Atmospheric Black Metal Composition**
*Finding Transcendence in Digital Degradation*

> "A cathedral built from white noise and bit-crushed dreams"

---

## Overview

**Tempo:** 135 BPM
**Scale:** F# Dorian (F#, G#, A, B, C#, D#, E)
**Key Tonality:** F# minor pentatonic with added major 6th for bittersweet quality
**Theme:** The sacred in the synthetic, beauty in broken signals, transcendence through degradation

---

## Files

### `static_cathedral.js` - Auto-playing composition
A complete atmospheric black metal song that plays through automatically with distinct sections. Each layer uses long alternating patterns with `< >` and `.slow()` to create evolving structures. The piece progresses through:

1. **Intro** - Filtered noise + bells
2. **Verse 1** - Drums, tremolo riff, bass enter
3. **Transition** - Stripped down to bass drone
4. **Verse 2** - Full intensity + corrupted organ
5. **Climax** - Everything + lead melody + choir
6. **Outro** - Gradual deconstruction

### `static_cathedral_simple.js` - Live coding version
Modular version with all layers defined separately. Easy to experiment with by commenting/uncommenting layers. Perfect for:
- Learning the individual elements
- Live performance
- Creating your own arrangements
- Understanding the composition structure

---

## Song Structure

### Section Approach

This composition uses **long alternating patterns** to create distinct song sections. Instead of typical loop-based live coding, each layer alternates between different states over many cycles:

```javascript
const drums = "<\
  ~ ~ ~ ~,          // Section 1: Intro (silent)
  ~ ~ ~ ~,          // Section 2: Build (silent)
  bd:3*4 bd:3*4,    // Section 3: Verse 1 (active)
  bd:3*4 bd:3*4,    // Section 4: Verse 2 (active)
  ...
>".slow(4)
```

This creates a song that evolves automatically while maintaining the live-coding aesthetic.

### Key Techniques Used

**Long Alternations**
```javascript
// Each position in < > plays for multiple cycles
"<pattern1, pattern2, pattern3>".slow(8)
```

**Binary Masking**
```javascript
// Turn layers on/off per section
.mask("<0 0 1 1 1 1 0>".slow(16))
```

**Pattern-based Sections**
```javascript
// Different content per section, not just variations
"<~ ~ ~ ~, full_pattern, ~ ~ ~ ~>".slow(4)
```

---

## Sound Design Elements

### 1. Filtered Noise Evolution

```javascript
noise()
  .lpf(sine.range(200, 1200).slow(8))
  .gain(0.15)
  .room(0.95)
  .size(0.98)
```

**Purpose:** Creates atmospheric foundation that evolves from dark rumble to brighter texture
**Key:** Dynamic LPF sweep using `sine.range()` for organic movement

### 2. Bit-Crushing for Degradation

**Heavy crushing on drums:**
```javascript
s("bd:3*4")
  .crush(6)  // Heavy digital degradation
```

**Heavy crushing on organ:**
```javascript
.sound("square")
  .crush(4)  // "Corrupted church organ" effect
```

**Light or none on melodies:**
- Lead melody: No crushing (kept clean for beauty)
- Clean guitar: No crushing (ethereal and clear)

**Philosophy:** Degradation as texture, not destruction of melody

### 3. Cathedral Reverb & Space

```javascript
.room(0.95)  // Massive reverb
.size(0.98)  // Large space
```

**Application:**
- Heavy on melodic elements (room: 0.7-0.98)
- Moderate on rhythmic elements
- Creates sense of vast, sacred space

### 4. Tremolo Picking Simulation

```javascript
note("fs3 a3 b3 cs4 ds4 e4 ds4 cs4")
  .fast(4)  // 4x speed = tremolo picking effect
```

Fast repetition of melodic pattern creates black metal tremolo riff character

### 5. Perlin Noise Modulation

```javascript
.gain(perlin.range(0.15, 0.35))  // Organic gain variation
.fast(perlin.range(1, 4).slow(8))  // Organic speed variation
```

**Purpose:** Adds organic, evolving character to digital synthesis

---

## Musical Elements Breakdown

### Drums (Doom Blast Beats)

```javascript
stack(
  s("bd:3*4").gain(0.8).crush(6).shape(0.4).speed(0.8),
  s("~ sd:2 ~ sd:2").gain(0.6).crush(5).room(0.3),
  s("hh:7*8").gain(perlin.range(0.15, 0.35)).crush(7).lpf(4000).room(0.6)
)
```

**Character:** Slower than max-speed blast beats, doom-paced, heavily bit-crushed
**Effect:** Creates crushing weight while maintaining atmosphere

### Tremolo Riff (F# Minor Pentatonic + Major 6th)

```javascript
note("fs3 a3 b3 cs4 ds4 e4 ds4 cs4")
  .sound("sawtooth")
  .lpf(2400)
  .vowel("<a e i>")
  .fast(4)
```

**Notes:** F# - A - B - C# - D# - E - D# - C#
**Scale:** F# minor pentatonic (F# A B C# E) + major 6th (D#)
**Character:** Melodic and sad, not just chromatic noise
**Vowel filter:** Adds vocal-like quality cycling through "a", "e", "i"

### Bass (Simple & Heavy)

```javascript
note("fs1 fs1 a1 b1")
  .sound("sawtooth")
  .lpf(400)
  .gain(0.35)
  .slow(2)
```

**Approach:** Simple root-based progression
**Filtering:** Heavy LPF at 400Hz for sub-bass weight
**Purpose:** Anchors the ethereal guitar work

### Clean Guitar Arpeggios

```javascript
note("[fs4,a4,cs5] [a4,cs5,e5] [b3,ds4,fs4] [cs4,e4,gs4]")
  .sound("gtr")
  .room(0.95)
  .delay(0.5)
  .delayfeedback(0.6)
```

**Character:** Reverb-drenched, ethereal background layer
**Harmony:** Chord arpeggios providing harmonic depth
**Effect:** Creates contrast with harsh drums and distorted riffs

### Corrupted Church Organ

```javascript
note("a3 b3 cs4 ds4 e4 fs4 e4 ds4")
  .sound("square")
  .lpf(sine.range(800, 1800).slow(4))
  .crush(4)
```

**Waveform:** Square wave (organ-like)
**Degradation:** Heavy bit-crushing for "corruption"
**Filter:** Dynamic sweep for movement
**Purpose:** Counter-melody that weaves with tremolo riff

### Static Choir (Pitched Noise)

```javascript
stack(
  noise().lpf(400).hpf(150).gain(perlin.range(0.1, 0.25).slow(2)),
  noise().lpf(1200).hpf(600).gain(perlin.range(0.08, 0.2).slow(1.5)),
  noise().lpf(3000).hpf(1800).gain(perlin.range(0.06, 0.15).slow(1.7))
)
```

**Technique:** Multi-band filtered noise simulating screamed vocals
**Bands:** Low (150-400Hz), Mid (600-1200Hz), High (1800-3000Hz)
**Modulation:** Perlin noise creates organic "breathing" quality
**Purpose:** Textural "vocals" without actual voice

### Lead Melody (Climax)

```javascript
note("fs5 e5 ds5 cs5 b4 a4 gs4 fs4 a4 b4 cs5 ds5 e5 fs5 gs5 a5")
  .sound("sine")
  .lpf(6000)
  .gain(0.28)
```

**Waveform:** Sine (kept clean, not bit-crushed)
**Range:** F#5 down to F#4, then ascending to A5
**Character:** Soaring, beautiful, melodic
**Purpose:** Emotional climax - beauty emerging from chaos

---

## Strudel Techniques Demonstrated

### 1. Long Alternating Patterns for Song Structure

```javascript
const element = "<\
  section1_pattern,\
  section2_pattern,\
  section3_pattern\
>".slow(8)
```

Creates distinct sections instead of repetitive loops

### 2. Binary Masking for Section Control

```javascript
.mask("<0 0 1 1 1 0>".slow(16))
```

Turns layers on/off at specific points in the song

### 3. Dynamic Filter Sweeps

```javascript
.lpf(sine.range(200, 1200).slow(8))
```

Creates evolving tonal character

### 4. Perlin Noise for Organic Modulation

```javascript
.gain(perlin.range(0.1, 0.25).slow(2))
```

Adds natural variation to parameters

### 5. Multi-layer Stack with Individual Processing

```javascript
stack(
  layer1.lpf(400),
  layer2.crush(6),
  layer3.room(0.9)
)
```

Each layer has independent effects

### 6. Selective Bit-Crushing

Drums and organ: Heavy crushing
Melodic elements: Clean or light crushing
Creates texture without destroying beauty

---

## How to Use

### Quick Start (Simple Version)

1. Copy `static_cathedral_simple.js` to https://strudel.cc/
2. Start with just intro elements (noise + bells)
3. Uncomment layers to build up:
   - Add drums, tremolo, bass, clean (verse)
   - Add organ, choir, lead (climax)
4. Experiment with parameters

### Full Composition

1. Copy `static_cathedral.js` to https://strudel.cc/
2. Press play - the song will evolve through all sections automatically
3. Listen to the complete journey from noise → beauty → noise
4. Modify section lengths by changing `.slow()` values
5. Adjust which sections include which layers

### Parameter Tweaking

**More aggressive:**
- Increase `.crush()` values (try 3-5 on more elements)
- Reduce reverb (`.room()` values)
- Speed up drums (remove or reduce `.slow()`)

**More ambient:**
- Reduce or remove drums
- Increase reverb and delay
- Slow down all tempos with `.slow()`

**More melodic:**
- Increase gain on clean guitar and lead
- Reduce noise elements and choir
- Lighten or remove bit-crushing

---

## Artistic Concept

### Finding Transcendence in Digital Degradation

This piece explores finding beauty in broken, degraded digital signals. Like a Gothic cathedral - imposing, austere, but ultimately transcendent - the composition uses harsh digital textures (bit-crushing, noise, distortion) to create moments of genuine beauty and emotional resonance.

### The Sacred in the Synthetic

Black metal traditionally evokes natural, pagan imagery. This piece reimagines that aesthetic for the digital age: What does "sacred" mean when built from synthetic waveforms? What does "transcendent" mean when experienced through bit-crushed degradation?

### Journey & Transformation

The composition is a journey:
1. **Noise** (potential, chaos)
2. **Structure** (patterns emerging)
3. **Beauty** (transcendence achieved)
4. **Noise again** (transformed by the journey)

The outro returns to the intro's filtered noise, but it sounds different because you've heard what it became. The degradation has become transcendence.

---

## Musical Influences

### Early Ulver
- Melodic black metal with atmospheric depth
- Beauty coexisting with harshness
- Progressive structures
- Emotional resonance beyond typical aggression

### Tim Hecker
- Digital degradation as compositional tool
- Reverb and space as primary elements
- Noise and beauty coexisting
- Abstract emotional impact

### Atmospheric Black Metal
- Slower, thoughtful blast beats (doom-paced)
- Melodic tremolo riffs
- Generous reverb creating space
- Melancholic modes (Dorian, minor)
- Balance of aggression and beauty

---

## Technical Specifications

### Tempo & Timing
- **135 BPM** = 2.25 beats per second
- **CPS setting:** `setcps(135/60/4)` = 0.5625 cycles/second
- Sections controlled by long `.slow()` values

### Frequency Ranges
- **Sub-bass:** 50-400 Hz (bass, drone)
- **Low mids:** 400-800 Hz (tremolo riff)
- **Mids:** 800-2400 Hz (organ, clean guitar)
- **High mids:** 2400-6000 Hz (lead melody)
- **Highs:** 6000+ Hz (bells, hi-hats, high choir)

### Effect Settings

**Reverb (Cathedral Space):**
- Room: 0.2 (subtle) to 0.98 (massive)
- Size: 0.8 (medium) to 0.99 (infinite)

**Bit-Crushing (Digital Degradation):**
- Heavy (3-6): Drums, organ, extreme texture
- None: Lead, clean guitar - preserve beauty

**Delay (Spatial Depth):**
- Feedback: 0.4-0.8 for varying tail lengths
- Time: 0.1875-0.5 for different rhythmic feels

---

## Next Steps

### Experimentation Ideas

1. **Add variations** using `.every()` and `.sometimes()`
2. **Create your own sections** by modifying the alternating patterns
3. **Layer in new elements** - pads, additional melodies, different drums
4. **Adjust section lengths** - make some sections longer/shorter
5. **Create live performance version** - comment/uncomment layers in real-time

### Advanced Techniques to Try

- Use `.jux()` for stereo effects
- Add `.iter()` for pattern rotation
- Experiment with `.degradeBy()` for glitchy effects
- Try different scales (Phrygian, Locrian for darker feel)
- Layer multiple tremolo riffs at different octaves

---

## Conclusion

**Static Cathedral** demonstrates that in Strudel, you can create complete compositions with distinct sections and song structure, not just repetitive loops. By using long alternating patterns, binary masking, and careful layering, you can build pieces that tell a story and take the listener on a journey.

The piece balances crushing heaviness with haunting beauty, showing that digital degradation doesn't mean destruction - it can mean transformation. The bit-crushing, noise, and distortion aren't flaws; they're the medium through which beauty emerges.

**May your cathedrals be vast, your noise be sacred, and your degradation be beautiful.** 🏰⚡

---

**To hear it:** Copy to https://strudel.cc/ and press play
**To learn:** Start with `static_cathedral_simple.js`
**To perform:** Build it live by uncommenting layers progressively
