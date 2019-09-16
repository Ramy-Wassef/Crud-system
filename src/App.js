import React , {Component} from 'react';
import './App.css';
import Form from './components/form';
import List from './components/list';

class App extends Component{

state = {

courses:  [
    {name: 'HTML' },
    {name: 'CSS' },
    {name: 'JS' }
  ],
  current:''
}
 
update = (e) => {
this.setState({
  current:e.target.value
})
}

add = (e) => {
e.preventDefault();
if(e.target.name.value === ''){
  return false
}else{
let current = this.state.current;
let array = this.state.courses;
array.push({name:current});
this.setState({
  courses:array,
  current:''
})
}
}

delete = (index) => {
let array = this.state.courses;
array.splice(index , 1);
this.setState({
courses: array
})
}

edit = (index,value) => {
  let array = this.state.courses;
  let unit = array[index];
  unit['name'] = value;
  this.setState({
    courses: array
  })
}



render(){

const {courses} = this.state;
let length = courses.length;
const list = length ? ( courses.map( (course , index) => {
  return <List course={course} key={index} index={index} delete={this.delete} edit={this.edit} />
} ) ) : (
  <p>No courses</p>
)

    return(
      <div className='app' >
      <h1>Courses</h1>
     <Form update={this.update} add={this.add} current={this.state.current} />
     {list}
      </div>
    )
  }
}

export default App;
