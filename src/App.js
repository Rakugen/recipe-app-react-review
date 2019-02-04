import React, { Component } from 'react'
import { Row, Col } from 'react-materialize'
import Header from './components/Header'
import CategoryContainer from './components/CategoryContainer.js'
import RecipeContainer from './components/RecipeContainer.js'

class App extends Component {
  state = {
    categories: [],
    recipes:[],
    myRecipes: [],
    filtered: [],
    filter: '' ,
    catName: ''
  }

  componentDidMount(){
    fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
    .then(res => res.json())
    .then(res =>
      this.setState({
        categories: res.categories,
        filtered: res.categories
      }))
  }

  findRecipes = (cat) => {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${cat}`)
    .then(res => res.json())
    .then(res =>
      this.setState({
        recipes: res.meals
      }))
  }

  addRecipe = (recipeId) => {
    const recipe = this.state.recipes.find(r => r.idMeal === recipeId)
    const recipes = this.state.myRecipes
    recipes.push(recipe)
    this.setState({myRecipes: recipes})
  }

  removeRecipe = (recipeId) => {
    const newMyRecipes = this.state.myRecipes.filter(r => r.idMeal !== recipeId)
    this.setState({myRecipes: newMyRecipes})
  }

  changeFilter = (filter) => {
    const categories = [...this.state.categories]
    let filtered = (categories.filter(c => c.strCategory.toLowerCase().includes(filter.toLowerCase())))
    this.setState({
      // filter: filter,
      filtered: filtered
    })
  }

  render() {
    // console.log("App: ", this.state)
    return (
      <div>
        <Header changeFilter={this.changeFilter} />

        <Row>
          <Col s={4} className='grid-example'>
            <h4>Categories</h4>
            <CategoryContainer
              findRecipes={this.findRecipes}
              categories={this.state.filtered}/>
          </Col>

          <Col s={4} className='grid-example'>
            <h4>Recipes</h4>
            <RecipeContainer recipes={this.state.recipes} handleClick={this.addRecipe} />
          </Col>

          <Col s={4} className='grid-example'>
            <h4>My Recipes</h4>
            <RecipeContainer recipes={this.state.myRecipes} handleClick={this.removeRecipe} />
          </Col>
        </Row>
      </div>
    );
  }
} // End of class

export default App;
