var Service={};
var customers=[{id:'1',name:'Sudha',email:'sudha@gmail.com',phone:98765},
{id:'2',name:'Pavi',email:'pavi@gmail.com',phone:98765},
{id:'3',name:'Swathi',email:'swathi@gmail.com',phone:98765}];

Service.getCustomers=function(){
    return customers;

}
export default Service;