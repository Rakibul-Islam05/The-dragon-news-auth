import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
    return (
        <div className="flex">
            <button className="btn bg-pink-500 text-white">BreakingNews</button>
            <Marquee pauseOnHover={true} speed={80}>
                <Link className="mr-5" to='/'>I can be a React component, multiple React components... </Link>
                <Link className="mr-5" to='/'>I can be a React component, multiple React components... </Link>
                <Link to='/'>I can be a React component, multiple React components...</Link>
            </Marquee>
        </div>
    );
};

export default BreakingNews;