const formatImageSource = (src) => {
  if (import.meta.env.MODE === 'development') return src;
  const publicRemoved = src.split('/public');
  return publicRemoved[publicRemoved.length - 1];
}

export default formatImageSource;
