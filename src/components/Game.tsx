import * as React from 'react';
import Board from './Board';

interface GameIProps
{

}
interface GameIState
{
    history: Array<Array<string>>;
    // history: Array<{squares: Array<string>}>;
    step: number;
    isNext: boolean;
}

export default class Game extends React.Component<GameIProps, GameIState>
{
    public state = 
    {
        history: [Array(9).fill(null)],
        // history: [{squares: Array(9).fill(null)}],
        step: 0,
        isNext: true,
    }

    constructor(props: GameIProps)
    {
        super(props);
    }

    public render(): JSX.Element
    {   
        const history = this.state.history;
        const currentHistory = history[this.state.step];

        return (
            <div className="gameContainer">
                <div className="boardContainer">
                    <Board onClick={this.handleClick} />
                </div>
                <div className="infoContainer">
                    <ul>
                        {
                            this.state.isNext 
                            ? <span>Next Player: {}</span> 
                            : <span>"Winner Player: {}"</span>
                        }
                        <li>1. Game start</li>
                        {
                            currentHistory.map((value, index) => {
                                return <li>{index+1}. Move #{index}</li>
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }

    private handleClick(): void
    {

    }

    private stepTo(): void
    {

    }

    private checkWinner(): void
    {

    }
}