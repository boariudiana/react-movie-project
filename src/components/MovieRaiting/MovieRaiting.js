import React, {Component} from "react";
import StarIcon from '@mui/icons-material/Star';
import styles from "./MovieRaiting.module.css"


class   MovieRaiting extends Component {

  constructor(props) {
    super(props)
    
    const movieRating = JSON.parse(window.localStorage.getItem(this.props.movie.id))
    if (movieRating && Array.isArray(movieRating)) {
      this.state = {
        rating : movieRating,
      }
    } else {
      this.state = {
        rating: [{ id: 0, active: false, raited:false },
          { id: 1, active: false, raited:false },
          { id: 2, active: false, raited:false },
          { id: 3, active: false, raited:false },
          { id: 4, active: false, raited:false },],
      }
    }

      
  }

   handleMouseLeave = (item) => {
    const items = this.state.rating.map((el, index) => {
      return Object.assign({}, { ...el }, { active: false })
    })
    this.setState({rating:items})
  }
  
   handleMouseOver = (item) => {
    const items = this.state.rating.map((el, index) => {
      if (index <= item.id) {
        return Object.assign({}, { ...el }, { active: true })
      }
      return Object.assign({}, { ...el }, { active: false })
    })
    this.setState({rating:items})
  }

   handleClick = (item) =>{
    const items = this.state.rating.map((el, index) => {
      if (index <= item.id) {
        return Object.assign({}, {...el}, {raited: true})
      }
      return Object.assign({}, {...el}, {raited :false})
    })
    this.setState({rating:items}, () => {
      window.localStorage.setItem(
        this.props.movie.id,
        JSON.stringify(this.state.rating),
      )
    })
  
  }
  

  
  render(){
    return (
      <span>
      {this.state.rating.map((item, index) => {
        return (
          <StarIcon
            key = {index}
            className={[styles.star, item.active && styles.active, item.raited && styles.raited].join(' ')}
            onMouseOver={() => this.handleMouseOver(item)}
            onMouseLeave={() => this.handleMouseLeave(item)}
            onClick = {()=>{this.handleClick(item)}}
            
          />
        )
      })}
    </span>
    )
  }

}
export default MovieRaiting;