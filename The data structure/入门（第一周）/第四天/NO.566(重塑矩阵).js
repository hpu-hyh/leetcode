// 在 MATLAB 中，有一个非常有用的函数 reshape ，它可以将一个 m x n 矩阵重塑为另一个大小不同（r x c）的新矩阵，但保留其原始数据。

// 给你一个由二维数组 mat 表示的 m x n 矩阵，以及两个正整数 r 和 c ，分别表示想要的重构的矩阵的行数和列数。

// 重构后的矩阵需要将原始矩阵的所有元素以相同的 行遍历顺序 填充。

// 如果具有给定参数的 reshape 操作是可行且合理的，则输出新的重塑矩阵；否则，输出原始矩阵。
// 示例 1：
// 输入：mat = [[1,2],[3,4]], r = 1, c = 4
// 输出：[[1,2,3,4]]

// 示例 2：
// 输入：mat = [[1,2],[3,4]], r = 2, c = 4
// 输出：[[1,2],[3,4]]

//代码实现：
function matrixReshape(mat, r, c) {
  // 不符合条件，直接返回原数组
  const m = mat.length,
    n = mat[0].length;
  if (m * n != r * c) return mat;
  // 将二维数组数组扁平化一维
  const newArr = mat.flat();
  const res = [];
  // 截取数组
  for (let i = 0; i < r; i++) {
    res.push(newArr.splice(0, c));
    //splice返回的是删除的元素，所以可以用来截取数组元素
  }
  return res;
}
