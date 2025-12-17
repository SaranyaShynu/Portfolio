import React, { useState, useEffect, useRef } from "react";

/**
 * Memory Game — 12 pairs (24 cards) with emoji icons (Option A)
 * Includes:
 * - WebAudio beep sounds for flip/match/win
 * - 3D flip + glow animations
 * - Win modal
 */

const EMOJIS = [
  "🐱","⭐","🍓","🎧","🦋","🍕","💜","🚀","🌈","🎮","🐻","🎀"
];

const createShuffledDeck = () => {
  const base = EMOJIS.map((e) => ({ emoji: e, matched: false }));
  const doubled = [...base, ...base];
  return doubled
    .map((c) => ({ ...c, id: Math.random().toString(36).slice(2) }))
    .sort(() => Math.random() - 0.5);
};

export default function Games() {
  const [cards, setCards] = useState([]);
  const [first, setFirst] = useState(null);
  const [second, setSecond] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const [turns, setTurns] = useState(0);
  const [matches, setMatches] = useState(0);
  const [showWin, setShowWin] = useState(false);

  const audioCtxRef = useRef(null);

  // Initialize WebAudio context
  useEffect(() => {
    audioCtxRef.current = null; // will be created on first interaction (autoplay rules)
  }, []);

  const playTone = (freq, duration = 0.12, type = "sine") => {
    // Create audio context lazily (user gesture required in many browsers)
    if (!audioCtxRef.current) {
      audioCtxRef.current = new (window.AudioContext || window.webkitAudioContext)();
    }
    const ctx = audioCtxRef.current;
    const o = ctx.createOscillator();
    const g = ctx.createGain();
    o.type = type;
    o.frequency.value = freq;
    o.connect(g);
    g.connect(ctx.destination);
    g.gain.setValueAtTime(0.0001, ctx.currentTime);
    g.gain.exponentialRampToValueAtTime(0.2, ctx.currentTime + 0.01);
    o.start();
    g.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + duration);
    o.stop(ctx.currentTime + duration + 0.02);
  };

  const soundFlip = () => playTone(800, 0.08);
  const soundMatch = () => playTone(1200, 0.14, "triangle");
  const soundWin = () => {
    playTone(1000, 0.1, "sine");
    setTimeout(() => playTone(1400, 0.12, "sine"), 120);
    setTimeout(() => playTone(1800, 0.14, "sine"), 260);
  };

  useEffect(() => {
    resetGame();
    // eslint-disable-next-line
  }, []);

  const resetGame = () => {
    setCards(createShuffledDeck());
    setFirst(null);
    setSecond(null);
    setDisabled(false);
    setTurns(0);
    setMatches(0);
    setShowWin(false);
  };

  useEffect(() => {
    if (first && second) {
      setDisabled(true);
      if (first.emoji === second.emoji) {
        // mark matched
        setCards((prev) =>
          prev.map((c) =>
            c.emoji === first.emoji ? { ...c, matched: true } : c
          )
        );
        setMatches((m) => m + 1);
        soundMatch();
        resetTurn();
      } else {
        setTimeout(() => {
          resetTurn();
        }, 800);
      }
    }
    // eslint-disable-next-line
  }, [second]);

  useEffect(() => {
    if (matches === EMOJIS.length) {
      // win
      soundWin();
      setTimeout(() => setShowWin(true), 400);
    }
  }, [matches]);

  const handleCardClick = (card) => {
    if (disabled) return;
    // ignore clicking matched or same card twice
    if (card.matched) return;
    if (first && card.id === first.id) return;

    soundFlip();
    if (!first) setFirst(card);
    else if (!second) setSecond(card);
  };

  const resetTurn = () => {
    setFirst(null);
    setSecond(null);
    setTurns((t) => t + 1);
    setDisabled(false);
  };

  // helper to check if card should be face-up
  const isRevealed = (card) => {
    if (card.matched) return true;
    if (first && card.id === first.id) return true;
    if (second && card.id === second.id) return true;
    return false;
  };

  return (
    <section className="min-h-screen py-12 px-4 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-bold dark:text-white">Memory Game</h2>
          <div className="flex gap-3 items-center">
            <button
              onClick={resetGame}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              New Game
            </button>
            <div className="text-gray-700 dark:text-gray-300">Turns: {turns}</div>
            <div className="text-gray-700 dark:text-gray-300">Matches: {matches}</div>
          </div>
        </div>

        <div className="game-grid grid grid-cols-4 sm:grid-cols-6 gap-4">
          {cards.map((card) => {
            const revealed = isRevealed(card);
            return (
              <div
                key={card.id}
                className={`card ${revealed ? "is-flipped" : ""} ${card.matched ? "matched" : ""}`}
                onClick={() => handleCardClick(card)}
              >
                <div className="card-inner">
                  <div className="card-face card-front bg-white dark:bg-gray-800 border dark:border-gray-700">
                    <div className="emoji-lg">{card.emoji}</div>
                  </div>

                  <div className="card-face card-back bg-blue-600 dark:bg-blue-500 text-white flex items-center justify-center">
                    {/* back design */}
                    <div className="text-xl">❓</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Win modal */}
        {showWin && (
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="modal-backdrop absolute inset-0" onClick={() => setShowWin(false)} />
            <div className="relative bg-white dark:bg-gray-800 p-8 rounded-xl shadow-xl z-10 max-w-md w-full text-center">
              <h3 className="text-2xl font-bold mb-4">🎉 You won!</h3>
              <p className="mb-6">Turns: {turns} — Great memory!</p>
              <div className="flex justify-center gap-3">
                <button
                  onClick={() => { resetGame(); }}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg"
                >
                  Play Again
                </button>
                <button
                  onClick={() => setShowWin(false)}
                  className="px-4 py-2 border rounded-lg"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
