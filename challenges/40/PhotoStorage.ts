export function numberOfPhotos(photoSizeMb: number, hardDriveSizeGb: number): number {

  return Math.floor((hardDriveSizeGb * 1000) / photoSizeMb);
}