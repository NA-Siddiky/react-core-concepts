// import logo from './logo.svg';
import './App.css';

const style = {
  color: "red",
  backgroundColor: "yellow"
}

function App() {
  const person = {
    name: 'Dr. Hafiz',
    job: 'Singer'
  }
  const person2 = {
    name: 'Dr. Hafiz2',
    job: 'Singer2'
  }
  // console.log(person);
  // console.log(person2);

  const nayoks = ['Anawer', 'Jafor', 'Elish', 'Bappy', 'sakib']
  // console.log(nayoks);

  // const nayokName = nayoks.map(nayok => nayok)
  // console.log(nayokName);

  const products = [
    { name: 'photoshop', price: '$99.0' },
    { name: 'ilastator', price: '$10.99' },
    { name: 'PDF Reader', price: '$11.99' },
    { name: 'ilastator-2', price: '$10.79' },
    { name: 'ilastator-3', price: '$10.99' },
  ]

  const friends = [
    { name: 'hablu', id: '01' },
    { name: 'kablu', id: '02' },
    { name: 'lablu', id: '99' },
  ]

  // const productsIs = products.map(productIs => productIs);
  // console.log(productsIs);

  // const productsName = products.map(nameIs => nameIs.name);
  // console.log(productsName);

  // const productsPrice = products.map(priceIs => priceIs.price);
  // console.log(productsPrice);

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <h1 className="" style={style}>Test Headings : {person.name + ' ' + person.job}</h1> */}

        {/* <h1 style={{
          color: "red",
          backgroundColor: "Black",
          fontSize: 25
        }}>Test Headings2 : {person2.name + ' ' + person2.job}</h1> */}

        {/* <p>Git setup done</p>
        <p>My First Paragraph</p> */}
        <h3>Testing React</h3>

        <ul>
          {
            nayoks.map(nayokNameIs => <li>{nayokNameIs}</li>)
          }
          {/* <li>{nayoks[0]}</li>
          <li>{nayoks[1]}</li>
          <li>{nayoks[2]}</li>
          <li>{nayoks[3]}</li> */}

          {/* {
            products.map(productsList => <li>{productsList.name}</li>)
          } */}

        </ul>
        {
          products.map(productsList => <Product Product={productsList}></Product>)
        }

        {/* {
          products.map(ProductIs => <Product Product={ProductIs}></Product>)
        } */}
        {/* <Product name={products[0].name} price = {products[0].price}></Product> */}
        {/* <Product Product={products[0]}></Product>

        <Product Product={products[1]}></Product>
        <Product Product={products[2]}></Product> */}

        {/* <Person Nayok ={nayok[0]}> </Person> */}
        <Person> </Person>


      </header>
    </div>
  );
}

// function Nayok(ress){

// }

function Product(info) {
  const productStyle = {
    margin: '5px',
    padding: '5px',
    border: '1px solid blue',
    borderRadius: '5px',
    backgroundColor: 'lightblue',

    width: '300px',
    float: 'left',
  }

  const { name, price } = info.Product;
  // console.log(name, price);


  // console.log(info);
  return (
    <div style={productStyle}>
      {/* <h1>{info.name}</h1>
      <h3>{info.price}</h3> */}

      {/* <h1>{info.Product.name}</h1>
      <h3>{info.Product.price}</h3> */}

      <h1>{name}</h1>
      <h3>{price}</h3>
      <h1></h1>
      <button>Buy Now</button>

    </div>
  )
}

function Friend(props) {
  const friendsStyle = {
    margin: '5px',
    padding: '5px',
    border: '1px solid blue',
    borderRadius: '5px',
    backgroundColor: 'pink',
    height: '300px',
    width: '300px',
    float: 'left',
  }

  const { name, id } = props.Friend;
  // console.log(name, id);


  // console.log(props);
  return (
    <div style={friendsStyle}>

      <h1>{name}</h1>
      <h3>{id}</h3>
      <h1></h1>
      <button>Buy Now</button>

    </div>
  )

}

function Person() {
  const style = {
    border: '1px solid red',
    borderRadius: '15px',
    margin: "5px",
    padding: "5px"
  }

  return (
    <div className="d-flex" style={
      style
    }>
      <h1>Name:Sid</h1>
      <h3>Hero of the year</h3>
    </div>
  )
}

export default App;
