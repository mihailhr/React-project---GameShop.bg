
import { useAuth } from "../authContext"

export default function PublishGame(){

    const {auth} =useAuth()
    return( 
        auth?
        <div className="publish">
            <article>
                <h1>
                    Publish any game you want to sell
                </h1>
                <form >
                    <label>Game name</label> <br />
                    <input type="text" name="name" required /> <br />
                    <label>Category</label> <br />
                    <select name="category" required> 
                        <option value="sports">Sports</option>
                        <option value="action">Action</option>
                        <option value="horror">Horror</option>
                        <option value="adventure">Adventure</option>
                        <option value="kids">Family friendly</option>
                        <option value="other">Other</option>
                    </select> <br />
                    <label >Main image</label> <br />
                    <input type="text" name="mainImage" required/><br />
                    <label >Secondary image</label><br />
                    <input type="text" name="secondaryImage" required/><br />
                    <label >Trailer</label><br />
                    <input type="text" name="trailer"  required/><br />
                    <label>Description</label><br />
                    <input type="text" name="description" required/><br />
                    <label >Price</label><br />
                    <input type="number" required name="price"  /><br />
                    <input type="submit" />
                </form>
            </article>
        </div>:
        <div className="publish"><h1>You have to be logged in to publish games</h1></div>
    )
}