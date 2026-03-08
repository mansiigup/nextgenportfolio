import { useCallback, useRef } from 'react';

// Singleton AudioContext
let audioCtx: AudioContext | null = null;
const getAudioContext = () => {
  if (!audioCtx) audioCtx = new AudioContext();
  return audioCtx;
};

type SoundType = 'click' | 'hover' | 'success' | 'whoosh' | 'pop' | 'toggle';

const soundConfigs: Record<SoundType, { freq: number; duration: number; type: OscillatorType; gain: number; ramp?: number }> = {
  click: { freq: 800, duration: 0.06, type: 'sine', gain: 0.08 },
  hover: { freq: 600, duration: 0.04, type: 'sine', gain: 0.04 },
  success: { freq: 880, duration: 0.15, type: 'sine', gain: 0.06, ramp: 1320 },
  whoosh: { freq: 300, duration: 0.2, type: 'sawtooth', gain: 0.03, ramp: 100 },
  pop: { freq: 1200, duration: 0.05, type: 'sine', gain: 0.07, ramp: 600 },
  toggle: { freq: 500, duration: 0.08, type: 'triangle', gain: 0.06, ramp: 700 },
};

export const useSoundEffects = () => {
  const enabled = useRef(true);

  const playSound = useCallback((type: SoundType) => {
    if (!enabled.current) return;
    try {
      const ctx = getAudioContext();
      if (ctx.state === 'suspended') ctx.resume();

      const config = soundConfigs[type];
      const oscillator = ctx.createOscillator();
      const gainNode = ctx.createGain();

      oscillator.type = config.type;
      oscillator.frequency.setValueAtTime(config.freq, ctx.currentTime);
      if (config.ramp) {
        oscillator.frequency.exponentialRampToValueAtTime(config.ramp, ctx.currentTime + config.duration);
      }

      gainNode.gain.setValueAtTime(config.gain, ctx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + config.duration);

      oscillator.connect(gainNode);
      gainNode.connect(ctx.destination);
      oscillator.start(ctx.currentTime);
      oscillator.stop(ctx.currentTime + config.duration);
    } catch {
      // Silently fail if audio context is not available
    }
  }, []);

  const toggleSound = useCallback((value: boolean) => {
    enabled.current = value;
  }, []);

  return { playSound, toggleSound, isSoundEnabled: enabled };
};

// Global singleton for non-hook contexts
let globalPlaySound: ((type: SoundType) => void) | null = null;

export const initGlobalSound = (playFn: (type: SoundType) => void) => {
  globalPlaySound = playFn;
};

export const playGlobalSound = (type: SoundType) => {
  globalPlaySound?.(type);
};
