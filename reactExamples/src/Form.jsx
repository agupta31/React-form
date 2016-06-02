var React=require("react");

var List=require("./List");

  
var Form=React.createClass({
     getInitialState:function(){
         return{
             eventNo:0
         }
     },
    componentWillMount:function(){
       this.person={};
        this.list=[];
    },
     handleNameChange:function(ev){
         this.person.name=ev.target.value;
     },
    handleAgeChange:function(ev){
        this.person.age=ev.target.value;
    },
     handleSubmit:function(e){
         e.preventDefault();
        this.list.push(this.person);
         console.log(this.person);
        this.person={};
         this.setState({eventNo:this.state.eventNo++});
     },
      render:function(){
          return(
              <div>
               <form onSubmit={this.handleSubmit}>
                name:<input onChange={this.handleNameChange}/>
                age:<input onChange={this.handleAgeChange}/>
                <button>Add</button>
               </form>
               <List personList={this.list}/>
                
              </div>
              
          )
      }
});

module.exports=Form;