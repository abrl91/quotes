import classes from './QuoteItem.module.css';
import {Link} from "react-router-dom";

const QuoteItem = ({ quote }) => {
    const {id, author, text} = quote;
  return (
    <li className={classes.item}>
      <figure>
        <blockquote>
          <p>{text}</p>
        </blockquote>
        <figcaption>{author}</figcaption>
      </figure>
      <Link to={`/quotes/${id}`} className='btn'>
        View Fullscreen
      </Link>
    </li>
  );
};

export default QuoteItem;
