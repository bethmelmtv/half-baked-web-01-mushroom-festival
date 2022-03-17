// import functions and grab DOM elements
import { renderMushroom, renderFriend } from './render-utils.js';
const friendsEl = document.querySelector('.friends');
const friendInputEl = document.getElementById('friend-input');
const mushroomsEl = document.querySelector('.mushrooms');
const addMushroomButton = document.getElementById('add-mushroom-button');
const addFriendButton = document.getElementById('add-friend-button');


// initialize state
let mushroomCount = 3;

const friendData = [
    {
        name: 'Erich',
        satisfaction: 2,
    },
    {
        name: 'Sarah',
        satisfaction: 3,
    },
    {
        name: 'Missael',
        satisfaction: 1,
    },
    {
        name: 'Soraya',
        satisfaction: 2,
    },
];




addMushroomButton.addEventListener('click', () => {
    if (Math.random() > 0.5) {
        alert('found a mushroom!');

        mushroomCount++;
        displayMushrooms();
    } else {
        alert('no luck!');
    }
});




addFriendButton.addEventListener('click', () => {
    friendInputEl.textContent = '';

    const newFriend = {
        name: friendInputEl.value || 'my friend',
        satisfaction: Math.floor(Math.random() * 3)
    };

    // get the name from the input
    // create a new friend object
    // push it into the friends state array, passed in as an argument
    friendData.push(newFriend);
    // reset the input
    // display all the friends (use a function here)
    displayFriends();

});

function displayFriends() {
    friendsEl.textContent = ''; 
    // need help understanding this line , why o  we need to clear out list?
    // clear out the friends in DOM
    // for each friend in state . . .
     // use renderFriend to make a friendEl
    for (let friend of friendData) {
        const friendEl = renderFriend(friend); // what is the purpose of friendEl
            //for each item in array, we're going to apply the render function 
        friendEl.addEventListener('click', () => {
            if (friend.satisfaction < 3 && mushroomCount > 1) {
                friend.satisfaction ++;
                mushroomCount--; 
            }
            displayFriends();
            displayMushrooms();
        });
        friendsEl.append(friendEl); 
        // this is a clickable list, so . . .
        //     add an event listener to each friend
        //         and if the friend's satisfaction level is below 3 and you have mushrooms left
        //             increment the friends satisfaction and decrement your mushrooms
        //             then display your friends and mushrooms with the updated state

        // append the friendEl to the friends list in DOM
    } 

}

function displayMushrooms() {
    // clear out the mushroom div
    mushroomsEl.textContent = '';
    //use text.content when clearing out a div 
    for (let i = 0; i < mushroomCount; i++) {
        const mushroom = renderMushroom();
        mushroomsEl.append(mushroom);
        // for each mushroom in your mushroom state, render and append a mushroom

    }
}

displayFriends();
displayMushrooms();



//repushing up for netlify


// 1 - Make a drawing of your app. Simple "wireframes"
// 2 -Look at the drawing and imagine using the app. What state do you need to track?
// 3 - Once you have a drawing, name the HTML elements you'll need to realize your vision
// For each HTML element ask: Why do I need this? (i.e., "we need div to display the results in")
// 4 - Once we know why we need each element, think about how to implement the "Why" as a "How" (i.e., resultsEl.textContent = newResults)
// 5 - Find all the 'events' (user clicks, form submit, on load etc) in your app. Ask one by one, "What happens when" for each of these events. Does any state change? Does any DOM update?
// 6 - Think about how to validate each of your features according to a Definition of Done. (Hint: console.log usually helps here.)
// 7 - Consider what features depend on what other features. Use this dependency logic to figure out what order to complete tasks.