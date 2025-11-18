# MEMETIC_KILL_AGENT

**Aggressive Digital Black Metal**
*Information Warfare Through Sound*

> "Ideas as weapons. Patterns that rewrite your brain just by perceiving them."

---

## Overview

**Tempo:** 190 BPM (brutal, relentless)
**Scale:** B Locrian (B, C, D, E, F, G, A) - the darkest, most unstable mode
**Theme:** SCP Foundation "memetic kill agent" - hostile information that hijacks consciousness
**Aesthetic:** Algorithmic aggression, weaponized sound, digital warfare

---

## Concept: Sound as Weapon

This composition treats music as a weapon deployment sequence. Each section represents a phase of information warfare:

1. **INTRO** - Threat detected (harsh noise burst)
2. **VERSE 1** - Engagement (three-layer tremolo attack)
3. **BREAKDOWN** - Reload (precision hi-hats, ominous bass pulse)
4. **VERSE 2** - Suppression (palm-muted chugging + alarm siren)
5. **BRIDGE** - Overwhelming force (stereo chaos, different patterns per ear)
6. **CLIMAX** - Target destroyed (locked groove, information overload)
7. **TERMINATION** - Abrupt cut mid-phrase (transmission ended)

### Memetic Kill Agent Theory

From SCP Foundation lore: Information that acts as a weapon. Patterns, images, or sounds that rewrite neural pathways simply by being perceived. This composition embodies that concept through:

- **Inhuman precision** - Everything quantized to perfect grid
- **Digital aggression** - Harsh square waves, heavy bit-crushing, aliasing
- **Cognitive overload** - Layering all melodic ideas simultaneously in climax
- **Abrupt termination** - Cuts mid-phrase like hostile code execution stopping

---

## Files

### `memetic_kill_agent.js` - Full Weapon Deployment
Complete auto-playing composition that executes through all 7 phases. Uses long alternating patterns and binary masking to control section transitions. Just press play and experience the full attack sequence.

### `memetic_kill_agent_simple.js` - Modular Weapon Systems
All components separated for experimentation. Uncomment systems to activate different phases. Perfect for:
- Understanding individual weapon components
- Live performance tactical deployment
- Customizing your attack sequence
- Learning aggressive Strudel techniques

---

## Weapon Systems Breakdown

### INTRO: Harsh Noise Burst (10 seconds)

```javascript
const harsh_noise = noise()
  .gain(0.9)
  .crush(3)
  .distort(0.8)

const distorted_kicks = s("bd:3*8")
  .gain(1.2)
  .speed(0.7)
  .crush(4)
  .distort(0.6)
```

**Purpose:** Establish hostile intent immediately
**Technique:** Raw noise + heavily distorted rapid kicks
**Effect:** Disorients listener, sets aggressive tone
**Duration:** ~3 cycles (10 seconds at 190 BPM)

### VERSE 1: Three-Layer Tremolo Attack

#### Layer 1: Main Riff (B Locrian)
```javascript
note("b2 c3 d3 e3 f3 g3 f3 e3")
  .sound("square")
  .lpf(3000)
  .crush(5)
  .fast(8)
```

**Scale:** B Locrian - most dissonant mode
**Speed:** `.fast(8)` creates tremolo picking effect
**Timbre:** Square wave with heavy bit-crushing

#### Layer 2: Harmony (Minor Third Up = D)
```javascript
note("d3 e3 f3 g3 a3 bb3 a3 g3")
  .sound("square")
  .lpf(3500)
  .crush(5)
  .fast(8)
```

**Harmony:** Creates thick, dissonant texture
**Frequency:** Slightly higher LPF for separation

#### Layer 3: Dissonant Tritones
```javascript
note("[f3 f3 b3 b3]")
  .sound("square")
  .lpf(4000)
  .crush(5)
  .fast(4)
```

**Interval:** Tritone (F to B) - "devil's interval"
**Speed:** Half-speed for rhythmic contrast
**Purpose:** Adds maximum dissonance and tension

### Maximum Intensity Blast Beats

```javascript
stack(
  s("bd:3*8").gain(1.0).crush(6),
  s("[~ sd:2]*4").gain(0.8).crush(6),
  s("hh:8*16").gain(0.4).crush(7)
)
```

**Kick:** 8 hits per cycle (relentless)
**Snare:** Classic blast pattern (~ sd ~ sd ~ sd ~ sd)
**Hi-hat:** 16th notes (machine gun effect)
**Crushing:** Heavy bit-crushing (6-7 bits) for digital weapon fire sound

### BREAKDOWN: Reload (8 bars)

```javascript
const reload_hats = s("hh:8*16").gain(0.35).crush(6)
const reload_bass = note("<b0 f1>").sound("square").lpf(300).crush(4).slow(2)
```

**Concept:** The "loading" moment before next attack
**Hi-hats:** Precise 16th notes (mechanical, counting down)
**Bass:** Two-note pulse (B → F = tritone, ominous)
**Dynamics:** Stripped down to create tension
**Purpose:** Breath before intensification

### VERSE 2: Palm-Muted Chugging + Alarm Siren

#### Chugging Riff
```javascript
note("[b1!4 ~!4 b1!4 ~!4] [b1!4 ~!4 c2!4 d2!4]")
  .sound("square")
  .lpf(800)
  .crush(5)
```

**Pattern:** `!4` = repeat note 4 times (creates palm-mute effect)
**Rhythm:** Alternates between chugs and silence
**Low-pass:** 800Hz makes it sound tight and percussive
**Evolution:** Second bar adds melodic movement (C, D)

#### 8-bit Alarm Siren
```javascript
note("[b5 f6]*8")
  .sound("square")
  .lpf(6000)
  .gain(0.3)
  .crush(3)
```

**Interval:** B to F (tritone) an octave up
**Speed:** Fast alternation (`*8`)
**Timbre:** Clean square wave (video game alarm)
**Purpose:** Piercing lead that cuts through mix like siren

### BRIDGE: Stereo Chaos

#### Left Ear - Standard Blast
```javascript
stack(
  s("bd:3*4").gain(0.9).crush(6),
  s("[~ sd:2]*2").gain(0.7).crush(6)
).pan(0)
```

**Pattern:** Classic black metal blast
**Panning:** Hard left (pan: 0)

#### Right Ear - Bomb Blast
```javascript
stack(
  s("bd:3*4").gain(0.9).crush(6),
  s("sd:2*8").gain(0.7).crush(6)
).pan(1)
```

**Pattern:** Snare on EVERY hit (overwhelming)
**Panning:** Hard right (pan: 1)
**Effect:** Disorienting stereo field, cognitive overload

#### Staccato Guitar Stabs
```javascript
note("[b3!1 ~!1]*8")
  .sound("square")
  .lpf(2000)
  .crush(5)
```

**Rhythm:** Note, rest, note, rest (rapid-fire)
**Purpose:** Replaces tremolo with percussive stabs
**Effect:** Emphasizes inhuman precision

### CLIMAX: Locked Groove + Information Overload

#### Meshuggah-Style Locked Groove
```javascript
const groove_kicks = s("bd:3*16").gain(1.1).crush(6)
const groove_snare = s("~ sd:2 ~ sd:2").gain(0.9).crush(6)
```

**Kicks:** 16th notes (driving, relentless)
**Snare:** Beats 2 and 4 (headbang-able groove)
**Transition:** From blast to locked groove = devastating impact

#### Rhythmic Riff
```javascript
note("[b2!2 ~!2 c3!2 d3!2] [e3!2 f3!2 b2!4]")
  .sound("square")
  .lpf(2500)
  .crush(5)
```

**Pattern:** More rhythmic than tremolo
**Groove:** Locked to kick pattern
**Purpose:** Maintains aggression while creating headbang moment

#### Information Overload Layers
```javascript
// Stack ALL previous melodic ideas simultaneously
overloadLayer1  // Siren (b5 f6)
overloadLayer2  // Tremolo main riff
climaxRiff      // New groove riff
```

**Concept:** All weapon systems firing at once
**Effect:** Cognitive overload, too much information to process
**Purpose:** Final overwhelming assault before termination

### TERMINATION: Abrupt Ending

The composition cuts instantly mid-phrase via binary masking. No fade, no resolution - just sudden silence like a transmission being cut or hostile code execution stopping.

---

## Technical Approach

### Inhuman Precision (No Humanization)

```javascript
// Everything stays perfectly quantized - no .humanize(), no swing
// This is algorithmic aggression, not human performance
```

**Philosophy:** This is digital warfare, not organic music. Perfect timing emphasizes the weaponized, computational nature.

### Harsh Digital Timbres

**Square waves everywhere:**
```javascript
.sound("square")  // Harsh, aliased, digital
```

**Heavy bit-crushing:**
```javascript
.crush(3)  // Extreme degradation
.crush(5)  // Heavy digital distortion
.crush(6)  // Weapon fire effect on drums
.crush(7)  // Maximum degradation on hats
```

**Purpose:** Sound like digital weapons, corrupted data, hostile code

### Minimal Reverb (Dry and Hostile)

```javascript
.room(0.1)  // Almost no reverb
```

**Reasoning:** Reverb creates space and beauty. This is claustrophobic digital assault. Dry = aggressive, in-your-face, hostile.

### Hard Limiting

```javascript
.clip(0.9)  // Hard clipping for extra aggression
```

**Effect:** Slight distortion on peaks, adds to digital warfare aesthetic

### Dynamic Contrast for Disorientation

- **Intro:** Noise burst (chaotic)
- **Verse 1:** Full attack (overwhelming)
- **Breakdown:** Stripped down (tension)
- **Verse 2:** Evolved attack (escalation)
- **Bridge:** Stereo chaos (disorienting)
- **Climax:** Everything at once (overload)
- **Termination:** Sudden silence (shocking)

---

## Musical Theory

### B Locrian - The Darkest Mode

**Notes:** B - C - D - E - F - G - A

**Intervals from root:**
- Minor 2nd (C) - extremely dissonant
- Minor 3rd (D)
- Perfect 4th (E)
- Diminished 5th/Tritone (F) - "devil's interval"
- Minor 6th (G)
- Minor 7th (A)

**Character:** Most unstable mode, no perfect 5th, diminished tonic chord
**Why it works:** Represents instability, hostility, corruption - perfect for memetic kill agent concept

### Tritone Weaponization

The tritone (B to F) appears throughout:
- Dissonant tremolo layer
- Breakdown bass pulse
- Alarm siren

**Historical context:** Called "diabolus in musica" (devil in music) in medieval times
**Modern use:** Creates maximum tension and unease

### Layering Strategy

1. **Tremolo layers:** Three frequencies creating wall of sound
2. **Breakdown:** Minimal (just 2 elements for contrast)
3. **Climax:** Everything stacked (information overload)

**Purpose:** Dynamic range from sparse to overwhelming creates psychological impact

---

## Strudel Techniques Demonstrated

### 1. Long Alternating Patterns for Sections

```javascript
const tremoloMain = note("<\
  ~,                    // Intro
  ~,                    // Still intro
  [b2 c3 d3...],       // Verse 1
  ~,                    // Breakdown
  [b2 c3 d3...],       // Verse 2
  [b2 c3 d3...],       // Bridge
  [b2 c3 d3...]        // Climax
>".slow(4))
```

Each comma-separated pattern plays for multiple cycles, creating distinct sections.

### 2. Binary Masking for Precise Control

```javascript
const introMask = "<1 1 0 0 0 0 0>".slow(24)
.mask(introMask)
```

**0** = silent, **1** = playing. Controls exactly which sections contain which layers.

### 3. Stereo Field Manipulation

```javascript
.pan(0)  // Hard left
.pan(1)  // Hard right
```

Creates disorienting stereo chaos in bridge section.

### 4. Pattern Repetition Operators

```javascript
"b1!4"   // Repeat b1 four times (palm-mute effect)
"[b5 f6]*8"  // Repeat bracket contents 8 times
```

### 5. Speed Manipulation

```javascript
.fast(8)   // 8x faster (tremolo picking)
.slow(4)   // 4x slower (section control)
```

### 6. Heavy Effects Chains

```javascript
.crush(5).lpf(3000).gain(0.3).fast(8)
```

Multiple effects stacked for complex timbres.

---

## How to Deploy

### Full Weapon Sequence

1. Copy `memetic_kill_agent.js` to https://strudel.cc/
2. Press play
3. Experience all 7 phases of attack automatically
4. Observe abrupt termination

### Modular Deployment

1. Start with `memetic_kill_agent_simple.js`
2. Uncomment weapon systems one at a time:
   - Start with just blast beats
   - Add tremolo layers
   - Activate different phases progressively
3. Build your own attack sequence

### Parameter Warfare

**More aggressive:**
- Increase `.crush()` values (try 2-4 for extreme degradation)
- Increase `.distort()` values
- Speed up tempo: `setcps(220/60/4)` for 220 BPM

**More chaotic:**
- Add `.degradeBy(0.3)` for glitchy dropouts
- Use `.jux(rev)` for stereo reversed patterns
- Layer more dissonant intervals

**More mechanical:**
- Increase `.clip()` for harder limiting
- Remove all `.room()` reverb completely
- Add perfect grid quantization (already default)

---

## Artistic Concept

### Information as Weapon

In the digital age, ideas can spread like viruses, rewriting thoughts and behaviors. The SCP Foundation's "memetic kill agent" concept takes this to an extreme: information so hostile it causes immediate harm just by being perceived.

This composition embodies that concept through:

**Weaponized Patterns:** Each riff, rhythm, and timbre is designed to assault
**Precision Execution:** Inhuman timing emphasizes algorithmic, not organic
**Cognitive Overload:** Climax layers everything simultaneously
**No Escape:** Abrupt termination - no resolution or closure

### The Hostile Code Aesthetic

Black metal traditionally evokes occult, natural, or mythological themes. This piece reimagines black metal for the age of information warfare:

- **Not demons, but malicious code**
- **Not forests, but data streams**
- **Not ancient rituals, but algorithmic processes**
- **Not transcendence, but system override**

### Meshuggah Meets Black Metal

**From Meshuggah:** Locked grooves, rhythmic precision, mechanical feel
**From Black Metal:** Tremolo riffs, blast beats, dissonant harmonies, raw fury
**Result:** Algorithmic aggression - music as weapon deployment

---

## Performance Notes

### Live Coding Tactics

1. **Start silent** - build tension before attack
2. **Intro hits hard** - establish hostility immediately
3. **Use breakdown** as moment to prepare next attack
4. **Build to climax** - progressive escalation
5. **Cut abruptly** - no warning, transmission ends

### Modification Ideas

**Create variations:**
- Different blast beat patterns per section
- Alternate tritone intervals (use other diminished 5ths)
- Add glitch effects with `.degradeBy()`
- Experiment with different bit-crush values per layer

**Extend sections:**
- Adjust `.slow()` values for longer/shorter phases
- Add more positions to alternating patterns
- Create additional breakdown variations

**Increase aggression:**
- Layer more dissonant tremolo patterns
- Faster tempos (200+ BPM)
- More extreme bit-crushing (crush: 2-3)

---

## Technical Specifications

### Tempo & Timing
- **190 BPM** - fast and aggressive
- **CPS:** `setcps(190/60/4)` = 0.79 cycles/second
- **Sections:** ~24 cycles total for complete deployment

### Frequency Ranges
- **Sub-bass:** 50-300 Hz (breakdown bass pulse)
- **Low:** 300-800 Hz (palm-muted chugs)
- **Mid:** 800-3000 Hz (tremolo riffs)
- **High-mid:** 3000-6000 Hz (alarm siren, top tremolo layer)
- **High:** 6000-8000 Hz (hi-hats, extreme elements)

### Bit-Crushing Strategy
- **Extreme (2-3):** Harsh noise, alarm siren
- **Heavy (4-5):** Guitars, chugging
- **Very Heavy (6-7):** Drums, hi-hats

### Effect Settings
- **Reverb:** Minimal (room: 0.1) for dry aggression
- **Distortion:** Used on intro only (0.6-0.8)
- **LPF:** Varies by layer (300-8000 Hz)
- **Clipping:** Hard limit at 0.9 for controlled distortion

---

## Inspirations & References

### SCP Foundation
- **SCP-001 (Memetic Kill Agent):** Information that terminates on perception
- **Cognitohazards:** Patterns that affect cognition
- **Information warfare:** Ideas as weapons

### Musical Influences
- **Meshuggah:** Locked grooves, mechanical precision, rhythmic complexity
- **Darkthrone / Mayhem:** Raw black metal fury, lo-fi aggression
- **Aphex Twin (Ventolin):** Harsh digital assault, sonic weaponry
- **Merzbow:** Noise as weapon, overwhelming sensory assault

### Digital Warfare Concept
- **Malware:** Hostile code that hijacks systems
- **DDoS attacks:** Overwhelming with information
- **Kill switches:** Abrupt termination
- **Algorithmic processes:** Inhuman precision and execution

---

## Conclusion

**MEMETIC_KILL_AGENT** demonstrates how Strudel can create not just music, but weaponized sound. By using:

- Algorithmic precision (perfect quantization)
- Harsh digital timbres (square waves, bit-crushing)
- Structural violence (abrupt cuts, dynamic extremes)
- Cognitive overload (layering to excess)
- Strategic deployment (weapon phases)

...we create a composition that feels like being attacked by hostile code. This isn't music to enjoy - it's music to survive. The patterns rewrite your expectations, the precision denies humanity, the aggression allows no escape.

**[MEMETIC HAZARD DEPLOYED]**
**[TARGET ACQUIRED]**
**[ENGAGING]**
**[TRANSMISSION TERMINATED]**

---

**WARNING:** This composition is designed for maximum aggression. Use headphone volume responsibly.

**To deploy:** Copy to https://strudel.cc/ and initiate sequence
**To experiment:** Start with `memetic_kill_agent_simple.js`
**To survive:** Press `Ctrl + .` for emergency termination
