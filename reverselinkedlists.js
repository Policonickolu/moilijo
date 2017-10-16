
// Linked chain

var list = {  
            value: 4,
            next: {
                    value: 5,
                    next: {
                            value: 12,
                            next: {
                                    value: 13,
                                    next: null
                                  }
                            }
                  }
            }





// Reverse Function

function reverse(list) {

  // S'il y a un élement suivant
  if (list.next){

    // On garde une référence de l'élément suivant
    let ln = list.next;
  
    // Mais on le déréférencie dans l'élément actuel en tant que suivant.
    list.next = null;

    // On inverse la sous-liste
    let rList = reverse(ln);

    // On ajoute l'élément actuel à la nouvelle liste inversée en tant que
    // suivant de l'élément qui était autrefois son propre suivant.
    ln.next = list;

    return rList;
  }

  // Si pas d'élement suivant, on retourne l'élément actuel comme étant le premier
  // de la nouvelle liste.
  return list;

}



// Execution

var rList = reverse(list);

console.log(JSON.stringify(rList, null, 2));