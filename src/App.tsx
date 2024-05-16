// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import {TonConnectButton} from "@tonconnect/ui-react";
import {useMainContract} from "./hooks/useMainContract.ts";
import {useTonConnect} from "./hooks/useTonConnect.ts";
import {fromNano} from "@ton/core";

// address: address("EQBjIgEkfEnHSi-B8UFghMskUI_UpKWYLZ7fKbBmLohXIePN"),
//   owner_address: address(
//   "EQBjIgEkfEnHSi-B8UFghMskUI_UpKWYLZ7fKbBmLohXIePN"
// ),

function App() {
  // const [count, setCount] = useState(0)

  const {
    contract_address,
    counter_value,
    // recent_sender,
    // owner_address,
    contract_balance,
    sendIncrement,
    sendDeposit,
    sendWithdrawalRequest
  } = useMainContract();

  const {connected} = useTonConnect();

  return (
    <div>
      <div>
        <TonConnectButton/>
      </div>
      <div>
        <div className='Card'>
          <b>Our contract Address</b>
          {/*<div className='Hint'>{contract_address?.slice(0, 30) + "..."}</div>*/}
          <div className='Hint'>{contract_address}</div>
          <b>Our contract Balance</b>
          <div className='Hint'>{fromNano(contract_balance ?? 0)}</div>
        </div>

        <div className='Card'>
          <b>Counter Value</b>
          <div>{counter_value ?? "Loading..."}</div>
        </div>

        {connected && (
          <a
            onClick={() => {
              sendIncrement();
            }}
          >
            Increment
          </a>
        )}


        <br/>

        {connected && (
          <a
            onClick={() => {
              sendDeposit();
            }}
          >
            Send deposit of 1 TON
          </a>
        )}
        <br/>

        {connected && (
          <a
            onClick={() => {
              sendWithdrawalRequest();
            }}
          >
            Send widthdrawal request (0.7 TON)
          </a>
        )}
      </div>
    </div>
  )
  // return (
  //   <>
  //     <div>
  //       <a href="https://vitejs.dev" target="_blank">
  //         <img src={viteLogo} className="logo" alt="Vite logo" />
  //       </a>
  //       <a href="https://react.dev" target="_blank">
  //         <img src={reactLogo} className="logo react" alt="React logo" />
  //       </a>
  //     </div>
  //     <h1>Vite + React</h1>
  //     <div className="card">
  //       <button onClick={() => setCount((count) => count + 1)}>
  //         count is {count}
  //       </button>
  //       <p>
  //         Edit <code>src/App.tsx</code> and save to test HMR
  //       </p>
  //     </div>
  //     <p className="read-the-docs">
  //       Click on the Vite and React logos to learn more
  //     </p>
  //   </>
  // )
}

export default App
