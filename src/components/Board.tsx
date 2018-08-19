import * as React from 'react';
import Square from './Square';

interface BoardIProps {
    squares: Array<string>;
    onClick(index: number): void;
}

export default class Board extends React.Component<BoardIProps>
{
    constructor(props: BoardIProps) {
        super(props);
    }

    public render(): JSX.Element {
        return (
            <React.Fragment>
                <div>
                    <Square onClick={() => this.props.onClick(0)} value={this.props.squares[0]}></Square>
                    <Square onClick={() => this.props.onClick(1)} value={this.props.squares[1]}></Square>
                    <Square onClick={() => this.props.onClick(2)} value={this.props.squares[2]}></Square>
                </div>
                <div>
                    <Square onClick={() => this.props.onClick(3)} value={this.props.squares[3]}></Square>
                    <Square onClick={() => this.props.onClick(4)} value={this.props.squares[4]}></Square>
                    <Square onClick={() => this.props.onClick(5)} value={this.props.squares[5]}></Square>
                </div>
                <div>
                    <Square onClick={() => this.props.onClick(6)} value={this.props.squares[6]}></Square>
                    <Square onClick={() => this.props.onClick(7)} value={this.props.squares[7]}></Square>
                    <Square onClick={() => this.props.onClick(8)} value={this.props.squares[8]}></Square>
                </div>
            </React.Fragment>
        )
    }
}