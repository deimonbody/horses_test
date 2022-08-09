import * as horsesActions from './actions';

const horseReducer = (builder) => {
    builder.addCase(horsesActions.updateHorsesList,(state,action)=>{
        state.horses = action.payload.horsesList
    })
};
export default horseReducer;