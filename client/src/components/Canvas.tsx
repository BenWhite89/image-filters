import React, { useEffect, useRef } from 'react';
import { Effects } from '../scripts/Effects';
import '../styles/components/Canvas.css';
import image from '../images/cat.png';

interface Props {
  src?: string
  effect: string
}

const Canvas: React.FC<Props> = ({ src=image, effect }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const selectedEffect = Effects.find(e => e.name === effect);

  useEffect(() => {
    if (canvasRef.current) {
      const canvas: HTMLCanvasElement = canvasRef.current;
      const context: CanvasRenderingContext2D | null = canvas.getContext('2d');

      if (context) {
        const image1: HTMLImageElement = new Image();
        image1.src = src;
        image1.addEventListener('load', () => {
          context.drawImage(image1, 0, 0, canvas.width, canvas.height);
          const scannedImage: ImageData = context.getImageData(0, 0, canvas.width, canvas.height);
          let scannedData: Uint8ClampedArray = scannedImage.data;

          if (selectedEffect) {
            scannedData = selectedEffect.apply(scannedData);
          }
        
          const updatedData: ImageData = new ImageData(scannedData, canvas.width, canvas.height)
          context.putImageData(updatedData, 0, 0);
        });
      }
    }
  })

  return (
    <div>
      <canvas ref={canvasRef} />
    </div> 
  )
}

export default Canvas;