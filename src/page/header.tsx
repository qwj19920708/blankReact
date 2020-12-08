import React, {useState, useEffect} from 'react'


interface Animal {
    age : number,
}

interface Cat extends Animal {
    meow: () => string
}

const duck = { 
    age : 7 
}

const felix = {
    age : 12,
    meow: () => "Meow"
}


const listOfAnimals: Animal[] = [duck]
const listOfCats: Cat[] = [felix]

function Header(){
    const [cats, setCats] = useState<Array<Cat>>(listOfCats)
    const [animals, setAnimals] = useState<Array<Animal>>(listOfAnimals)
    const [animal, setAnimal] = useState(duck)

    return <div>
        <button onClick={()=>{ setAnimals([animal, ...animals])}}>添加</button>
        <ul>
            {
                animals.map( (item, index) => {
                    return <li key = {index}> 
                        <span>{ item.age } </span>
                        {/* <button onClick= { (index) => {
                            setAnimals([...animals.slice(1, index) , ...animals.slice(index)])
                        } }>delete</button> */}
                    </li>
                })
            }
        </ul>
        
        
    </div>
}

export default Header