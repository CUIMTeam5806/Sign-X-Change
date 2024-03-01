import Phaser from 'phaser';
import PlayScene from './PlayScene';
import PreloadScene from './PreloadScene';
// import "../static/style"; // Corrected import path

const config = {
  type: Phaser.CANVAS,
  width: 1000,
  height: 340,
  pixelArt: true,
  transparent: true,
  physics: {
    default: 'arcade',
    arcade: {
      debug: false,
    }
  },
  scene: [PreloadScene, PlayScene],
  canvas: document.getElementById("phaser-canvas"),
};
new Phaser.Game(config);
// Inside your src/index.js or another relevant JavaScript file
document.addEventListener('DOMContentLoaded', async () => {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    const videoElement = document.createElement('video');
    videoElement.srcObject = stream;
    document.body.appendChild(videoElement);
    videoElement.play();
  } catch (error) {
    console.error('Error accessing camera:', error);
  }
});
