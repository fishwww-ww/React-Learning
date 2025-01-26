import { useParams, useSearchParams, Link } from "react-router-dom"
import Counter from "../../components/counter";

export default function Article() {
    // const [params] = useSearchParams();
    // let id = params.get('id');

    const params = useParams();
    let id = params.id;

    return (
        <div>
            <h1>Article:{id}</h1>
            <button>
                <Link to='/'>Go to Layout</Link>
            </button>
        </div>
    )
}