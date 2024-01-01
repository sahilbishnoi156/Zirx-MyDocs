import { motion } from "framer-motion";
import React, {useState} from "react";
import { FaRegFileCode } from "react-icons/fa";
import { FaCloudDownloadAlt } from "react-icons/fa";

export default function Card({ data, constraintsRef }) {
    const [a, b] = useState(`${data.backgroundColor === "blue" ? "bg-blue-400" : "bg-green-400" }`);
  return (
    <motion.div
      drag
      whileDrag={{ scale: 1.09 }}
      onDragStart={
        ()=>b(`bg-red-400`)
      }
      onDragEnd={
        ()=>b(`${data.backgroundColor === "blue" ? "bg-blue-400" : "bg-green-400" }`)
      }
      dragConstraints={constraintsRef}
      className="h-[18rem] w-[14rem] rounded-[2rem] bg-gray-300 flex flex-col justify-between text-md shrink-0"
    >
      <div className="m-5">
        <div className="mb-3">
          <FaRegFileCode size="1.4rem" />
        </div>
        <p>{data.description}</p>
      </div>
      <div>
        <div className="px-5 pb-2 flex items-center justify-between text-lg">
          <p>{data.size}</p>
          <FaCloudDownloadAlt />
        </div>
        <div
          className={`p-5 ${a} rounded-b-[2rem] px-5 `}
        ></div>
      </div>
    </motion.div>
  );
}
