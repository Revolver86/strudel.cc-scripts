# Strudel Songs Collection

Black Metal / Industrial / Indie Outsider compositions for Strudel.cc

## 🎵 Songs

### 1. Neural Collapse
**File**: `neural_collapse_song.js`
**Style**: Black Metal / Industrial
**Tempo**: 185 BPM
**Complexity**: ★★★★★
**Theme**: The catastrophic failure of a neural network encountering input outside its training distribution

**Features**:
- Complete 6-section structure (intro, verse 1, breakdown, verse 2, bridge, outro)
- Dual tremolo-picked sawtooth riffs creating maximum dissonance
- Heavy bit-crushing and sample rate reduction for digital brutality
- Euclidean-influenced drum patterns
- Chromatic descending lead representing consciousness fragmenting
- Progressive corruption of the main arpeggio motif

**Best for**: Full composition, studying song structure, maximum brutality

---

### 2. Corrupted Transmission
**File**: `corrupted_transmission.js`
**Style**: Black Metal / Industrial / Indie Outsider
**Tempo**: ~180 BPM
**Complexity**: ★★★☆☆
**Theme**: Digital communication breakdown

**Features**:
- Modular building blocks (drums, riffs, melody, atmosphere)
- 8-section structure with clear progression
- Balance of harshness and melody
- Detailed customization tips included
- Multiple variation examples
- Good mix balance out of the box

**Best for**: Learning song structure, live performance, customization

---

### 3. Digital Ritual
**File**: `digital_ritual.js`
**Style**: Black Metal / Industrial
**Tempo**: ~168 BPM
**Complexity**: ★☆☆☆☆
**Theme**: Mechanized ceremony

**Features**:
- Ultra-simple single-block composition
- Immediate playability - just paste and run
- Core black metal elements (blast beats, tremolo picking, dissonance)
- Clear variation suggestions included
- Perfect starting point for modifications

**Best for**: Quick jams, learning basics, immediate gratification

---

### 4. Ghost in the Static
**File**: `ghost_in_the_static.js`
**Style**: Indie Outsider / Black Metal / Industrial
**Tempo**: ~132 BPM (slower)
**Complexity**: ★★★★☆
**Theme**: Human fragility persisting through hostile digital environments

**Features**:
- More melodic and emotional than other tracks
- Cleaner production with intentional lo-fi elements
- 6-act structure with clear emotional arc
- Balance of aggression and vulnerability
- Recurring melody motif that evolves throughout
- E minor (more accessible than Phrygian)

**Best for**: Emotional performances, studying dynamics, accessible entry point

---

## 🎛️ How to Use

### Quick Start
1. Go to https://strudel.cc/
2. Copy the entire content of any song file
3. Paste into the editor
4. Press Play (or Ctrl+Enter)

### Live Performance
Each song includes a live performance section with commented-out parts:
```javascript
// Uncomment sections one at a time for live coding
intro
verse
chorus
// etc.
```

### Customization

#### Tempo
```javascript
setcps(0.5)  // Slower
setcps(0.75) // Medium
setcps(1.0)  // Faster
```

#### Brutality
```javascript
.crush(3-5)   // Moderate
.crush(6-8)   // Heavy
.coarse(2-4)  // Moderate lo-fi
.coarse(5-8)  // Extreme lo-fi
```

#### Chaos
```javascript
.degradeBy(0.1-0.3)  // Slight glitching
.degradeBy(0.4-0.6)  // Moderate chaos
.degradeBy(0.7-0.9)  // Heavy destruction
```

---

## 🎸 Common Elements

### Scales Used
- **E Phrygian** (E F G A B C D) - Dark, exotic, dissonant
- **E Minor** (E F# G A B C D) - More accessible, emotional

### Drum Patterns
- **Blast beats**: `s("bd*8")` - Relentless double bass
- **Backbeat**: `s("~ sd ~ sd")` - Classic 2 and 4
- **Chaos hats**: `s("hh*16").degradeBy(0.3)` - Glitchy hi-hats

### Riff Techniques
- **Tremolo picking**: `.fast(2)` on note patterns
- **Dissonance**: Tritone intervals, chromatic movement
- **Bit-crushing**: `.crush(4-8)` for digital harshness

### Effects Chain
```javascript
.sound("sawtooth")  // Waveform
.lpf(1200)          // Filter cutoff
.lpq(5)             // Filter resonance
.crush(5)           // Bit crushing
.gain(0.8)          // Volume
.room(0.4)          // Reverb (optional)
.delay(0.3)         // Delay (optional)
```

---

## 🎯 Recommended Learning Path

1. **Start Simple**: `digital_ritual.js`
   - Understand basic structure
   - Experiment with parameters
   - Learn core functions

2. **Add Structure**: `corrupted_transmission.js`
   - Learn modular composition
   - Understand song sections
   - Practice building blocks

3. **Emotional Depth**: `ghost_in_the_static.js`
   - Dynamic range and progression
   - Melodic development
   - Storytelling through music

4. **Complex Composition**: `neural_collapse_song.js`
   - Advanced structure
   - Thematic development
   - Complete narrative arc

---

## 🔧 Troubleshooting

### Too Loud / Distorted
- Reduce `.gain()` values (try 0.6-0.8 on riffs)
- Lower drum gains to 0.9-1.1
- Reduce `.crush()` values for less distortion

### Too Quiet
- Increase `.gain()` on individual elements
- Check your browser volume
- Increase bass: `note("e1").sound("sine").gain(1.3)`

### Too Harsh
- Lower `.crush()` values (try 3-5 instead of 6-8)
- Reduce `.lpq()` (filter resonance)
- Decrease `.coarse()` or remove it
- Add `.room()` for more space

### Too Soft / Boring
- Increase `.crush()` values
- Add `.lpq()` for filter resonance
- Increase tempo: `setcps(1.0)` or higher
- Add `.degradeBy()` for chaos
- Layer more elements with `stack()`

### Not Enough Bass
- Increase bass gain: `.gain(1.2)` or higher
- Lower bass note: `note("e1")` or `note("e0")`
- Add sub bass layer: `note("e1").sound("sine").gain(1.3)`

---

## 🎨 Stylistic Notes

### Black Metal Elements
- Fast tempos (160-200 BPM)
- Tremolo-picked riffs (`.fast(2)`)
- Blast beat drums (`bd*8`)
- Phrygian or minor scales
- Raw, harsh production (`.crush()`)

### Industrial Elements
- Mechanical, repetitive patterns
- Heavy use of digital effects
- Bit-crushing and sample rate reduction
- Noise layers
- Unconventional percussion

### Indie Outsider Elements
- Lo-fi aesthetic
- Unconventional structure
- Emotional vulnerability
- Experimental approaches
- DIY production values

---

## 💡 Creative Prompts

### Remix Ideas
1. Slow down a fast song to half speed: `setcps(0.3)`
2. Remove all drums and make it ambient
3. Add your own melody over existing backing
4. Combine sections from different songs
5. Add `.degradeBy(0.8)` to everything for maximum chaos

### New Song Ideas
1. **Doom Metal**: Slow tempo (0.3-0.4), heavy bass, sparse drums
2. **Gabber/Hardcore**: Super fast (1.5+), distorted kicks
3. **Dark Ambient**: Remove drums, focus on drones and atmosphere
4. **Breakcore**: Fast breaks, heavy degradation, chaotic
5. **Witch House**: Slow, pitched-down, heavy reverb, minimal

---

## 📚 Further Learning

### Strudel Resources
- Main site: https://strudel.cc/
- Documentation: https://strudel.cc/learn/getting-started/
- Examples: Click shuffle in REPL
- This repo: See `STRUDEL_COMPREHENSIVE_GUIDE.md`

### Musical Concepts
- Phrygian mode and exotic scales
- Blast beat drumming techniques
- Industrial music production
- Black metal aesthetics
- Lo-fi/outsider music philosophy

---

## 🤘 Performance Tips

1. **Start minimal**: Begin with one or two elements
2. **Build gradually**: Add layers over time
3. **Use silence**: Drop out sections for impact
4. **Comment navigation**: Use `//` to quickly toggle parts
5. **Parameter live coding**: Modify values in real-time
6. **Save often**: Copy code to preserve your work
7. **Experiment fearlessly**: Can't break anything!

---

## 🎼 Song Structure Templates

### Basic Structure
```javascript
intro (4 cycles)
verse (8 cycles)
chorus (8 cycles)
verse (8 cycles)
bridge (4 cycles)
chorus (8 cycles)
outro (4 cycles)
```

### Extreme Metal Structure
```javascript
intro (2-4 cycles)
verse 1 (4-8 cycles)
breakdown (2-4 cycles)
verse 2 (4-8 cycles)
climax (4-8 cycles)
outro (2-4 cycles)
```

### Experimental Structure
```javascript
// No rules!
// Follow the vibe
// Let chaos guide you
```

---

**Ready to create your own black metal / industrial / indie outsider masterpiece?**

Open https://strudel.cc/ and start coding! 🎵🤘

Remember: `hush()` stops everything
