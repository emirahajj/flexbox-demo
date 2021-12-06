import {ReactComponent as LeftSolid} from './left-solid.svg';
import {ReactComponent as HorizontalDotted} from './horizontal-dash.svg';
import {ReactComponent as VerticalDotted} from './vertical-dash.svg';
import {ReactComponent as RightSolid} from './right-solid.svg';
import {ReactComponent as DownSolid} from './down-solid.svg';
import {ReactComponent as UpSolid} from './up-solid.svg';


import { useState} from 'react';
import {useEffect} from 'react';
import './App.css';
import { useSpring, animated } from 'react-spring'



const FlexCard = ({text, color, size}) =>  {
  return (
    <div className={`flexCard flex justify-center rounded-lg h-1/${size} w-1/${size} bg-${color}-400`}>
      <h1 className="place-self-center text-2xl font-bold">{text}</h1>
    </div>
  )
}

const convertProperty = (property) => {
  switch (property) {
    case "col":
      return "column";
    case "col-reverse":
      return "column-reverse"
    case "start":
      return "flex-start"
    case "end":
      return "flex-end"
    case "center":
      return "center"
    case "around":
      return "space-around"
    case "between":
      return "space-between"
    case "baseline":
      return "baseline"
    default:
      return property;
  }
}

function App() {
  const [flexDirection, setFlexDirection] = useState("row");
  const [justifyContent, setJustifyContent] = useState("start");
  const [alignItems, setAlignItems] = useState("stretch")
  const [wrap, setWrap] = useState("nowrap");
  const [size, setSize] = useState(4)

  const FlexDirButton = ({value}) => {
    let buttonText = convertProperty(value);
    return (
      <button 
      onClick={()=> handleClick(value)}
      className={`${value===flexDirection ? 'border-2 border-white text-white' : ''} font-mono px-3`}>{buttonText}</button>
    )
  }

  const JustifyButton = ({value}) => {
    let buttonText = convertProperty(value);
    return (
      <button 
      onClick={()=> handleJustify(value)}
      className={`${value===justifyContent ? 'border-2 border-white text-white' : ''} font-mono px-3`}>{buttonText}</button>
    )
  }

  const AlignButton = ({value}) => {
    let buttonText = convertProperty(value);
    return (
      <button 
      onClick={()=> handleAlign(value)}
      className={`${value===alignItems ? 'border-2 border-white text-white' : ''} font-mono px-3`}>{buttonText}</button>
    )
  }
  const horizontalAxis = () => {
    switch (flexDirection) {
      case "row":
        return <RightSolid width="100%" />;
      case "row-reverse":
        return <LeftSolid width="100%" />;
      case "col":
        return <HorizontalDotted width="100%" /> ;
      case "col-reverse":
        return <HorizontalDotted width="100%" /> ;
      default:
        return;
    }
  }

  const verticalAxis = () => {
    switch (flexDirection) {
      case "row":
        return <VerticalDotted height="100%" />;
      case "row-reverse":
        return <VerticalDotted height="100%" />;
      case "col":
        return <DownSolid height="100%"/> ;
      case "col-reverse":
        return <UpSolid height="100%"/> ;
      default:
        return;
    }
  }

  useEffect(() => {

  }, [flexDirection])

  const handleClick = (direction) => {
    setFlexDirection(direction);
  }
  const handleAlign = (direction) => {
    setAlignItems(direction);
  }

  const handleJustify = (direction) => {
    setJustifyContent(direction);
  }

  const handleWrap = (wrapOption)=> {
    setWrap(wrapOption);
  }

  const handleSlider = (e) => {
    setSize(e.target.value);
  }



  return (
    <div className="w-screen h-screen flex justify-center items-center gap-12 filter bg-gradient-to-bl from-green-600 to to-blue-500">
      
      <div className="grid grid-cols-6 grid-rows-6 w-106 h-106">
        
        <div className="horizontalAxis col-start-2 col-span-5 row-start-1 row-span-1">
          {horizontalAxis()}
        </div>

        <div className="col-span-1 col-start-1 row-start-2 row-span-5">
        {verticalAxis()}
        </div>
        <div id= "container"
          className={`col-start-2 col-span-5 row-start-2 row-span-5 flex flex-${flexDirection} justify-${justifyContent} items-${alignItems} bg-gray-500 gap-2 p-4 rounded-2xl shadow-lg border-gray-300 border-2 flex-${wrap}`}>
          <FlexCard text={1} color={"red"} size={size}></FlexCard>
          <FlexCard text={2} color={"green"} size={size}></FlexCard>
          <FlexCard text={3} color={"blue"} size={size}></FlexCard>
        </div>

      </div>

      <div className="grid grid-cols-2 gap-4 w-1/2">
        <div className= "flex flex-row gap-2 col-span-1">
          <p className="w-1/2">The <span className="font-mono text-gray-300">flex-direction</span> property determines the main axis of the flex container. (i.e. whether they line up horizontally or vertically) </p>
          <div className="flex flex-col gap-2 w-1/2">
            <FlexDirButton value= "row"/>
            <FlexDirButton value= "row-reverse"/>
            <FlexDirButton value= "col"/>
            <FlexDirButton value= "col-reverse"/>
          </div>
        </div>
        <div className="flex flex-row col-span-2 gap-8">
          <div className="flex flex-row gap-2">
            <p className="w-1/2">The <span className="font-mono text-gray-300">justify-content</span> property determines how a flex container places its content along its main axis.</p>
            <div className="flex flex-col gap-2 w-1/2">
              <JustifyButton value= "start"/>
              <JustifyButton value= "center"/>
              <JustifyButton value= "end"/>
              <JustifyButton value= "around"/>
              <JustifyButton value= "between"/>
            </div>
          </div>
          <div className= "flex flex-row gap-2">
            <p className="w-1/2">The <span className="font-mono text-gray-300">align-items</span> property determines how a flex container places its content along its cross axis.</p>
            <div className="flex flex-col w-1/2 gap-2">
              <AlignButton value= "stretch"/>
              <AlignButton value= "start"/>
              <AlignButton value= "center"/>
              <AlignButton value= "end"/>
              <AlignButton value= "baseline"/>
            </div>
          </div>
        </div>
        <div className= "flex flex-row gap-2 w-100 col-span-1">
          <p className="w-1/2">The <span className="font-mono text-gray-300">flex-wrap</span> property determines whether or not your flex container "wraps" content to the next line when the combined width or height of child components exceeds that of the flex container.</p>
          <div className="flex flex-col w-1/2">
            <input type="range" step="1" min="2" max="6" value={size} onInput={(e)=> handleSlider(e)}/>
            <code>{`child-element {width: 1/${size};}`}</code>
            <div className="flex flex-col">
              <button onClick={()=> {handleWrap("nowrap");}}>no-wrap</button>
              <button onClick={()=> {handleWrap("wrap");}}>wrap</button>
              <button onClick={()=> {handleWrap("wrap-reverse");}}>wrap-reverse</button>
            </div>
          </div>
        </div>



      </div>
    </div>
  );
}

export default App;
