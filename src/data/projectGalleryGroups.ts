export type ProjectPhotoStage = 'before' | 'after';

const p08BeforeIds = Array.from({ length: 22 }, (_, index) => {
  const photoNumber = index * 3 + 1;
  return `P08-${String(photoNumber).padStart(3, '0')}`;
});

export const P08_BEFORE_PHOTO_IDS = new Set<string>(p08BeforeIds);

export const getProjectPhotoStage = (assetId: string): ProjectPhotoStage | null => {
  if (!assetId.startsWith('P08-')) return null;
  return P08_BEFORE_PHOTO_IDS.has(assetId) ? 'before' : 'after';
};

export const splitProjectPhotosByStage = (assetIds: string[]) => ({
  before: assetIds.filter((id) => getProjectPhotoStage(id) === 'before'),
  after: assetIds.filter((id) => getProjectPhotoStage(id) === 'after'),
});
