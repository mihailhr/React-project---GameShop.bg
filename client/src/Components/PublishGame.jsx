
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
                    <input type="text" name="name" value={prop.formData.name} onChange={prop.handleChanges} required /> <br />
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
                    <input type="text" name="mainImage" value={prop.formData.mainImage} onChange={prop.handleChanges} required/><br />
                    <label >Secondary image</label><br />
                    <input type="text" name="secondaryImage" value={prop.formData.secondaryImage} onChange={prop.handleChanges} required/><br />
                    <label >Trailer</label><br />
                    <input type="text" name="trailer" value={prop.formData.trailer} onChange={prop.handleChanges} required/><br />
                    <label>Description</label><br />
                    <input type="text" name="description" value={prop.formData.description} onChange={prop.handleChanges} required/><br />
                    <label >Price</label><br />
                    <input type="number" required name="price" value={prop.formData.price} onChange={prop.handleChanges}  /><br />
                    <input type="submit" />
                </form>
            </article>
        </div>:
        <div className="publish"><h1>You have to be logged in to publish games</h1></div>
    )
}