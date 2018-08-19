import * as React from 'react';
import Board from './Board';

interface GameIProps
{

}
interface GameIState
{
    history: Array<{squares: Array<string>}>;
    step: number;
    isNext: boolean; // true: 'X', false: 'O'
}

export default class Game extends React.Component<GameIProps, GameIState>
{
    public state = 
    {
        history: [{squares: Array(9).fill(null)}],
        step: 0,
        isNext: true,
    }

    constructor(props: GameIProps)
    {
        super(props);
    }

    public render(): JSX.Element
    {
        const currentHistory = this.state.history;
        const currentSquares = currentHistory[this.state.step];
        console.log(this.state);
        console.log('currentHistory: ', currentHistory);

        return (
            <div className="gameContainer">
                <div className="boardContainer">
                    <Board squares={currentSquares.squares} onClick={(i) => this.handleClick(i)} />
                </div>
                <div className="infoContainer">
                    <ul>
                        {
                            !this.checkWinner(currentSquares.squares)
                            ? <span>Next Player: {this.state.isNext ? 'X' : 'O'}</span> 
                            : <span>"Winner Player: {this.state.isNext ? 'O' : 'X'}"</span>
                        }
                        {
                            currentHistory.map((value, index) => {
                                const status = !index ? `${index+1}. Game start!` : `${index+1}. Move #${index}`;
                                return (
                                    <li key={index} onClick={() => this.stepTo(index)}>{status}</li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
    
    private handleClick(index: number): void
    {
        const currentHistory = this.state.history[this.state.step];
        const currentSquares = currentHistory.squares;

        // 만약 게임이 끝났으면 return
        // 이미 눌린 곳이어도 return
        if(this.checkWinner(currentSquares) || currentSquares[index])
            return;

        const addSquares = [...currentSquares];
        addSquares[index] = this.state.isNext ? 'X' : 'O';
        this.setState({
            history: this.state.history.slice(0, this.state.step + 1).concat([{squares: addSquares}]),
            step: this.state.step + 1,
            isNext: !this.state.isNext,
        }); 
    }

    private stepTo(step: number): void
    {
        this.setState({
            step: step,
            isNext: (this.state.history.length % 2) ? true : false,
        });
    }

    private checkWinner(currentSquares: Array<string>): boolean
    {
        const lines = 
        [
            [0,1,2], [3,4,5], [6,7,8], [0,3,6], 
            [1,4,7], [2,5,8], [0,4,8], [2,4,6]
        ];

        for(let line of lines)
        {
            const [a,b,c] = line;
            if(currentSquares[a] && currentSquares[a] === currentSquares[b] && currentSquares[a] === currentSquares[c])
            {
                return true;
            }
        }
        return false;
    }
}