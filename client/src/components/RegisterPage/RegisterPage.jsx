import React, {Component} from 'react';
import './RegisterPage.css';
import { Redirect} from 'react-router-dom';
import axios from "axios";

class RegisterPage extends Component {
    constructor(props)
    {
        super(props);
        let flag = false;
        this.state ={
                bookname: '',
                author : '',
                description: '',
                rating:''
               
        }
        this.handleChange=this.handleChange.bind(this);
        this.submitForm=this.submitForm.bind(this);
    }
    handleChange(e){
        const {name,value} = e.target
        this.setState({
            [name]: value
        })
    }

      submitForm(e){
        e.preventDefault();

        const bookname = this.state.bookname;
        const author = this.state.authorName;
        const description = this.state.description;
        const rating = this.state.rating;

        const user = {bookname,author,description,rating}

        const config = {
            headers : {
                'Content-type' : 'application/json'
                }
            }

        const body =  JSON.stringify(user);
    
        //Axois call for add the new book info
        axios.post('/api/bookProfile',body,config)
                         .then(res => {
                             console.log(res.data)
                                this.setState({
                                   flag : true
                            });
                      
                });
            }
        render() {
        if(this.state.flag)
        {
            alert("Book Uploaded in database");
            return <Redirect to="/" />
        }   
        return (
        <div>
            <form className="MainDiv">
                <h1 className="headRegister text-center">Add New Book Infromation</h1>
                <input type="text" className="dataRegister" id="bookname" name="bookname" placeholder="Enter Book Name" onChange={this.handleChange} />
                <input type="text" className="dataRegister" id="authorName" name="authorName" placeholder="Enter Author Name" onChange={this.handleChange} />
                <input type="text" className="dataRegister" id="description" name="description" placeholder="Enter description" onChange={this.handleChange} />
                <input type="text" className="dataRegister" id="rating" name="rating" placeholder="Enter rating" onChange={this.handleChange} />
                <button type="submit" className="buttonRegister" onClick={this.submitForm}>button</button> 
            </form>
        </div>
        )
    }
}
export default RegisterPage;