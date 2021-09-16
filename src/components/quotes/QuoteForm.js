import {Fragment, useRef, useState} from 'react';
import Card from '../UI/Card';
import LoadingSpinner from '../UI/LoadingSpinner';
import classes from './QuoteForm.module.css';
import {Prompt} from "react-router-dom";

const QuoteForm = (props) => {
  const authorInputRef = useRef();
  const textInputRef = useRef();
  const [isEntered, setIsEntered] = useState(false);

  function submitFormHandler(event) {
    event.preventDefault();

    const enteredAuthor = authorInputRef.current.value;
    const enteredText = textInputRef.current.value;

    props.onAddQuote({ author: enteredAuthor, text: enteredText });
  }

  const finishEnteringHandler = () => {
    setIsEntered(false);
  }

  const formFocusHandler = () => {
    setIsEntered(true);
  }

  return (
      <Fragment>
        <Prompt when={isEntered} message={() => 'Are you sure you want to leave this page?'}/>
        <Card>
          <form onFocus={formFocusHandler} className={classes.form} onSubmit={submitFormHandler}>
            {props.isLoading && (
                <div className={classes.loading}>
                  <LoadingSpinner />
                </div>
            )}

            <div className={classes.control}>
              <label htmlFor='author'>Author</label>
              <input type='text' id='author' ref={authorInputRef} />
            </div>
            <div className={classes.control}>
              <label htmlFor='text'>Text</label>
              <textarea id='text' rows='5' ref={textInputRef}></textarea>
            </div>
            <div className={classes.actions}>
              <button onClick={finishEnteringHandler} className='btn'>Add Quote</button>
            </div>
          </form>
        </Card>
      </Fragment>

  );
};

export default QuoteForm;
