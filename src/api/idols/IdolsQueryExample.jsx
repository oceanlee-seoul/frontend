import { useState } from "react";
import NotFound from "../../pages/NotFound";
import useIdolsQuery from "./useIdolsQuery";

function IdolsQueryExample() {
    const { data, error, isLoading, isError, fetchNextPage, hasNextPage } = useIdolsQuery();
    const [page, setPage] = useState(0);

    const isFetchThrottled = false;

    if(isLoading) {
        return (<>Loading</>);
    }

    if(isError) {
        console.error(error);
        return (<NotFound errorMessage={"오류가 발생하였습니다."}/>);
    }

    const idolPage = data.pages[page].list;
    const isNextPageAvailable = data.pages[data.pages.length - 1].nextCursor !== null || page < data.pages.length - 1;
    const isPreviousPageAvailable = page > 0;

    const moveToPreviousPage = () => isPreviousPageAvailable && setPage(page - 1);
    const moveToNextPage = async ()=>{
        if(hasNextPage) {
            if(isFetchThrottled) {
                console.log('throttled');
                return;
            }
            await fetchNextPage();
        }
        setPage(page + 1);
    }

    return (
        <div>
            {idolPage.map((idol, index) => {
                return <div key={index}>{idol.name}</div>
            })}

            <button disabled={!isNextPageAvailable} onClick={moveToNextPage}>getNextPage</button>
            <button disabled={!isPreviousPageAvailable} onClick={moveToPreviousPage}>
                getPreviousPage
            </button>
        </div>
    );
}

export default IdolsQueryExample;