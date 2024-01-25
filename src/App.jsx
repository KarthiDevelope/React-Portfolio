import './App.css'
import Home from './components/Home';
import AnimatedCursor from "react-animated-cursor"

function App() {


  return (
    <div className='App'>

      <Home />
      <AnimatedCursor
        innerSize={8}
        outerSize={35}
        innerScale={1}
        outerScale={2}
        outerAlpha={0}
        hasBlendMode={true}
        innerStyle={{
          backgroundColor: 'var(--cursor-color)'
        }}
        outerStyle={{
          border: '3px solid var(--cursor-color)'
        }}
      />
    </div>
  )
}

export default App
