import * as React from 'react';

interface SquareIProps
{
    value: string;
    onClick(): void;
}

export default class Square extends React.Component<SquareIProps>
{
    constructor(props: SquareIProps)
    {
        super(props);
    }

    public render(): JSX.Element
    {
        return (
            <button className="square" onClick={() => this.props.onClick()}>
                {this.props.value}
            </button>
        )
    }
}