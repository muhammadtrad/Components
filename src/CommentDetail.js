import React from 'react';

const CommentDetail = props =>{
    return (
            <div className = "comment">
        <a href="/" className = "avatar">
            <img alt="avatar" src={props.img}/>
        </a>
        <div className = "content">
            <a href="/" className="author">
                {props.author}
            </a>
            <div className = "metadata">
    <span className="date">{props.timeAgo}</span>
            </div>
    <div className = "text">{props.comment}</div>
        </div>
    </div>
    );
};

export default CommentDetail;

// Reducers are pure functions, they will not modify arguments  and will be 
// deterministic (same output from same input)

//Reducers always take two arguments. the previous value of the key in state
// (prevState) and the action
// Reducers will have a default value for their prevState
//If a reducer ignores an action, it will return the unmodified prevState
//if a reducer "responds" to an action, it will return something completely new or create a new copy of the prevState before making any changes


let state = {
    user: "Andy",
    role: "Instructor"
};

const action = {
    type: "change role",
    newRole: "Student"
};


const action2 = {
    type: "change user",
    newUser: "Jim"
}

const roleReducer = (oldRole = null, action) => {
    if (action.type === "change role"){
        return action.newRole;
    } else{
        return oldRole;
    }
};

const userReducer = (oldUser = null, action) =>{
    if (action.type ==="change user"){
        return action.newUser;
    } else {
        return oldUser;
    }
};
roleReducer(state.role, action); 
userReducer(state.user, action2);
