
import backImg from '../assets/card_back.jpg';
import frontDefaultImg from '../assets/the_start.jpg';
import { cardStyle, imageStyle } from './Card.styles';

type CardProps = {
  frontImg?: string;
  isFlipped?: boolean;
  onClick?: () => void;
};

const Card = ({ frontImg, onClick, isFlipped = false }: CardProps) => (
  <div className={cardStyle({ flipped: isFlipped ? 'flip' : 'noFlip' })} onClick={() => !isFlipped && onClick?.()}>
    <img className={imageStyle()} src={frontImg ?? frontDefaultImg} alt="card-front" />
    <img className={imageStyle({ visual: 'back' })} src={backImg} alt="card-back" />
  </div>
);

export default Card;
