import React from 'react';

class EntreeItem extends React.Component {
  render() {
    return (
      <div>
        {this.props.entrees.map(entree =>
          <div key={entree._id}>
            <p> ID: {entree._id}<br/>Name: {entree.name}<br/>Price: ${entree.price}<br/>Menu ID: {entree.menuID} </p>
            <button onClick={() => this.props.entreeDelete(entree)}>X</button>
          </div>
        )}
      </div>
    );
  }
}

export default EntreeItem;