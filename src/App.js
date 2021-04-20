import React, { useState } from "react";

const Anecdote = ({ anecdote, votes }) => {
  return (
    <>
      <p>{anecdote}</p>
      <p>has {votes} votes</p>
    </>
  );
};

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
  ];

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(new Uint8Array(6));

  const handleAnecdote = () => {
    let randInt;
    do {
      randInt = Math.floor(Math.random() * 6);
    } while (randInt === selected);
    setSelected(randInt);
  };

  const handleVote = () => {
    let copy = [...votes];
    copy[selected] += 1;
    setVotes(copy);
  };

  return (
    <div>
      <Anecdote anecdote={anecdotes[selected]} votes={votes[selected]} />
      <button onClick={handleVote}>vote</button>
      <button onClick={handleAnecdote}>next anecdote</button>
    </div>
  );
};

export default App;
