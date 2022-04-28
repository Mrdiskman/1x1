function position(firstPlace, secondPlace, lastPlace){

    let podio = [firstPlace, secondPlace, lastPlace]

    if(lastPlace==="Daniel"){
         let ultimoColocado = ["1 lugar", firstPlace,"2 lugar, Daniel", "3 lugar", secondPlace]
        return ultimoColocado.join(", ")
    } 
    else if("Daniel"===secondPlace){
        let penultimoColocado = ["1 lugar, Daniel", "2 lugar", firstPlace, "3 lugar", lastPlace]
        return penultimoColocado.join(", ") 
     }
     else {
         return podio
     }
    }

    position("Rafael", "Manoel", "Daniel")
