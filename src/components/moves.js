import React from 'react';

class Moves extends React.Component {
    render() {
        const moves = this.props.moves;
        const moves_list_elements = moves.map((move, move_number) => {
            let desc = '';
            if (!move_number) {
                desc = 'Go to game start';
            } else {
                desc = `Go to move #${move_number}: (${move.row}, ${move.column})`;
            }
            return (
                <li key={move_number}>
                    <button onClick={()=> this.props.onClick(move_number)}>{desc}</button>
                </li>
            );
        });
        return (
            <ol>{moves_list_elements}</ol>
        )
    }

}

export { Moves }
