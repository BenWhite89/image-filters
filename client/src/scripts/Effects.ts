const DefaultEffect: Effect = {
  name: "None",
  apply: (scannedData) => scannedData,
}

const GrayscaleEffect: Effect = {
  name: "Grayscale",
  apply: (scannedData) => {
    for (let i = 0; i < scannedData.length; i += 4) {
      const total = scannedData[i] + scannedData[i+1] + scannedData[i+2];
      const averageColorValue = total/3;
      scannedData[i] = averageColorValue;
      scannedData[i+1] = averageColorValue; 
      scannedData[i+2] = averageColorValue;
    }
    return scannedData;
  },
}

export const Effects: Effect[]= [DefaultEffect, GrayscaleEffect]