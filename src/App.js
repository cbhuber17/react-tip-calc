import { useState } from "react";

function App() {
  const [billInput, setBillInput] = useState(0);
  const [myTip, setMyTip] = useState(0);
  const [friendTip, setFriendTip] = useState(0);

  function handleReset() {
    setBillInput(0);
    setMyTip(0);
    setFriendTip(0);
  }

  // function Reset() {
  //   return(
  //     {billInput !== 0 || myTip !== 0 || friendTip !== 0 ? (
  //       <div>
  //         <button onClick={handleReset}>Reset</button>
  //       </div>
  //     ) : null}
  //   )
  // }

  return (
    <div>
      <BillInput billInput={billInput} onAddBill={setBillInput} />
      <SelectPercentage
        text="How did you like the service?"
        tip={myTip}
        onSetTip={setMyTip}
      />
      <SelectPercentage
        text="How did your friend like the service?"
        tip={friendTip}
        onSetTip={setFriendTip}
      />
      <Output bill={billInput} tip={myTip} friendTip={friendTip} />
      {/* <Reset /> */}
      {billInput !== 0 || myTip !== 0 || friendTip !== 0 ? (
        <div>
          <button onClick={handleReset}>Reset</button>
        </div>
      ) : null}
    </div>
  );
}

function BillInput({ billInput, onAddBill }) {
  return (
    <div>
      <p>How much was the bill?</p>
      <input
        type="text"
        value={billInput}
        onChange={(e) => onAddBill(Number(e.target.value))}
      />
    </div>
  );
}

function SelectPercentage({ text, tip, onSetTip }) {
  const TipAmount = {
    0: "Dissatisfied (0%)",
    5: "It was okay (5%)",
    10: "It was good (10%)",
    20: "Absolutely amazing! (20%)",
  };

  return (
    <div>
      {text}
      <select value={tip} onChange={(e) => onSetTip(Number(e.target.value))}>
        {/* TODO: loop */}
        <option value={0}>{TipAmount[0]}</option>
        <option value={5}>{TipAmount[5]}</option>
        <option value={10}>{TipAmount[10]}</option>
        <option value={20}>{TipAmount[20]}</option>
      </select>
    </div>
  );
}

function Output({ bill, tip, friendTip }) {
  // Compute average and total
  const avgTip = (bill * (tip + friendTip)) / 200;
  const total = bill + avgTip;

  return (
    <div>
      <br />
      {Boolean(total) && (
        <strong>
          You pay ${total} (${bill} + ${avgTip})
        </strong>
      )}
    </div>
  );
}

export default App;
