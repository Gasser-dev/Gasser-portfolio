// hooks/useImagePreloader.js
import { useEffect, useState } from 'react';

export default function useImagePreloader(imageList) {
  const [imagesPreloaded, setImagesPreloaded] = useState(false);

  useEffect(() => {
    let isCancelled = false;

    async function preloadImages() {
      if (isCancelled) return;

      const promises = imageList.map((src) => {
        return new Promise((resolve) => {
          const img = new Image();
          img.src = src;
          img.onload = resolve;
          img.onerror = resolve;
        });
      });

      await Promise.all(promises);

      if (!isCancelled) {
        setImagesPreloaded(true);
      }
    }

    preloadImages();

    return () => {
      isCancelled = true;
    };
  }, [imageList]);

  return { imagesPreloaded };
}