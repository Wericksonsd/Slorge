"use client"

import { useState, useEffect } from "react";
import styles from "./page.module.css";

export default function Home() {
  const [ruidoVolume, setRuidoVolume] = useState(0.5);
  const [ruido2Volume, setRuido2Volume] = useState(0.5);
  const [boingVolume, setBoingVolume] = useState(0.5);
  const [canufellVolume, setCanufellVolume] = useState(0.5);

  useEffect(() => {
    const ruido = document.getElementById("ruido-audio");
    const ruido2 = document.getElementById("ruido2-audio");
    const boing = document.getElementById("boing-audio");
    const canufell = document.getElementById("canufell-audio");

    // Define os volumes iniciais
    if (ruido) ruido.volume = ruidoVolume;
    if (ruido2) ruido2.volume = ruido2Volume;
    if (boing) boing.volume = boingVolume;
    if (canufell) canufell.volume = canufellVolume;

    // Força os áudios a tocar
    const audios = [ruido, ruido2, boing, canufell];
    audios.forEach((audio) => {
      if (audio) {
        audio.play().catch((error) => {
          console.warn("Reprodução bloqueada pelo navegador:", error);
        });
      }
    });
  }, [ruidoVolume, ruido2Volume, boingVolume, canufellVolume]);

  return (
    <div className={styles.container}>
      <h1>ALTERE OS NÍVEIS</h1>
      <div className={styles.niveis}>
        <input
          id="ruido"
          type="range"
          min="0"
          max="1"
          step="0.1"
          value={ruidoVolume}
          onChange={(e) => setRuidoVolume(parseFloat(e.target.value))}
        />
        <input
          id="ruido2"
          type="range"
          min="0"
          max="1"
          step="0.1"
          value={ruido2Volume}
          onChange={(e) => setRuido2Volume(parseFloat(e.target.value))}
        />
        <input
          id="boing"
          type="range"
          min="0"
          max="1"
          step="0.1"
          value={boingVolume}
          onChange={(e) => setBoingVolume(parseFloat(e.target.value))}
        />
        <input
          id="canufell"
          type="range"
          min="0"
          max="1"
          step="0.1"
          value={canufellVolume}
          onChange={(e) => setCanufellVolume(parseFloat(e.target.value))}
        />
      </div>

      {/* Áudios associados */}
      <audio id="ruido-audio" src="/audios/ruido.mp3" autoPlay loop />
      <audio id="ruido2-audio" src="/audios/ruido2.mp3" autoPlay loop />
      <audio id="boing-audio" src="/audios/boing.mp3" autoPlay loop />
      <audio id="canufell-audio" src="/audios/canufell.mp3" autoPlay loop />
      <audio id="fart-audio" src="/audios/fart.mp3" autoPlay loop />
    </div>
  );
}
