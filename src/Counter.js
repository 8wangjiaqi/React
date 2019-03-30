import React, { Component } from 'react'
import store from './store';
//store 连接action和reducer的一个对象
//action是一个对象，描述state的变化
//reducer定义了如何响应action描述地state的变化，并发送到store
export default class Counter extends Component {
    constructor(){
        super();
        this.state={
            num:store.getState().counter
        }
        store.subscribe(()=>{
            this.setState({  //重新获取
                num:store.getState().counter
            })
        })
    }
    handleAdd=()=>{
        let action={type:'add',value:5}
        store.dispatch(action);
        //dispatch()将使用当前getState()结果和给定的action同步调用存储的reduce函数
        // console.log(store.getState());
    }
    handleDec=()=>{
        let action={type:'dec'}
        store.dispatch(action);
        // console.log(store.getState());
    }
    handleIncOdd=()=>{
        let action={type:'incOdd'}
        if(store.getState().counter%2===1){
            store.dispatch(action); 
        }
        //else{
        //     console.log('偶数');
        // }
        // store.dispatch(action); 
    }
    handleIncAsy=()=>{
        let action={type:'incAsy'}
        setTimeout(function(){
            store.dispatch(action); 
        },1000) 
    }
    render() {
        return (
            <div>
                <p>
                    Clicked: <span>{store.getState().counter}</span> times
                    <button onClick={this.handleAdd} style={{margin:'10px'}}>+</button>
                    <button onClick={this.handleDec}>-</button>
                    <button onClick={this.handleIncOdd} style={{margin:'10px'}}>Increment if odd</button>
                    {/* 奇数时递增 */}
                    <button onClick={this.handleIncAsy}>Increment async</button>
                </p>
            </div>
        )
    }
}
