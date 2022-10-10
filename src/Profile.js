import React,{useState} from 'react'

export default function Profile(){
const[data,setData] = useState(null)
const[show,setShow] = useState(false)
  return(
  <div>
  {show? <div>{
    data==1? <h1> Welcome, User1!</h1>
    :data==2? <h1> Welcome, User2!</h1>
    :<h1> Welcome, User3!</h1>
 }</div>
 : null }
<form>
<select onChange={(e)=>setData(e.target.value)}>
<option> 1 </option>
<option> 2 </option>
<option> 3 </option>
</select> <br/> <br/>
<button onClick={()=>{setShow(true)}}> Submit </button>
</form>
  </div>
  )
}