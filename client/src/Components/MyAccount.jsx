import { useEffect, useState } from "react";
import { useAuth } from "../authContext";
import { Navigate, useNavigate } from "react-router-dom";
import { getAllBoughtGames, getPublishedGames } from "../backendCommunicationFunctions";

export default function MyAccount() {
  const { user, auth } = useAuth();
 
  const [allBoughtGames, setAllBoughtGames] = useState([]); // Initialize with an empty array
  const [publishedGames, setPublishedGames]=useState([])
  const navigate = useNavigate();
  
  useEffect(() => {
    async function fetchingBoughtGames() {
      const result = await getAllBoughtGames(user);
      setAllBoughtGames(result.data);
    }
    if (user) {
      fetchingBoughtGames();
    }
  }, [user]);

  useEffect(()=>{
    async function fetchingPublishedGame(){
        const result =await getPublishedGames(user)
        setPublishedGames(result.data)
    }
    if(user){
        fetchingPublishedGame()
    }
  },[user])
  

  let content;
  let publishedContent
  if (allBoughtGames.length > 0) {
    content = (
      <ul className="gamesBoughtUl">
        {allBoughtGames.map((game) => (
          <li key={game.name + game.creator}>
            <p>{game.name}, bought for {game.price} leva.</p>
            <button onClick={() => learnMoreButton(game._id)}>Learn more</button>
          </li>
        ))}
      </ul>
    );
  } else {
    content = <h1 className="gamesBoughtUl">You have not bought any games yet</h1>;
  }
  
  if (publishedGames.length > 0) {
    publishedContent = (
      <ul className="gamesPublishedUl">
        {publishedGames.map((game) => (
          <li key={game.name + game.creator}>
            <p>{game.name}, selling for {game.price} leva.</p>
            <button onClick={() => learnMoreButton(game._id)}>Modify or delete</button>
          </li>
        ))}
      </ul>
    );
  } else {
    publishedContent = <h1 className="gamesPublished">You have not published any games yet</h1>;
  }

  function learnMoreButton(gameId) {
    navigate("/catalog/" + gameId);
  }

  return auth ? (
    <div className="myAccount">
      <h1 className="accountWelcome">Welcome, {user}</h1>
      <section className="leftAndRight">
        <article className="leftInfo">
          <h1>Here are all the games that you have published</h1>
          <section className="publishedGames">
            {publishedContent}
          </section>
        </article>
        <article className="rightInfo">
          <h1>Keep track of the games that you have bought</h1>
          <section className="gamesBought">
            {content}
          </section>
        </article>
      </section>
    </div>
  ) : (
    <Navigate to={"/login"} />
  );
}