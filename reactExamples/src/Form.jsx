var React=require("react");

var List=require("./List");

  
var Form=React.createClass({
     getInitialState:function(){
            return{
                 eventNo:0
            }
      },
     componentWillMount:function(){
          this.person={
                name:"",
                age:"",
                email:""       
          };
         
          this.newPerson=[];
       },
       handleNameChange:function(e){
            this.person.name=e.target.value;
       },
       handleAgeChange:function(e){
            this.person.age=e.target.value;
       },
       handleEmailChange:function(e){
            this.person.email=e.target.value;
       },
       handleSubmit:function(e){
             e.preventDefault();
            this.newPerson.push(this.person);
           this.setState({eventNo:this.state.eventNo++});
       },
       render:function(){
            return(
                <div>
                     <form onSubmit={this.handleSubmit}>
                          name: <input onChange={this.handleNameChange}/><br/><hr/>
                          age:  <input onChange={this.handleAgeChange}/><br/><hr/>
                          email: <input onChange={this.handleEmailChange}/><br/><hr/>
                         <button>Add</button>

                    </form>
                     <List personList={this.newPerson}/>
                </div>
                 
             )
       }
});

module.exports=Form;