// in react, we accept one parameter, called props (can be named anything) 
export default function CoreConcept(props) { // or use Object destructuring - {image, title, description} instead of props. You can just use image instead of props.img, etc

    return (
      <li>
        <img src={props.img} alt = {props.title}></img>
        <h3>{props.title}</h3>
        <p>{props.description}</p> 
      </li>
     
    );
  
  }