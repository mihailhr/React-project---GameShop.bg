import {Link} from "react-router-dom"

export default function Home(){
    return(
        <div className="home">
                <article className="videoArticle">
                    <div className="homeVideo">
                        <video   autoPlay loop muted>
                            <source src="/videos/Virtual Variety Game Fun Presentation in Black Blue Orange Brutalist Cyberpunk Style.mp4" type="video/mp4" />
        
                        </video>
                    </div>
                </article>
                <section className="fields">
                    <div className="buy">
                        <Link to={"/catalog"}><h3>Find and buy your favorite games</h3></Link>
                        <img src="/game.jpg" alt="" />
                    </div>
                    <div className="sell">
                    <Link to={"/createNewGame"}><h3>Sell games that you are not going to enjoy anymore</h3></Link>
                    <img src="/money.jpg" alt="" />
                    </div>
                    <div className="gamer">
                        <Link to={"/about"}><h3>Become one of us</h3></Link>
                        
                        <img src="/join.jpg" alt="" />
                    </div>
                </section>
                <img  className="buttons" src="/playstation-2-playstation-4-playstation-3-playstation-controller-button-game-buttorn-b4e62c91af77508bd194018c2de1ac58.png" alt="" />
                <img  className="arrows" src="/pngwing.com.png" alt="" />
        </div>
        
    )
}