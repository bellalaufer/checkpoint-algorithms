// Код для первого задания напиши в этой функции

function crawlTree(tree) {    
        if (Array.isArray(tree)) {
            return tree.reduce((acc, curr) => acc + crawlTree(curr), '');
        } else {
            return tree;
        }
      }



// Код для второго задания напиши в этой функции
function twoSum(arr, target) {
    function find(i, j) {
      if (j >= arr.length) {
        return find(i + 1, i + 2);
      }
      
      if (arr[i] + arr[j] === target) {
        return [i, j];
      }
      
      return find(i, j + 1);
    }
    
    return find(0, 1);
  }

// Всё, что ниже, нужно для тестов. Не изменяй этот код
const functions = { crawlTree, twoSum };
module.exports = functions;
