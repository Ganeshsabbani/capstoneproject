

export const formDetails=(details)=>{
    return {
        type :"FORMDETAILS",
        payload : details
    }
}

export const delCard=(card)=>{
    return {
        type :"DELCARD",
        payload : card
    }
}