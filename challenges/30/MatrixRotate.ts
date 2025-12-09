export function rotate(matrix: number[][]): number[][] {
  const rotatedMatrix = matrix.map(row => [...row]);
  let matrixLength = matrix.length;
  for (let i = 0; i < matrixLength; i++) {
    for (let j = 0; j < (matrixLength); j++) {
      rotatedMatrix[i][j] = matrix[(matrixLength - 1) - j][i];
    }
  }
  return rotatedMatrix;
}