import React from 'react'
import Recipe from './Recipe'
import v4 from 'uuid' // another way of generating unique ids (useful for keys)

class RecipeContainer extends React.Component {
  renderRecipes = () => {
    return this.props.recipes.map(r => {
      return <Recipe key={r.idMeal} recipe={r} handleClick={this.props.handleClick}/>
    })
  }

  render() {
    // console.log("RecipeContainer: ", this.props);
    return (
      <div>{this.renderRecipes()}</div>
    )
  }
}

export default RecipeContainer
