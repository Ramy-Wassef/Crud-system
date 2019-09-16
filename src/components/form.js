import React from 'react';

const Form = (props) => {
    return(
<form onSubmit={props.add} className='form' >
<input type='text' onChange={props.update} value={props.current} id='name' />
<input type='submit' value='Add' />
</form>    
    )
}
 
export default Form;