// We will use React hooks to manage state
function Counter() {
    const [count, setCount] = React.useState(0);
  
    return (
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h1>React Counter</h1>
        <p>Current count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)} style={{ marginLeft: '10px' }}>Decrement</button>
      </div>
    );
  }
  
  // Rendering the Counter component into the root div
  ReactDOM.render(<Counter />, document.getElementById('root'));
  