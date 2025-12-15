function App()
{
  if(true)
  {
var v=100;
let l=200;
const c=300;
v++;
l++;
console.log("Let:"+l);
//c++
//console.log("const:"+c);


  }

  return(<>
  <h1> variable:global:{v}</h1>
  <h1> does not work let and const:because local</h1>
  
  
  </>)
}
export default App


/*function App()
{
  let myfun=(a,b,c)=>
  {
    var tot=a+b+c
document.getElementById("res").innerHTML=`<h2>Total:${tot}</h2>`;
  }

  return(
    <>
    <h3>Arrow function with parameters</h3>
    <button onClick={()=>myfun(10,30,50)}>click it</button>
<div id="res"></div>
    </>
  )
}
export default App



/*function App()
{
  let myfun=()=>
  {
document.getElementById("res").innerHTML="congratulations";
  }

  return(
    <>
    <h3>Arrow function without using parameters</h3>
    <button onClick={myfun}>click it</button>
<div id="res"></div>
    </>
  )
}
export default App

/*import myimg from'./images/2.jpg'
function App()
{
  return(
    <>
    <h2>Image demo using path as expression</h2>
    <img src={myimg} width="75%" height="auto" alt="path is wrong"></img>
    </>
  )

}
export default App


/*function App()
{
  var a=290
  var b=900
  var c=700
  return(
    <>
    <h1>biggest among 3 no's using condition or teranary operator</h1>
    <h1>biggest number{(a>b&&a>c)?a:(b>a&&b>c)?b:c}</h1>
    
    </>
  )}
export default App







/*function App()

{
  var a=100
  var b=200
  return(
    <>
    <h1>Biggest among 2 no's using conditional or ternanary operator</h1>
    <h1>Biggest number:{a>b?a:b}</h1>
    </>
  )
}
export default App





/*function App()
{
  //javascript code here

  var a=20
  var b=50
var c="Brindha"
  return(
    <>
<h1>Total:{a+b}</h1>
<marquee bgcolor='lightgreen'><font size='9'>{c}</font></marquee>
    </>
  )

}
export default App*/



/*import React from "react";
class Parent extends React.Component
{
  render()
  {
    return(
      <>
      <h1>this is parent class</h1>
      <h1>this is parent class</h1>
      </>
    )
  }
}
class App extends React.Component


{
  render()
  {
    return (
      <>
      <Parent/>
      <center>
      <h1>HI Welcome</h1>
    <h1>  Learning React js</h1>
      <h1>thank you</h1></center>
      <p>Amet mollit consequat excepteurCillum magna voluptate tempor tempor sint mollit magna elit ea consequat ullamco. Sit eu deserunt cillum fugiat proident pariatur laboris. Commodo pariatur irure laborum culpa Lorem. Aliquip eu nisi qui dolore tempor. Incididunt aliqua id occaecat incididunt minim ea fugiat velit eiusmod est tempor aliquip est. Dolore proident exercitation irure eu incididunt ut.Reprehenderit sit ea excepteur voluptate. Veniam fugiat officia dolore commodo ullamco mollit consectetur aliqua magna aute nulla culpa sint. Minim tempor ex nisi pariatur quis culpa irure.Reprehenderit veniam cupidatat deserunt consequat duis eiusmod mollit. Enim ullamco consequat est officia Lorem. Minim nisi irure duis exercitation pariatur proident. Enim elit aute officia minim sit ullamco consequat tempor ex id nostrud.Do Lorem culpa id occaecat exercitation cillum ut. Enim mollit deserunt consectetur officia occaecat et reprehenderit esse sit. In consectetur consectetur sit deserunt ea Lorem do ex velit cupidatat veniam culpa ipsum dolor. Magna non nostrud velit laborum aliquip aliquip laboris. Ullamco velit do aliquip exercitation elit ullamco irure elit occaecat consectetur cillum ea. Est sint consectetur quis nulla ex.

Ut nisi magna excepteur ad laborum ea aliqua aute consectetur nostrud nostrud nisi Lorem deserunt. Ut fugiat et excepteupariatur nisi magna ipsum. Sit elit sunt laboris eiusmod ut veniam ea adipisicing cupidatat non consequat nostrud.

Occaecat incididunt Lorem nisi cupidatat nostrud enim sunt sint quis ut do aute voluptate. Adipisicing cupidatat sunt pariatur aute aliqua exercitation ad et anim fugiat. Velit sit ullamco excepteur. Exercitation adipisicing proident velit excepteur tempor consectetur irure. Esse qui id sit cillum eu sit dolor. Mollit ut pariatur labore est proident quis proident magna. Voluptate cillum laboris duis pariatur velit amet nisi magna ullamco. tempor nisi. Dolore est aliqua id tempor magna. Ullamco esse incididunt velit reprehenderit deserunt deserunt nulla laboris aliquip. Velit deserunt sint ut tempor veniam occaecat ea ut magna irure consectetur excepteur. Id pariatur officia nostrud laboris duis quis aute amet eiusmod magna minim quis. Do incididunt deserunt quis enim. Incididunt officia exercitation excepteur Lorem dolor velit cupidatat aliqua laborum minim anim.</p>
      </>
    )
  }
}
export default App
*/



/*function App()
{
  return(
    <div>
          <h1>Welcome to React js</h1>
    <h1>Welcome to React js</h1>
    <h1>Hello</h1>
    <h1>Good morning

    </h1>


    </div>
  )
}
export default App*/

/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/
