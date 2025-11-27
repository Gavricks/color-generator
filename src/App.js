import React from 'react';
import './App.css';

function App() {
  const [bgColor, setBgColor] = React.useState('#ffffff');

  const generateRandomColor = () => {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    setBgColor(randomColor);
  };

  return (
    <div 
      className="app" 
      style={{ 
        backgroundColor: bgColor,
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <button 
        onClick={generateRandomColor}
        style={{
          padding: '20px 40px',
          fontSize: '20px',
          cursor: 'pointer',
          backgroundColor: 'white',
          border: '2px solid black',
          borderRadius: '10px'
        }}
      >
        Сменить цвет
      </button>
    </div>
  );
}

export default App;