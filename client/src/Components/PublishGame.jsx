
import { useAuth } from "../authContext"

export default function PublishGame(prop){

    const {auth} =useAuth()
    return( 
        auth?
        <div className="publish">
            <article>
                
                <h1>
                    Publish any game you want to sell
                </h1>
                <form onSubmit={prop.handleSubmit}>
                    <label>Game name</label> <br />
                    <input type="text" name="name" value={prop.formData.name} onChange={prop.handleChanges} minLength={2} required /> <br />
                    <label>Category</label> <br />
                    <select name="category" value={prop.formData.category} onChange={prop.handleChanges}  required> 
                        <option value="sports" >Sports</option>
                        <option value="action">Action</option>
                        <option value="horror">Horror</option>
                        <option value="adventure">Adventure</option>
                        <option value="kids">Family friendly</option>
                        <option value="other">Other</option>
                    </select> <br />
                    <label >Main image</label> <br />
                    <input type="text" name="mainImage" value={prop.formData.mainImage} minLength={10} onChange={prop.handleChanges} required/><br />
                    <label >Secondary image</label><br />
                    <input type="text" name="secondaryImage" value={prop.formData.secondaryImage} minLength={10} onChange={prop.handleChanges} required/><br />
                    <label >Trailer</label><br />
                    <input type="text" name="trailer" value={prop.formData.trailer} onChange={prop.handleChanges} minLength={10} required/><br />
                    <label>Description</label><br />
                    <input type="text" name="description" value={prop.formData.description} onChange={prop.handleChanges}  minLength={20} maxLength={700}required/><br />
                    <label >Price</label><br />
                    <input type="number" required name="price" value={prop.formData.price}  min={0} onChange={prop.handleChanges}  /><br />
                    <input type="submit" className="submitBtn"/>
                </form>
                
            </article>
            <section className="publishInfo">
                <h1>Requirements:</h1>
                <ul>
                    
                    <li>The name of the game should be at least 2 characters long.</li>
                    <li>Select an appropriate category for the game.</li>
                    <li>The minimal length of all links is 10 characters. The link to the trailer must come from YouTube.</li>
                    <li>Upload only HD images so that your game offer looks better.</li>
                    <li>The description must be between 20 and 700 characters long .</li>
                    <li>The game can be free, but {"it's"} price can never be below 0.</li>
                </ul>
                
            </section>
        </div>:
        <div className="publish"><h1>You have to be logged in to publish games</h1></div>
    )
}