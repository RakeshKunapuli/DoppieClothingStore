export let setSearch=(value)=>({
    type:"SEARCH",
    payload:value
    })

var object ={
    search:''
}


let rootReducer = (state=object,action)=>{
switch(action.type){
    case "SEARCH":
        return {...state, search:action.payload}
        default:
            return state
}
}

export default rootReducer;