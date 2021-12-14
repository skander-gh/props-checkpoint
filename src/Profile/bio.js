function Bio(props){
    console.log(props)
    return (
        <div>
<h1>  {props.bio} </h1>
<button onClick={props.HandleAlert}>click</button>

        </div>
    )
}
export default Bio