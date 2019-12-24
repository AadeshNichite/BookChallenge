import React, {Component} from 'react';
import './booksShowPage.css';
import { Link,Redirect} from 'react-router-dom';
import axios from "axios";

class LoginPage extends Component{

    constructor(props){
        super(props)
        this.state = {
            data :[{
                name:''
            }]
        };
    }

    showdata(){

        //Axois call for get the whole profile
        axios.get('api/bookProfile')
              .then(response=>{

                  //data is showing here only need to map that data
                  console.log(response.data);
                //   const res = response.data;
                //   this.setState({data:res})
                //   console.log(this.state.data)
              })  
    }
    
    render(){
        
        return (

        <div>
            <div onLoad={this.showdata}>

            <div className="MainDivUserDashBoard">

                <div><button onClick={this.showdata}>show</button></div>
                {/* <div>{this.state.data}</div> */}
                {/* {this.state.data.map(i=>{
                    return(
                        <div>{i}</div>
                    )   
                })} */}
                </div>
            </div>
            <form onSubmit={this.submitForm} className="MainDiv">
                <h1 className="head text-center">Book Shop</h1>
                <p id="bookName">The Greate Indian</p>
                <p id="author">Raja</p>
                <p id="description">History related book</p>
                <p id="rating">4/5</p>
                <input type="text" className="dataRegister" id="findBook" name="findBook" placeholder="Enter Book Name to find" onChange={this.handleChange} />
                <Link to='/register' className="register">Add Book</Link>
                <button type="submit" className="button">submit</button>
            </form>
        </div>
     )
    }
}
export default LoginPage;