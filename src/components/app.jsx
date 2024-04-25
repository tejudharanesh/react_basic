import React from "react";
import Header from "./header";
import Footer from "./footer";
import Note from "./note";
import contacts from "../contacts";

function createCard(contact){
    return  <Note 
    id =  {contact.id}
    key={contact.id} 
    name={contact.name}
    usn = {contact.usn}
    />

}

function App(){
    return <div>
        <Header/>
        <h1>My contacts</h1>
        {contacts.map(createCard)}
        
        <Footer/>
    </div>
}

export default App;