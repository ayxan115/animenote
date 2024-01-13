import Card from "./Card";

function Home ( {items} ) {
    return(
        <div className="home">
            <h2>Все Аниме</h2>
            <div className="content">
                <div className="anime_items">
                    {items.map((item) => (
                        <Card 
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        img={item.img}
                        seri={item.seri}/>
                    ))}
                </div>
                <ul className="catigori">
                    <li>Приключения</li>
                    <li>Экшин</li>
                    <li>тшлыфв</li>
                </ul>
            </div>
        </div>
    )
}

export default Home;