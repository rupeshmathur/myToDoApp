import { FaHeart } from 'react-icons/fa';
import Button from './Button';
import { useState } from 'react';

function LikeButton() {

    const [likes, setLikes] = useState(0);
    const [offButton, setOffButton] = useState(false);

    function onLike() {
        setLikes(likes + 1);

        if (likes === 9) {
            setOffButton(true);
        }
    }


    return (
        <div>
            <FaHeart style={{ color: 'red', fontSize: '20px' }} />  <>Likes :  {likes}</> <br />
            <Button disabled={offButton}
                className="primary"
                type="submit"
                onClick={onLike}
            >
                Like
            </Button>
        </div>
    );
}

export default LikeButton;
