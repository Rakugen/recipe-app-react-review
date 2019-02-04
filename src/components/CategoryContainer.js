import React from 'react'
import Category from './Category'
import v4 from 'uuid' // another way of generating unique ids (useful for keys)

class CategoryContainer extends React.Component {
  // constructor(props){
  //   super(props)
  //   console.log("constructor", this.props);
  //   this.state = {
  //     categories: []
  //   }
  // }

  // componentDidMount() => {
  //   this.setState({
  //     categories: [...this.props.categories]
  //   })
  // }

  renderCategories = () => {
    return this.props.categories.map(cat => {
      return <Category key={cat.idCategory} cat={cat} findRecipes={this.props.findRecipes}/>
    })
  }

  render() {
    // console.log("CategoryContainer: ", this.props);
    return(
      <div>
        {this.renderCategories()}
      </div>
    ) // end of render()
  }
} // end of CategoryContainer class

export default CategoryContainer
