import { useState } from 'react';
import LearnersListItem from '../LearnersListItems/LearnersListItems';
import learnersList from '../utilities/data.mjs';



    return (
      <>
        <h1>Learners:</h1>
        <ul>
          {learnersLists.map((learnersList) => (
            <li key={learnersList.id}>
              {learnersList.name}{" "}
              <button
                onClick={() => {
                  setLearners(learnersList.filter((a) => a.id !== learnersList.id));
                }}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </>
    );



// const updatedState = []...state]


// function LearnersList(){
//     return (
//         <ul>
//             <LearnersListItem />
//             <LearnersListItem />
//             <LearnersListItem />
//         </ul>
//     )
// }

export default LearnersList;