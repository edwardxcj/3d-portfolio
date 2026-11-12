import { lazy, useCallback, useEffect, useRef, useState } from "react";

import HomeInfo from "../components/HomeInfo";
import OptionalScene from "../components/OptionalScene";
import sakura from "../assets/sakura.mp3";
import { soundoff, soundon } from "../assets/icons";

const HomeScene = lazy(() => import("../components/HomeScene"));

const Home = () => {
  const audioRef = useRef(null);
  const [currentStage, setCurrentStage] = useState(null);
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);
  const [musicFailed, setMusicFailed] = useState(false);
  const clearStage = useCallback(() => setCurrentStage(null), []);

  useEffect(() => {
    const audio = audioRef.current;
    return () => audio.pause();
  }, []);

  const handleMusicToggle = async () => {
    const audio = audioRef.current;
    if (!audio.paused) {
      audio.pause();
      return;
    }

    setMusicFailed(false);
    if (!audio.hasAttribute("src") || audio.error) {
      audio.volume = 0.4;
      audio.src = sakura;
    }

    try {
      await audio.play();
    } catch (error) {
      if (error.name !== "AbortError" && audioRef.current === audio) {
        setIsPlayingMusic(false);
        setMusicFailed(true);
      }
    }
  };

  return (
    <section className="relative min-h-screen w-full bg-gradient-to-b from-sky-100 to-slate-50">
      <div className="pointer-events-none relative z-10 flex justify-center pt-28">
        <HomeInfo currentStage={currentStage} />
      </div>

      <OptionalScene onUnavailable={clearStage}>
        <HomeScene setCurrentStage={setCurrentStage} />
      </OptionalScene>

      <div className="absolute bottom-2 left-2 z-10 flex items-center gap-2">
        <button
          type="button"
          aria-label="Background music"
          aria-pressed={isPlayingMusic}
          title={isPlayingMusic ? "Pause background music" : "Play background music"}
          className="rounded-lg bg-white p-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-800"
          onClick={handleMusicToggle}
        >
          <img
            src={isPlayingMusic ? soundon : soundoff}
            alt=""
            className="h-9 w-9 object-contain"
          />
        </button>
        {musicFailed && (
          <p role="status" className="rounded-lg bg-white px-3 py-2 text-sm text-slate-800">
            Background music couldn’t play.
          </p>
        )}
      </div>

      <audio
        ref={audioRef}
        preload="none"
        loop
        onPlay={() => setIsPlayingMusic(true)}
        onPause={() => setIsPlayingMusic(false)}
        onError={() => {
          setIsPlayingMusic(false);
          setMusicFailed(true);
        }}
      />
    </section>
  );
};

export default Home;
