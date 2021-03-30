interface ICanvas {
  imageSrc: string
  effect: string
}

interface CanvasProps {
  canvas: ICanvas 
}

interface EffectSelectorProps {
  selectEffect: (effect: string) => void
}

interface Effect {
  name: string
  apply: (scannedData: Uint8ClampedArray) => Uint8ClampedArray
} 