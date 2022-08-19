const cardDetails = [];

const handleDetails = (state = cardDetails, action) => {
  const details = action.payload;
  switch (action.type) {
    case "FORMDETAILS":
      if (details) {
        if (state) {
          return [...state, details];
        }
      }
      break;

    case "DELCARD":
     

      if(state){

       return (Array.from(new Set(state.flat())).filter((x) => x.groupName !== details.groupName));
      }
        
     

    default:
      return state;
      break;
  }
};

export default handleDetails;
