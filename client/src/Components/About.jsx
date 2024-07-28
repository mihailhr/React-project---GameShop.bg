import {FaGithub,FaFacebook,FaLinkedin} from "react-icons/fa"

import {Link} from "react-router-dom"
export default function About(){
    return(
        <div className="about">
            <article className="aboutUpper">
                <img src="/White and black minimalist professional about the team presentation .jpg" alt="" />
            </article>
            <article className="aboutLower">
                
                <section className="text"> 
                   <p>Imagine a world where every game you ever wanted is at your fingertips, not just brand new, but in pristine condition and at a fraction of the cost. A world where your old favorites {"don't"} gather dust but instead find new homes and bring joy to new players. Welcome to our community of gamers. Welcome to Gameshop.</p>
<p>Our mission is simple: to make gaming more accessible, affordable, and sustainable. The gaming industry is booming, with new titles and consoles launching regularly. However, this comes with high costs and growing piles of unused games. Many gamers face the dilemma of wanting to play new games without breaking the bank, while their completed or unused games sit there, collecting dust.</p>
<p>{"That's"} where Gameshop comes in. Our platform connects gamers who want to buy, sell, or trade their second-hand games easily and securely. {"It's"} a win-win for everyone: sellers can earn some cash, and buyers can get the games they want at a lower price. Plus, {"it's"} good for the environment. By recycling games, we reduce waste and promote a circular economy.</p>
                </section>
                <section className="logos">
                <Link to={"https://github.com/mihailhr/React-project---GameShop.bg"} target="_blank"><FaGithub/></Link>
                <Link to={"https://www.facebook.com/GameShop32?locale=bg_BG"} target="_blank"><FaFacebook/></Link>
                <Link to={"https://www.linkedin.com/company/gameshop"} target="_blank"><FaLinkedin/></Link>
                </section>
            </article>
        </div>
    )
}