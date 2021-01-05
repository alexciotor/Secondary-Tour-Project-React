const Content = ({data,setTour})=>{

return <section>
   <div className="title">
    our tours
    <div className="underline"></div>
    </div>

<div className="data-container">
{data.map(item=>{
    const {id,image,info,name,price} = item;
    return <article key={id} className="article">
    <header className="header">
    <img className='image' src={image} alt={name}/>
    
    </header>
    <footer className="footer">
    <h4>{name} <span className='price'> ${price}</span></h4>
    <p>{info}</p>
    </footer>
    <button onClick={()=>{
        setTour(id)

    }} className="btn">Not Interested</button>
    </article>
})}
</div>
</section>
}

export default Content

// <article className="article">
// <header className="header">
// <img src="" alt=""/>
// </header>
// <footer className="footer">


// </footer>

// </article>