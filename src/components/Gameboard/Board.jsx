import React from 'react';
import PropTypes from 'prop-types';
// import { activateCell } from '../../actions/gameActions';

const Board = ({ data }) => {
  const tr = [];
  data.map(r => {
    const td = [];
    r.map(c => td.push(
      <td key={`${r},${c}`}
        onClick={() => {}}
      >
      </td>  
    ));
    tr.push(<tr key={r}>{td}</tr>);
  });

  return (
    <div>
      <table>
        <tbody>
          {tr}
        </tbody>
      </table>
    </div>
  );
};

Board.propTypes = {
  data: PropTypes.array
};

export default Board;
