import { useState } from "react"

const LikeButton = () => {
    const [likes, setlikes] = useState(null);

    const handleLikes = () => {
        setlikes(!likes);
    }

    return (
        <div>
            <button onClick={handleLikes}>Like</button>
        </div>
    )
}

export default LikeButton;