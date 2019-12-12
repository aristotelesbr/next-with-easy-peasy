import React from "react";
import { useStoreState, useStoreActions } from "easy-peasy";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Index = () => {
  const counter = useStoreState(state => state.counter.count);
  const increment = useStoreActions(actions => actions.counter.increment);
  const decrement = useStoreActions(actions => actions.counter.decrement);
  const resetCounter = useStoreActions(actions => actions.counter.reset);

  const p = useStoreState(state => state.people);

  return (
    <>
      <Header currentUser={p.name} />
      {/* <h1>{arizao}</h1> */}
      <h1>{counter}</h1>
      <button onClick={() => increment()}>Increment</button>
      <button onClick={() => decrement()}>Decrement</button>
      <button onClick={() => resetCounter()}>Reset</button>
      <Footer currentUser={p.name} />
    </>
  );
};

export default Index;
