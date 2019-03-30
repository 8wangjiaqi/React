import React, { Component } from 'react';
import store from './store';

export default class TodoList extends Component {
    constructor(){
        super();
        this.state={
            list:store.getState().todo.list
        }
        
        store.subscribe(()=>{//监控到数据变化时，重新获取数据
            this.setState({  //重新获取
                // list:store.getState().list
                list:store.getState().todo.list
            })
        })
    }
    handleAdd=(e)=>{
        if(e.keyCode===13){
            if(e.target.value!==''){
                store.dispatch({
                    type:'add_item',
                    value:e.target.value
                })
            }
            e.target.value=''
        }
    }
    handleDel=(index)=>{
        // console.log(index)
        store.dispatch({
            type:'del_item',
            index:index
        })
       
    }
    
    render() {
        return (
            <div>
                <input onKeyDown={this.handleAdd} type="text"/><br/>
                <ul>
                    {
                        this.state.list.map((item,index)=>(
                            <li key={index}>{index}&nbsp;
                                {item}<button   onClick={this.handleDel.bind(this,index)} style={{margin:'10px'}}>删除{index}</button>
                            </li>
                            
                        ))
                    }
                </ul>
            </div>
        )
    }
}