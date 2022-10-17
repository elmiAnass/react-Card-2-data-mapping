import React from "react";


class Cards extends React.Component {
  render(){ 
     const {title,location,map,link,start_date,end_date,description,img} = this.props
  return (
    <div className="card" style={{width:"12rem;"}}>
    <img src={img} class="card-img-top" alt="..."/>
    <div className="card-body">
    <p className="card-text">start date :  {start_date}  End Date : {end_date}</p>
    <h4 className="text-success"> Location : {location} city : {map} </h4>
      <h4 className="card-title">{title}</h4>
      <p className="card-text">{description}</p>
      <a href="#" class="btn btn-primary">{link}</a>
    </div>
  </div>
  )
}
}
export default Cards ; 