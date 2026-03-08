import { createContext, useContext, type ReactNode } from 'react';
import { useSoundEffects, initGlobalSound } from '@/hooks/useSoundEffects';
import { useEffect } from 'react';

type SoundType = 'click' | 'hover' | 'success' | 'whoosh' | 'pop' | 'toggle';

interface SoundContextType {
  playSound: (type: SoundType) => void;
}

const SoundContext = createContext<SoundContextType>({ playSound: () => {} });

export const useSound = () => useContext(SoundContext);

export const SoundProvider = ({ children }: { children: ReactNode }) => {
  const { playSound } = useSoundEffects();

  useEffect(() => {
    initGlobalSound(playSound);
  }, [playSound]);

  return (
    <SoundContext.Provider value={{ playSound }}>
      {children}
    </SoundContext.Provider>
  );
};
