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
      const storeArr = getUniqueListBy(state.flat(), "groupName");

      function getUniqueListBy(arr, key) {
        return [...new Map(arr.map((item) => [item[key], item])).values()];
      }

      if (storeArr) {
        return storeArr.filter((x) => x.groupName !== details.groupName);
      }

    default:
      return state;
      break;
  }
};

export default handleDetails;
