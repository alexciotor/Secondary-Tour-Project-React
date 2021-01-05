const Refresh = ({getData})=>{

    return <div className="refresh-container">
    <h1>No Tours Left</h1>
    <button onClick={()=>{
        getData()
    }} className="refresh-btn">refresh</button>
    </div>
}

export default Refresh