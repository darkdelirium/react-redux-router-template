const initialState = { currentValue: 0 };

export default function testValue(state = initialState, action) {
  if (action.type === "CHANGE_VALUE") {
    console.log("called CHANGE_VALUE", action.payload);
    return { currentValue: action.payload };
  }
  return state;
}
