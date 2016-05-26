var React=require("react");

 var List=React.createClass({
       render:function(){
            var listItems=this.props.personList.map(function(item){
                   return <li>
                              <h1>{item.name}</h1>  
                              <h3>{item.age}</h3>  
                              <p>{item.email}</p>                        
                            </li>   
            });
             return(
                   <ul>
                     {listItems}
                   </ul>                                          
              )
       }
 });

module.exports=List;