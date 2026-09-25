// Dedicated verified P7 crops; never route portraits through shared fallback images.
export const ABOUT_PORTRAITS = [
  { leader: 'managingDirector', src: `${import.meta.env.BASE_URL}images/about/zahid-nawawi.png` },
  { leader: 'assistantManager', src: `${import.meta.env.BASE_URL}images/about/zaihidah-nawawi.png` },
] as const;
