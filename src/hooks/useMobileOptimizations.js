import { useState, useEffect } from 'react';

const useMobileOptimizations = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [touchStart, setTouchStart] = useState(null);

  useEffect(() => {
    const checkMobile = () => {
      const userAgent = navigator.userAgent || navigator.vendor || window.opera;
      const isMobileDevice = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent);
      setIsMobile(isMobileDevice);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Touch gesture handling
  const handleTouchStart = (e) => {
    setTouchStart({
      x: e.touches[0].clientX,
      y: e.touches[0].clientY,
      time: Date.now()
    });
  };

  const handleTouchEnd = (e) => {
    if (!touchStart) return;

    const touchEnd = {
      x: e.changedTouches[0].clientX,
      y: e.changedTouches[0].clientY,
      time: Date.now()
    };

    // Detect swipe gestures
    const deltaX = touchEnd.x - touchStart.x;
    const deltaY = touchEnd.y - touchStart.y;
    const deltaTime = touchEnd.time - touchStart.time;

    // Minimum swipe distance and time
    if (Math.abs(deltaX) > 50 && deltaTime < 500) {
      if (Math.abs(deltaY) < Math.abs(deltaX)) {
        // Horizontal swipe
        return deltaX > 0 ? 'right' : 'left';
      }
    }

    setTouchStart(null);
  };

  // Haptic feedback (if available)
  const triggerHaptic = (type = 'light') => {
    if ('vibrate' in navigator) {
      switch (type) {
        case 'light':
          navigator.vibrate(10);
          break;
        case 'medium':
          navigator.vibrate(25);
          break;
        case 'heavy':
          navigator.vibrate(50);
          break;
        default:
          navigator.vibrate(10);
      }
    }
  };

  // Prevent zoom on double tap
  const preventDoubleTapZoom = (e) => {
    if (e.touches.length > 1) {
      e.preventDefault();
    }
  };

  // Optimize images for mobile
  const optimizeImages = () => {
    if ('loading' in HTMLImageElement.prototype) {
      const images = document.querySelectorAll('img[data-src]');
      images.forEach(img => {
        img.src = img.dataset.src;
      });
    }
  };

  // Add safe area padding for mobile devices
  const getSafeAreaInsets = () => {
    const style = getComputedStyle(document.documentElement);
    return {
      top: parseInt(style.getPropertyValue('--safe-area-inset-top')) || 0,
      right: parseInt(style.getPropertyValue('--safe-area-inset-right')) || 0,
      bottom: parseInt(style.getPropertyValue('--safe-area-inset-bottom')) || 0,
      left: parseInt(style.getPropertyValue('--safe-area-inset-left')) || 0
    };
  };

  return {
    isMobile,
    handleTouchStart,
    handleTouchEnd,
    triggerHaptic,
    preventDoubleTapZoom,
    optimizeImages,
    getSafeAreaInsets
  };
};

export default useMobileOptimizations;
