
//Saving Form details in store
export const formDetails=(details)=>{
    return {
        type :"FORMDETAILS",
        payload : details
    }
}


//Sending Clicked Card to Store
export const delCard=(card)=>{
    return {
        type :"DELCARD",
        payload : card
    }
}