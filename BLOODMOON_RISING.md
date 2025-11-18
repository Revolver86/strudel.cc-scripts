# BLOODMOON_RISING

**Raw Driving Black Metal - Darkthrone Style**
*Pure Energy. Memorable Riffs. No Bullshit.*

> "Riffs you can headbang to. Music that makes you want to thrash around, not study it intellectually."

---

## Overview

**Tempo:** 175 BPM → 185 BPM (speeds up at outro)
**Key:** D Minor
**Progression:** D minor → F major → C major → G minor (main riff)
**Theme:** Primal forces, werewolf transformation, blood moon, raw unbridled energy
**Influences:** Darkthrone "A Blaze in the Northern Sky" era - raw, powerful, riff-focused

---

## Concept: Pure Black Metal Energy

This composition represents **raw driving black metal** in the classic Darkthrone style:

### What This IS:
✅ **MEMORABLE RIFFS** - you can hum them after one listen
✅ **Raw energy** - makes you want to blast it loud
✅ **Headbang-worthy** - groove despite the blast beats
✅ **Dynamic structure** - builds and releases tension
✅ **Classic BM techniques** - tremolo, blasts, minor keys
✅ **Song-focused** - verses, choruses, bridges that FLOW
✅ **Primal and immediate** - gut-level impact

### What This is NOT:
❌ Intellectual or experimental
❌ Overly polished or clinical
❌ Ambient or atmospheric (that's Static Cathedral)
❌ Technical wankery
❌ Formless noise

**The Test:** Can you hum the main riff after one listen? If yes, we succeeded.

---

## Song Structure

### Darkthrone-Style Arrangement

```
INTRO (20s)          → Ominous drone building anticipation
MAIN RIFF (4 bars)   → The instantly recognizable tremolo riff
VERSE 1 (16 bars)    → Main riff + higher octave call-response
PRE-CHORUS (8 bars)  → Power chord descent (tension build)
CHORUS (12 bars)     → CATCHY ascending riff + lead hook
VERSE 2 (16 bars)    → Main riff + atmospheric pad
BREAKDOWN (8 bars)   → Galloping bass + snare (NO kick!)
FINAL CHORUS (12)    → Everything together, maximum energy
OUTRO (8 bars)       → Speed to 185 BPM, unison thrash, STOP!
```

**Key principle:** Dynamic contrast creates impact. The breakdown makes the final chorus HIT HARDER.

---

## The Riffs - Memorable Songcraft

### MAIN RIFF: The Foundation

```javascript
note("[d3 f3 a3 f3] [f3 a3 c4 a3] [c3 e3 g3 e3] [g3 bb3 d4 bb3]")
  .fast(8)  // Tremolo picking
```

**Progression:** D minor → F major → C major → G minor

**Why this works:**
- **Simple chord movement** - easy to remember
- **Tremolo-picked** - classic BM technique
- **Four-bar phrase** - natural musical length
- **Moves through related chords** - sounds cohesive
- **Repeatable** - can cycle indefinitely without boring

**The test:** After hearing it once, can you hum "da-da-da-da, da-da-da-da"? YES!

**This is the RIFF** - the foundation of the entire song. Everything else references or builds from this.

### CHORUS RIFF: The Hook

```javascript
note("[d3 e3 f3 g3] [d3 e3 f3 g3] [d3 e3 f3 g3] [d3 e3 f3 g3]")
  .fast(8)
```

**Pattern:** D → E → F → G ascending

**Why this is CATCHY:**
- **Ascending motion** - creates lift and energy
- **Stepwise movement** - easy to follow and remember
- **Repeated 4 times** - drills it into your brain
- **Contrasts with main riff** - provides variety
- **Anthemic quality** - makes you want to raise fist and headbang

**Plus the lead melody:**
```javascript
note("[d5 e5 f5 g5 a5 g5 f5 d5]")
```

**Melodic contour:**
```
D → E → F → G → A (ascending to peak)
A → G → F → D (descending, resolution)
```

**This is THE HOOK** - the part you remember after the song ends. Singable (if black metal had clean vocals). Memorable. CATCHY.

### PRE-CHORUS: The Tension Builder

```javascript
note("[d4!4 ~!4] [c4!4 ~!4] [bb3!4 ~!4] [a3!4 ~!4]")
```

**Pattern:** D5 → C5 → Bb5 → A5 (descending power chords)

**Why this builds tension:**
- **Descending motion** - creates anticipation
- **No tremolo** - contrast with verses creates dramatic shift
- **Half-time FEEL** (while blasts continue) - pushes against rhythm
- **Power chords** - heavier, more brutal
- **Leads into chorus** - resolves tension with catchy hook

**Dynamic shift:** Main riff tremolo → Pre-chorus power chords → Chorus ascending = keeps song moving, prevents monotony

---

## Musical Elements Breakdown

### INTRO: Ominous Build (20 seconds)

```javascript
const intro_drone = note("d1")
  .sound("sawtooth")
  .lpf(200)
  .gain(0.5)
  .room(0.8)

const intro_thunder = s("bd:0*2")
  .gain(perlin.range(0.3, 0.7).slow(4))
  .speed(0.4)
  .room(0.9)
```

**Purpose:** Build anticipation before main riff explodes
**Character:**
- Low D drone (fundamental tone)
- Thunder-like percussion (ominous, primal)
- Sparse, dark, tension-building
- Room for main riff to EXPLODE after

**This isn't just intro for intro's sake** - it makes the main riff hit harder by contrast.

### BLAST BEATS: The Foundation

```javascript
stack(
  s("bd*8").gain(1.0).crush(6),           // 8 kicks per cycle
  s("~ sd ~ sd ~ sd ~ sd").gain(0.8),     // Classic blast pattern
  s("hh*16").gain(0.35).lpf(7000)         // 16th note hats
)
```

**Character:**
- **Tight and fast** - locked in, driving
- **Not maximum chaos** - groove-oriented
- **Foundation for riffs** - supports, doesn't overpower
- **Bit-crushed** (6-7) - raw Darkthrone aesthetic

**175 BPM** - fast enough to be aggressive, not so fast you can't headbang

### VERSE: Call-Response Higher Melody

```javascript
const verse_high_melody = note("[d5 ~ ~ ~] [f5 ~ ~ ~] [c5 ~ ~ ~] [g5 ~ ~ ~]")
```

**Pattern:** Octave higher than main riff, hitting on downbeats
**Purpose:** Call-response with main riff every 4 bars
**Effect:**
- Adds melodic interest without changing foundation
- Simple but effective layering
- Keeps verse from being just main riff loop

**Classic dual-guitar technique** - one plays riff, one adds melody

### BREAKDOWN: Galloping Tension

```javascript
const breakdown_gallop = note("<d1 d1 d1>").fast(3)  // Gallop rhythm
const breakdown_snare = s("~ sd ~ sd")               // NO KICK!
const breakdown_guitar = note("<d4 c4 bb3 a3 g3 f3 e3 d3>").slow(2)  // Descending
```

**Key innovation:** NO KICK DRUM
**Effect:**
- Creates tension through absence
- Galloping bass creates urgent feel
- Dark descending guitar line builds anticipation
- Makes final chorus return feel MASSIVE by contrast

**8 bars only** - enough to create impact, not so long it drags

### FINAL CHORUS: Maximum Energy

```javascript
// Everything together:
- Full blast beats
- Chorus ascending riff
- Lead melody hook
- Atmospheric pad
- Bass foundation
```

**Purpose:** Payoff after breakdown
**Duration:** 12 bars - long enough to enjoy, not so long it loses impact
**Energy level:** MAXIMUM - everything present, full intensity
**Why it hits harder:** Because breakdown stripped everything away first

---

## Sound Design: Raw Darkthrone Aesthetic

### Production Philosophy

**NOT:**
- Polished and clean
- Maximum reverb
- Overly processed

**YES:**
- Raw and gritty
- Bit-crushed (5-7 bits)
- Minimal reverb (room: 0.2-0.4 mostly)
- Lo-fi but clear enough to hear riffs

### Bit-Crushing Strategy

```javascript
.crush(5)  // Guitars - raw and gritty
.crush(6)  // Drums - heavy degradation
.crush(7)  // Hi-hats - maximum grind
```

**Purpose:** Classic black metal lo-fi aesthetic
**Balance:** Crushed enough to sound raw, not so much you lose the riffs

### Minimal Reverb

```javascript
.room(0.2)  // Master reverb - dry
.room(0.4)  // Main riff - slight space
.room(0.7)  // Lead melody - more present
```

**Philosophy:** Darkthrone isn't atmospheric - it's IN YOUR FACE
**Effect:** Raw, immediate, aggressive, not spacious

### Filtering

```javascript
.lpf(1800)  // Main riff - remove harsh highs but keep clarity
.lpf(350)   // Bass - deep and heavy
.lpf(4000)  // Lead - present but not piercing
```

**Balance:** Dark and heavy without being muddy

---

## Songcraft Principles: Making Riffs Stick

### 1. The "Hum Test"

**Can you hum the riff after one listen?**

**Main riff:** YES - simple chord progression, repeated pattern
**Chorus riff:** YES - ascending D-E-F-G, repeated 4 times
**Chorus lead:** YES - melodic contour with peak and resolution

**If you can't hum it, it's not memorable enough for this style.**

### 2. Repetition with Purpose

**Main riff:**
- Used in: Main section, Verse 1, Verse 2
- **But:** Each time with different layers (clean → +melody → +pad)
- **Effect:** Familiar but evolving

**Chorus riff:**
- Used in: First chorus, Final chorus
- **But:** Final chorus adds everything (pad, all layers)
- **Effect:** Payoff feels earned

**Breakdown:**
- Used once only
- **Purpose:** Create maximum contrast before final chorus
- **Effect:** Final chorus hits harder

### 3. Dynamic Contrast

```
LOUD:    Main riff, Verses, Choruses, Outro
MEDIUM:  Pre-chorus (half-time feel)
TENSION: Breakdown (no kick, gallop)
```

**Contrast creates impact** - if everything is loud, nothing is loud.

### 4. Clear Structure

```
A (main riff) → B (verse) → C (pre-chorus) → D (chorus) →
B' (verse 2) → E (breakdown) → D' (final chorus) → Outro
```

**Traditional song form** - listeners can follow the journey
**Not formless** - has verses, choruses, bridges
**Flows naturally** - each section leads logically to next

### 5. The Groove Element

Despite blast beats, this GROOVES:
- **Main riff:** Four-bar phrase creates head-nod rhythm
- **Pre-chorus:** Power chord descent has momentum
- **Chorus:** Ascending pattern creates lift
- **Breakdown:** Gallop rhythm is inherently groovy

**You can headbang to this** - that's the test. Not just blast chaos.

---

## Performance Notes

### Tempo Changes

**Main song:** 175 BPM
```javascript
setcps(175/60/4)
```

**Outro (final 8 bars):** 185 BPM
```javascript
setcps(185/60/4)  // Speed up!
```

**Effect:** Increases urgency and energy for finale
**Classic technique:** Many metal songs speed up slightly at end

### Abrupt Ending

**NOT:** Fade out
**YES:** All instruments hit final D power chord together and STOP

**Effect:** Sudden, brutal, leaves you wanting more
**Classic Darkthrone approach:** No gentle endings, just DONE

### Dynamic Performance Tips

1. **Let intro build** - don't rush into main riff
2. **Make main riff entrance IMPACT** - contrast with intro
3. **Pre-chorus should feel like pulling back** - creates tension
4. **Chorus should feel like release** - payoff from pre-chorus
5. **Breakdown strips everything away** - maximum contrast
6. **Final chorus is EVERYTHING** - hold nothing back
7. **Outro speeds up** - increase urgency, then STOP

---

## Darkthrone Comparison

### "A Blaze in the Northern Sky" Era Characteristics

✅ **Raw production** - lo-fi, gritty, bit-crushed
✅ **Memorable riffs** - not technical, just effective
✅ **Driving energy** - relentless forward motion
✅ **Classic technique** - tremolo + blast beats
✅ **Song structure** - verses/choruses that flow
✅ **Groove element** - you can headbang despite speed
✅ **Immediate impact** - gut-level, not cerebral
✅ **No pretension** - pure black metal energy

### What Makes This Style Work

**Simplicity:** Riffs are simple enough to remember
**Energy:** Relentless forward drive
**Contrast:** Dynamics create impact
**Groove:** Despite chaos, there's rhythm you can feel
**Memorability:** Hooks stick in your head
**Rawness:** Production serves the riffs, not vice versa

**This isn't about being the fastest, most technical, or most experimental** - it's about RIFFS that make you want to blast this loud and thrash around.

---

## Strudel Techniques Demonstrated

### 1. The "Hummable" Riff Construction

```javascript
note("[d3 f3 a3 f3] [f3 a3 c4 a3] [c3 e3 g3 e3] [g3 bb3 d4 bb3]")
```

**Chord-based patterns** - not random notes, but actual harmonic movement

### 2. Dynamic Section Control

```javascript
const mainRiffMask = "<0 0 0 1 0 0 0 0 0 0>".slow(28)
const chorusMask = "<0 0 0 0 0 0 1 0 0 0>".slow(28)
```

**Binary masking** creates clean transitions between sections

### 3. Call-Response Layering

```javascript
// Main riff plays continuously
mainTremoloRiff
// Higher melody answers every 4 bars
verseHighMelody
```

**Classic dual-guitar technique** - interaction between parts

### 4. Tempo Manipulation

```javascript
setcps(175/60/4)  // Main song
setcps(185/60/4)  // Outro (speed up!)
```

**Increasing tempo** creates urgency and excitement

### 5. Groove Despite Speed

```javascript
// Even at fast BPM, patterns create headbang rhythm
note("[d3 f3 a3 f3]").fast(8)  // Four-bar phrase
```

**Phrasing creates groove** even during tremolo picking

### 6. Strategic Use of Space

```javascript
// Breakdown removes kick drum - creates tension through ABSENCE
const breakdownSnare = s("~ sd ~ sd")  // No kick!
```

**What you DON'T play** is as important as what you do

---

## How to Use

### Full Composition

1. Copy `bloodmoon_rising.js` to https://strudel.cc/
2. Press play
3. Listen for:
   - Ominous intro building tension
   - **Main riff EXPLODING in** (is it memorable?)
   - Call-response guitars in verse
   - Pre-chorus power chord descent
   - **Chorus ascending riff + lead** (can you hum it?)
   - Verse 2 with atmospheric layer
   - Breakdown tension (notice NO kick!)
   - Final chorus payoff (everything together)
   - Outro thrashing to abrupt stop

### The Hum Test

After one listen:
- **Can you hum the main riff?** (D→F→C→G progression)
- **Can you hum the chorus?** (D-E-F-G ascending)
- **Can you hum the lead melody?** (D-E-F-G-A-G-F-D contour)

**If YES to all three:** The songwriting succeeded!

### Experimentation (Simple Version)

1. Start with `bloodmoon_rising_simple.js`
2. Play just the main riff - is it headbang-worthy?
3. Add blast beats - does it groove despite speed?
4. Layer in verse melody - does call-response work?
5. Build pre-chorus - does it create tension?
6. Unleash chorus - is it catchy?
7. Strip to breakdown - does absence create tension?
8. Stack final chorus - does it hit harder after breakdown?

### Modification Ideas

**More aggressive:**
- Faster tempo: `setcps(190/60/4)`
- More crush: Try `.crush(4)` on guitars
- Less reverb: Reduce all `.room()` values

**More groove:**
- Slower tempo: `setcps(160/60/4)`
- Emphasize downbeats more
- Add more space in patterns

**Different riffs:**
- Try different chord progressions
- Keep them simple and hummable!
- Test: Can you sing it back?

---

## Artistic Vision

### Primal Forces & Blood Moon

**Theme:** Werewolf transformation under blood moon
**Feeling:** Raw, unbridled, primal energy
**Not about:** Sophistication or intellectualism
**About:** Pure visceral black metal power

### Darkthrone Values

**Real Darkthrone black metal** prioritizes:
1. **THE RIFF** - memorable, powerful, simple
2. **THE ENERGY** - driving, relentless, aggressive
3. **THE GROOVE** - headbang-worthy despite blast beats
4. **THE RAWNESS** - lo-fi production, gritty
5. **THE SONG** - structure that flows, not formless

**Technical skill** is less important than **raw impact and memorable riffs**.

### Why This Matters

In a genre that can become:
- Too experimental (loses the riffs)
- Too polished (loses the rawness)
- Too chaotic (loses the groove)
- Too formless (loses the song)

**This composition stays TRUE to classic black metal values:**
- Riffs you can hum
- Energy you can feel
- Groove you can headbang to
- Rawness you can hear
- Song you can follow

**Pure black metal. No bullshit.**

---

## Comparison: Four Black Metal Approaches

### STATIC CATHEDRAL (Atmospheric)
- Focus: Transcendence, beauty, atmosphere
- Tempo: 135 BPM (slow)
- Character: Ethereal, reverb-heavy, contemplative

### MEMETIC_KILL_AGENT (Weaponized)
- Focus: Aggression, precision, assault
- Tempo: 190 BPM (fast)
- Character: Algorithmic, harsh, hostile

### WINTER_ETERNAL (Melodic)
- Focus: Song, melody, emotion
- Tempo: 150 BPM (mid)
- Character: Memorable, structured, beautiful

### BLOODMOON_RISING (Raw/Driving)
- Focus: **RIFFS, ENERGY, GROOVE**
- Tempo: 175 BPM (driving)
- Character: **RAW, MEMORABLE, HEADBANG-WORTHY**

**This one is pure Darkthrone-style energy** - the most immediately POWERFUL.

---

## Technical Specifications

### Tempo & Feel
- **175 BPM** - fast but groove-able
- **185 BPM** - outro only (speed increase)
- **CPS:** `setcps(175/60/4)` = 0.729 cycles/second

### Frequency Ranges
- **Bass:** 50-350 Hz (deep, heavy foundation)
- **Main riff:** 300-1800 Hz (gritty midrange)
- **Chorus riff:** 400-2000 Hz (slightly brighter)
- **Lead melody:** 1000-5000 Hz (cuts through mix)
- **Hi-hats:** 6000-8000 Hz (crispy top end)

### Effects Settings

**Bit-Crushing (Raw Aesthetic):**
- Drums: 6-7 (heavy degradation)
- Guitars: 5 (gritty but clear)
- Bass: None (needs weight)

**Reverb (Minimal):**
- Master: 0.2 (very dry)
- Main riff: 0.4 (slight space)
- Lead: 0.7 (more present)

**LPF (Dark but Clear):**
- Bass: 350 Hz (deep)
- Main riff: 1800 Hz (remove harsh highs)
- Lead: 4000-5000 Hz (present but not piercing)

---

## Conclusion

**BLOODMOON_RISING** demonstrates that black metal can be:
- **Raw AND memorable**
- **Fast AND groovy**
- **Simple AND powerful**
- **Aggressive AND catchy**

By focusing on:
- Memorable riffs (the hum test)
- Raw production (Darkthrone aesthetic)
- Dynamic structure (breakdown → climax)
- Groove element (headbang-worthy)
- Song flow (verses/choruses/bridges)

...we create pure black metal energy that makes you want to blast it loud and thrash around.

**The test:** Can you hum the main riff? Can you hum the chorus? Do you want to headbang?

**If YES:** This is real black metal.

---

**To experience:** Copy to https://strudel.cc/ and TURN IT UP
**To learn:** Start with `bloodmoon_rising_simple.js` and test each riff
**To remember:** That chorus ascending riff - D E F G - can you hum it?

*Blood moon rising. Primal forces unleashed. Pure black metal fury.*

🌕🐺🔥
