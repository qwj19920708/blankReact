import React from 'react'

export interface Props {
    name: string
    enthusiasmLevel?: number
    onIncrement?: () => void
    onDecrement?: () => void
}

// export default function Test1({ name, enthusiasmLevel = 1, onIncrement, onDecrement }: Props) {
//     if (enthusiasmLevel <= 0) {
//       throw new Error('You could be a little more enthusiastic. :D');
//     }
  
//     return (
//       <div className="hello">
//         <div className="greeting">
//           Hello {name + getExclamationMarks(enthusiasmLevel)}
//         </div>
//         <div>
//           <button onClick={onDecrement}>-</button>
//           <button onClick={onIncrement}>+</button>
//         </div>
//       </div>
//     )
// }

export default class Test1 extends React.Component<Props, {}>{
    constructor(props: Props) {
        super(props)
    }

    render() {
        const { name, enthusiasmLevel = 1, onIncrement, onDecrement } = this.props;

        if (enthusiasmLevel <= 0) {
            throw new Error('You could be a little more enthusiastic. :D');
        }

        return (
            <div className="hello">
                <div className="greeting">
                Hello {name + getExclamationMarks(enthusiasmLevel)}
                </div>
                <div>
                <button onClick={onDecrement}>-</button>
                <button onClick={onIncrement}>+</button>
                </div>
            </div>
        )
    }
}

function getExclamationMarks(numChars: number) {
    return Array(numChars + 1).join('!');
}
