import React , {Component} from 'react';

class List extends Component{

    state = {
        is: false
    }

list = () => {
    return(
    <div>
        <span>{this.props.course.name}</span>
        <button className='edit' onClick={ () => {this.toggle()} } >Edit</button>
        <button className='del' onClick={ () => {this.props.delete(this.props.index)}} >Delete</button>
    </div>
    )
}

    toggle = (e) => {
    let {is} = this.state;
    this.setState({
        is: !is
    })
    }

    finish = (e) => {
        e.preventDefault();
        this.props.edit(this.props.index,this.input.value);
        this.toggle();
    }

    editform = () => {
        return(
  <form onSubmit={this.finish}>
       <input type='text' ref={(v) => {this.input = v}} defaultValue={this.props.course.name} />
       <input type='submit' value='Update' />
  </form>
        )
    }

    render(){
        let {is} = this.state;
        return(
    <div>
        { is ? this.editform() : this.list()}
    </div>
        )
    }
} 

export default List;