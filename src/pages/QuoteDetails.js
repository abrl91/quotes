import {Fragment, useEffect} from "react";
import {Link, Route, useParams, useRouteMatch} from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import useHttp from "../hooks/use-http";
import {getSingleQuote} from "../lib/api";
import LoadingSpinner from "../components/UI/LoadingSpinner";

const QuoteDetails = () => {
    const {sendRequest, status, data: loadedQuote, error} = useHttp(getSingleQuote, true);
    const params = useParams();
    const { quoteId } = params;
    const match = useRouteMatch();

    useEffect(() => {
        sendRequest(quoteId);
    }, [sendRequest, quoteId]);

    if (status === 'pending') {
        return <div className="centered focused">
            <LoadingSpinner />
        </div>
    }

    if (error) return <p className="centered">{error}</p>

    if (!loadedQuote.text) return <p className="centered">Quote not found :-(</p>

    return <Fragment>
        <h1>Quote Details</h1>
        <HighlightedQuote quote={loadedQuote} />

        <Route path={match.path} exact>
            <div className="centered">
                <Link className="btn--flat" to={`${match.url}/comments`}>Load Comments</Link>
            </div>
        </Route>

        <Route path={`${match.path}/comments`}>
            <Comments />
        </Route>
    </Fragment>
}

export default QuoteDetails;
