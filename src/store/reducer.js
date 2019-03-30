import { combineReducers } from 'redux' ;
//合并
// import React, { Component } from 'react'


// export default (state=0,action)=>{
let counter= (state=0,action)=>{
    switch(action.type){
        case 'add':
            return state+action.value;
        case 'dec':
            return state-1;
        case 'incOdd':
            return state+1;
        case 'incAsy':
            return state+2;
        default:
            return state;

    }
}


let initValue={
    a:1,
    list:[1,2,3]
}
//export default(state=initValue,action)=>{
let todo=  (state=initValue,action)=>{
    switch(action.type){
        case 'add_item':
            let newState=JSON.parse(JSON.stringify(state));
            //let obj=Object.assign({},state,{a:100})
            // newState.list.push('123');
            newState.list.push(action.value);
            return newState;
        case 'del_item':
            // console.log(action.index)
            // console.log(state)
            state.list.splice(action.index,1)
        default:
            return state;
    }
}

// const todoApp = combineReducers({ 
//     counter,
//     todo
// }) 
    
export default combineReducers({
    todo,counter
})
