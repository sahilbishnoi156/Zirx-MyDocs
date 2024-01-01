import React, {useRef} from "react";
import Card from "./Card";

const data = [
    {
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum earum, unde quibusdam odio",
        size:"4 gb",
        backgroundColor:"blue"
    },
    {
        description: "I have done previous dsa leetcode question now i have to revise the react js and next js.",
        size:"0 mb",
        backgroundColor:"green"
    }
];

function Foreground() {
    const constraintsRef = useRef(null);
  return (
    <div className="z-[5] absolute h-screen w-screen top-0 left-0 p-4" ref={constraintsRef}>
        <div className="flex items-center justify-center text-[2rem] text-orange-500 font-bold">
            Sahil Bishnoi
        </div>
        <div className="flex gap-4">
        {data.map((dataItem)=>{
            return <Card data={dataItem} constraintsRef={constraintsRef} key={dataItem.description}/>
        })}
    </div>
    </div>
  );
}

export default Foreground;
