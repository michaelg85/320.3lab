import Header from "../Header/Header";
import LearnerPage from "../LearnersPage/LearnersPage";


function HomePage(){
    return (
       <div>
        <Header />
        <SearchBar />
        <LearnerList />
       </div>
    )
}

export default HomePage;