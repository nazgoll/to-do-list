import './App.css';
import Header from "./components/header/Header";
import Button from "./components/button/Button";
import React, {useState} from "react";

function App() {
    const [todo, setTodo] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const add = () => {
        if (inputValue !== "") {
            setTodo([inputValue, ...todo]);
            setInputValue("");
        }

    };

    const mapToDolist = (task, index) => {
        return (
            <div>
                {task}
            </div>
        )
    }


    return (
        <div
            className=" w-screen h-screen flex flex-col items-center justify-center bg-[url('https://static.vecteezy.com/system/resources/previews/021/743/454/original/abstract-geometric-gradient-background-with-glassmorphism-style-transparent-frosted-glass-design-on-black-background-banner-template-vector.jpg')]"
        >
            <div className={" bg-white p-28 bg-opacity-25 backdrop-filter" +
                "backdrop-blur-lg shadow-lg rounded-lg bg-rad gap-5"}>
                <Header/>
                <div className={"flex flex-row gap-2 text-red-600"}>
                    <input
                        type={"text"}
                        placeholder="Add To Do"
                        value={inputValue}
                        onChange={(event) => setInputValue(event.target.value)}
                        className={"rounded-lg p-2 bg-fuchsia-950 bg-opacity-90 shadow-sm shadow-blue-900"}
                    />
                    <Button onClick={add} className={"text-red-600"}>
                        +add
                    </Button>
                </div>
                <ul className={"bg-emerald-600"}>
                    {todo.map(mapToDolist)}
                </ul>
            </div>
        </div>
    );

}
export default App;
