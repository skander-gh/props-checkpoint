import propTypes from "prop-types"

function Fulln(props){
    console.log(props)
    return(
        <div>
<h1> {props.name} </h1>
{props.children} 
        </div>
    )
}
// Fulln.defaultprops={
//     name:"houcem"

// }
export default Fulln

Fulln.defaultProps={
    name:"ahmed"
}
Fulln.propTypes={
    name: propTypes.string,
}