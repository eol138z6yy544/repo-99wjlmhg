import { Nostalgist } from 'https://cdn.jsdelivr.net/npm/nostalgist@0.21.1/+esm';

const loading = document.getElementById('loading');
const gameContainer = document.getElementById('game');

function createCanvas() {
  const canvas = document.createElement('canvas');
  canvas.id = 'emulator-canvas';
  gameContainer.innerHTML = '';
  gameContainer.appendChild(canvas);
  return canvas;
}

async function launch() {
  try {
    createCanvas();
    await Nostalgist.launch({
      core: 'genesis_plus_gx',
      rom: '/rom/umk3.md',
      element: '#emulator-canvas',
      resolveRom: (file) => file,
      retroarchConfig: {
        video_force_aspect: true,
        video_aspect_ratio: 1.3333,
      },
      retroarchCoreConfig: {
        genesis_plus_gx_region_detect: 'auto',
      },
    });
    loading.style.display = 'none';
  } catch (err) {
    console.error('Launch error:', err);
    loading.textContent = 'Failed to start emulator: ' + err.message;
  }
}

launch();
