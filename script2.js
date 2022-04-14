function position(firstPlace, secondPlace, lastPlace){

    let podio = [firstPlace, secondPlace, lastPlace]

    if(lastPlace==="Daniel"){
         let ultimoColocado = [firstPlace, "Daniel", secondPlace]
        return ultimoColocado.join(", ")
    } 
    else if("Daniel"===secondPlace){
        let penultimoColocado = ["Daniel", firstPlace, secondPlace]
        return penultimoColocado.join(", ")
     }
     else {
         return podio
     }
    }
