import imageCompression from 'browser-image-compression';

const utils = {
  formatImageSource: (src) => {
    if (import.meta.env.MODE === 'development') return src;
    const publicRemoved = src.split('/public');
    return publicRemoved[publicRemoved.length - 1];
  },
  
  compressImage: async (picture) => {
    const options = {
      maxSizeMB: 1,
      maxWidthOrHeight: 1920,
      useWebWorker: true
    };
    try {
      return await imageCompression(picture, options);
    } catch (error) {
      // this.errorAddModel = true;
      console.log(error);
      throw error;
    }
  }
}

export default utils;
