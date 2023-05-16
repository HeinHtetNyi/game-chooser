import { FunctionComponent, useState } from "react";
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'

interface LikeProps {
    onClick: () => void,
}
 
const Like: FunctionComponent<LikeProps> = ({
    onClick,
}) => {
    const [isLike, setIsLike] = useState(false)
    
    const handleClickLike = () => {
        setIsLike(!isLike)
        onClick()
    }

    return (  
        isLike ? 
            <AiFillHeart onClick={handleClickLike} color="#F45050" size={25} /> :
            <AiOutlineHeart onClick={handleClickLike} size={25} />
    );
}
 
export default Like;