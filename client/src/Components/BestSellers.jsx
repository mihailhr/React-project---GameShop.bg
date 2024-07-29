import { useEffect, useState } from "react";
import { getAllGamesAxios } from "../backendCommunicationFunctions";
import { useNavigate } from "react-router-dom";

export default function BestSellers() {
    const [allGames, setAllGames] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchAllGames() {
            try {
                const response = await getAllGamesAxios();
                const sortedGames = response.sort((a, b) => b.buyers.length - a.buyers.length);
                setAllGames(sortedGames.slice(0, 3));
            } catch (error) {
                console.error("Failed to fetch games:", error);
            }
        }
        fetchAllGames();
    }, []);

    return (
        <div className="bestSellers">
            <article className="title">Here are the current best sellers</article>
            {allGames.length > 2 ? (
                <>
                    <article className="firstPlace">
                        <img src="/Pastel Blue White Cute Illustration Well Done School Teacher Round Sticker-modified.png" alt="" />
                        <section className="info">
                            <p>The first place currently belongs to {allGames[0]?.name}, a game published by {allGames[0]?.creator}. So far {allGames[0]?.buyers.length} people have purchased it. Still wondering why so many people decided to buy it?</p>
                            <button onClick={() => navigate(`/catalog/${allGames[0]._id}`)}>Check it out</button>
                            
                        </section>
                        <img src={allGames[0].mainImage} alt="" />
                    </article>
                    <article className="secondPlace">
                    <img src={allGames[1].mainImage} alt="" />
                        <section className="info">
                            <p>Finishing in a close second to the champion, {allGames[1]?.name} has attracted {allGames[1]?.buyers.length} buyers.</p>
                            <button onClick={() => navigate(`/catalog/${allGames[1]._id}`)}>Take a closer look</button>
                            
                        </section>
                        <img src="/second place.png" alt="" />
                    </article>
                    <article className="thirdPlace">
                        <img src="/third place.png" alt="" />
                        <section className="info">
                            <p>{allGames[2]?.name} is the bronze medalist with {allGames[2]?.buyers.length} buyers.</p>
                            <button onClick={() => navigate(`/catalog/${allGames[2]._id}`)}>Review</button>
                            
                        </section>
                        <img src={allGames[2].mainImage} alt="" />
                    </article>
                </>
            ) : <div className="inactiveUsers"><h1 >It appears that GameShop users have{"n't"} been active enough for such a ranking to be created. </h1>
            <img src="https://w0.peakpx.com/wallpaper/677/966/HD-wallpaper-sad-face-background-black-screen-styles.jpg" alt="" />
            </div>
            }
        </div>
    );
}