import LearnersListItem from '../LearnersListItems/LearnersListItems';
import learnersList from '../utilities/data.mjs';


function LearnersList(){
    return (
        <ul>
            <LearnersListItem />
            <LearnersListItem />
            <LearnersListItem />
        </ul>
    )
}
export default LearnersList;