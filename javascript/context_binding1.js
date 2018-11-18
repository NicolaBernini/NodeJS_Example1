
// Define an Object as Data + Function 
var test_class1 = 
{
    m_x: 56, 
    get_x : function() {return this.m_x;}
} 


// Test it returns 56 
test_class1.get_x(); 



// Unbind method and check it returns null 
var unbound_get_x = test_class1.get_x; 
unbound_get_x(); 



// Bind to new Context 
var test_class3 = 
{
    m_x : 112
}

// NOTE: Defines a new callable as a free function which is bound to a new context  
var new_bound_get_x = unbound_get_x.bind(test_class3); 

// NOTE: Verify it returns 112 
new_bound_get_x(); 


// NOTE: Defines a new callabla which is Dynamically added to the new bound function as the object method 
test_class3.get_x = new_bound_get_x; 
test_class3.get_x(); 

