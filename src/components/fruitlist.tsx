import {useEffect, useState } from "react";
interface Fruit {
    id:number;
    name:string;
    description:string;
    imageURL:string;
}


const FruitList = () => {
    const [fruits, setFruits] = useState<Fruit[]>([]);

    useEffect(() => {
        fetch("/src/fruit.json")
            .then((res) => res.json())
            .then((data) => setFruits(data))
            .catch((err) => console.error("error fetching fruits:", err));

    }, []);

    return (
        <div className="fruit-card-container">
            <h1>Our fruits</h1>
            <div className="fruit-grid">
                {fruits.map((fruit) => (
                    <div className="fruit-card" key={fruit.id}>
                        <img src={fruit.imageURL} alt={fruit.name} />
                        <h2>{fruit.name}</h2>
                        <p>{fruit.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FruitList;
//exporteras till pages/fruits.tsx 