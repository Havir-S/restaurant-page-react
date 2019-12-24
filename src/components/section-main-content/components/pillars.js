import React from 'react';

function Pillar(props) {
  return ((props.value === 'left') ?
         <div className="pillar pillar-left" /> :
         <div className="pillar pillar-right" />
       )
}

class Pillars extends React.Component {

  render() {
    return (
      <div className="pillar-container">
        <Pillar value="left" />
        <Pillar value="right" />
      </div>
    )
  }
}

export default Pillars;
