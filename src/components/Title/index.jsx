import "./style.css"

function Title({children, color}){
    return(
        <div>
        <h1 style={{color: color}}>Dale boy. {children}</h1>
        </div>
    )
}

export default Title;