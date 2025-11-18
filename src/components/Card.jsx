import "./Card.css";
import profilePhoto from "../assets/albert-dera-ILip77SbmOE-unsplash.jpg";
import Header from "./Header"
import Main from "./Main"
import Footer from "./Footer"


export default function Card() {
    return (
        <div className="card">
            <img src={profilePhoto} alt="Profile Photo" />
            <Header />
            <Main />
            <Footer />
        </div>
    )
}