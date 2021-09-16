import classes from './HighlightedQuote.module.css';

const HighlightedQuote = ({ quote }) => {
    const { author, text } = quote;
  return (
    <figure className={classes.quote}>
      <p>{text}</p>
      <figcaption>{author}</figcaption>
    </figure>
  );
};

export default HighlightedQuote;
