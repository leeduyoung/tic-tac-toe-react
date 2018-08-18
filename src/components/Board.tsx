import * as React from 'react';
import Square from './Square';

interface BoardIProps
{
    onClick(): void
}
interface BoardIState
{

}

export default class Board extends React.Component<BoardIProps, BoardIState>
{
    constructor(props: BoardIProps)
    {
        super(props);
    }

    public render(): JSX.Element
    {
        return (
            <React.Fragment>
                <Square onClick={this.props.onClick}></Square>
            </React.Fragment>
        )
    }
}