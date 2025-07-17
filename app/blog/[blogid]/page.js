const appid=({params})=>{
    return(
        <div className="blog-list">
            <h1>Restaurant ID: {params.blogid}</h1>
            <p>This is the restaurant page for restaurant ID: {params.blogid}</p>
            <p>Here you can find details about the restaurant, its menu, and more.</p>
            <p>Enjoy your meal!</p>
        </div>
    );
}   

export default appid;    