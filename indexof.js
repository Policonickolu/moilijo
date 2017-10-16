
// Sorted Array

var arr = [5, 7, 9, 13, 17, 18, 26, 34, 42, 53, 78];


// Iterative Function

function indefOfIterative(val, arr){

  // Parcours du tableau jusqu'à trouver notre valeur.
  
  for(var i  = 0; i < arr.length; i++){

    if(arr[i] == val)
      return i;

  }

  return -1;
}


// Recursive Function

function indexOfRecursive(val, arr, prevMin){

  var min = 0;
  var max = arr.length - 1;

  if(val >= arr[min] && val <= arr[max]){

    // Notre valeur est comprise entre la valeur min et la valeur max du tableau trié.

    // Nouvel indice = milieu du (sous-)tableau.
    i = Math.floor((arr.length - 1) / 2);


    if(val > arr[i]){

      // Notre valeur se trouve dans la première partie du tableau entre min et i.

      // On augmente notre minimum à i + 1.
      min = i + 1;

    }else if(val < arr[i]){

      // Notre valeur se trouve dans la seconde partie du tableau entre i et max.

      // On réduit notre maximum à i - 1.
      max = i - 1;

    }else{

      // val == arr[i]
      // Notre valeur se trouve à i, on l'a trouvée, on retourne donc i comme index.
      // On ajoute prevMin à i pour avoir l'indice de notre valeur dans le tableau initial et complet.
      return i + prevMin;
    }

    // On cherche l'indice de notre valeur dans le sous-tableau.
    return indexOfRecursive(val, arr.splice(min, max), min);

  }

  // Notre valeur n'est pas comprise entre la valeur min et la valeur max du tableau trié,
  // Donc elle ne se trouve pas dans le tableau.

  return -1;

}


// Execution

var indexIt = indefOfIterative(42, arr); // indice 8
var indexRec = indexOfRecursive(42, arr); // indice 8


// Render


console.log(arr);
console.log(indexIt);
console.log(indexRec);
