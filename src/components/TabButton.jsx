export default function TabButton({children, onSelect}) {
    // vanilla javascript code to detect when button was clicked
    // document.querySelector('button').addEventListener('click' () => {})
    // but in React, components have a speficic property called onClick ****


    return (
    <li><button onClick={onSelect}>{children}</button></li>  // props.children refers to content between your component text
    // example <TabButton>Component</TabButton> ==> components = props.children


    

)

     
    

}