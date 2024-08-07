import React, { useEffect, useRef } from 'react';

const GrainyEffect: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const patternSize = 128;
    const patternAlpha = 20;
    const patternRefreshInterval = 6;

    let viewWidth = canvas.clientWidth;
    let viewHeight = canvas.clientHeight;
    let frame = 0;

    const initCanvas = () => {
      viewWidth = canvas.width = canvas.clientWidth;
      viewHeight = canvas.height = canvas.clientHeight;
    };

    const updatePattern = (patternCtx: CanvasRenderingContext2D, patternData: ImageData) => {
      for (let i = 0; i < patternData.data.length; i += 4) {
        const value = (Math.random() * 255) | 0;
        patternData.data[i] = value;
        patternData.data[i + 1] = value;
        patternData.data[i + 2] = value;
        patternData.data[i + 3] = patternAlpha;
      }
      patternCtx.putImageData(patternData, 0, 0);
    };

    const draw = (ctx: CanvasRenderingContext2D, patternCanvas: HTMLCanvasElement) => {
      ctx.clearRect(0, 0, viewWidth, viewHeight);
      ctx.fillStyle = ctx.createPattern(patternCanvas, 'repeat')!;
      ctx.fillRect(0, 0, viewWidth, viewHeight);
    };

    const loop = (patternCanvas: HTMLCanvasElement, patternCtx: CanvasRenderingContext2D, patternData: ImageData) => {
      if (++frame % patternRefreshInterval === 0) {
        updatePattern(patternCtx, patternData);
        draw(ctx, patternCanvas);
      }
      requestAnimationFrame(() => loop(patternCanvas, patternCtx, patternData));
    };

    const initGrainEffect = () => {
      const patternCanvas = document.createElement('canvas');
      patternCanvas.width = patternSize;
      patternCanvas.height = patternSize;
      const patternCtx = patternCanvas.getContext('2d')!;
      const patternData = patternCtx.createImageData(patternSize, patternSize);

      initCanvas();
      loop(patternCanvas, patternCtx, patternData);
    };

    initGrainEffect();
  }, []);

  return <canvas ref={canvasRef} style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }} />;
};

export default GrainyEffect;
