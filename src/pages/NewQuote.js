import {Fragment, useEffect} from "react";
import QuoteForm from "../components/quotes/QuoteForm";
import {useHistory} from "react-router-dom";
import useHttp from "../hooks/use-http";
import {addQuote} from "../lib/api";

const NewQuote = () => {
    const history = useHistory();
    const { sendRequest, status } = useHttp(addQuote);

    useEffect(() => {
        if (status === 'completed') {
           history.push('/quotes');
        }
    }, [history, status]);

    const addQuoteHandler = (quoteData) => {
        sendRequest(quoteData);
    }

    return <Fragment>
       <QuoteForm isLoading={status === 'pending'} onAddQuote={addQuoteHandler}/>
    </Fragment>
}

export default NewQuote;
