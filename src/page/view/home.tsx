import React from 'react'

export interface Props {
    name: string
    enthusiasmLevel?: number
    onIncrement?: () => void
    onDecrement?: () => void
}

export default class Home extends React.Component<Props, {}>{
    constructor(props: Props) {
        super(props)
    }

    render() {
        const { name, enthusiasmLevel = 1, onIncrement, onDecrement } = this.props

        return (
            <div className="hello">
                <div className="greeting">
                    <span>Hello</span> 
                    <span>{`${name} + ${enthusiasmLevel}`}</span>
                </div>
                <div>
                    <button onClick={onDecrement}>-</button>
                    <button onClick={onIncrement}>+</button>
                </div>
            </div>
        )
    }
}