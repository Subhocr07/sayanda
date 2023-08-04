import { Link } from "react-router-dom";

function BasicExample() {
    const btnSmallStyle = {
        textTransform: "none",
        fontSize: "14px",
        lineHeight: "17px",
        textAlign: "center",
        color: "#F8FAFC",
        padding: "10px 15px",
        minWidth: "132px",
        backgroundColor: "#F1581B"
    };

    const navStyle = {
        padding: "7px",
        margin: "2px"
    }

    return (
        <header class="site-header">
            <div class="container">
                <div class="site-header-inner">
                    <Link style={navStyle} to="/" class="about-link">Home</Link>
                    <Link style={navStyle} to="/about" class="about-link">About Us</Link>
                    {/* <Link to="/readgita" class="btn btn-small ml-80" style={btnSmallStyle}>Read the Gita</Link> */}
                </div>
            </div>
        </header>
    );
}

export default BasicExample;
