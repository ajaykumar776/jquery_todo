$(document).ready(function(){ /*now , our document is ready*/
    var todos = [];  /* we Have taken a blank array, for storing all li tags.*/
    function todo_list(){           /*Defined the function todo_list()*/

        var todo_list_html = "";            /*taken a variable which is initialised with blank string. */

        if(todos.length){               /*now the array is empty, but as we will insert todo's in it , at each index there will be our li tag.so if there will be any elements in the array, this condition will execute.*/
            for(todo in todos){             /*doing loop through in the todos array, */
                todo_list_html += '<li class="list-group-item"><span class="to-do-text">'+todos[todo]+'</span><button class="btn btn-danger btn-xs pull-right to-do-delete-btn">x</button></li>';
            }
        }else{
            todo_list_html = '<li class="list-group-item text-danger">No Data Available</li>';      /*if there will be not anything in the todos array , then this part will execute.In this part, in local var , we simply just assign with no data available. */
        }
        $("#to-do-list").html(todo_list_html)        /*so in that todo_list_html var ,we have the tags in string,so we are just pushing it in the UL list in html, by using the id of the ul tag.By doing that it will dynamically add there. */
        $("#to-do-count").html(todos.length)     /*we have given a badge near the To Do heading,so at starting assigned with 0, then, what we are doing is, taking its id, and counting the todos array length.basically , what will show here, number of the elements present in the array.so simply we are changing.*/
    }

    function todo_add_ajax(){       
        var todo = $("#to-do-input").val();          /*after pressing the button, or enter key, the program will come here.here we are simply pushing the text in todos array.so, using the id of the input tag,we are taking its value and storing it in var. */
        if(todo){                   /*so if our text will true only , then it will proceed.suppose anyone has not written anything, i.e a blank char any entered, then it should not append in our array. */
            todos.push(todo)        /*so we are pushing our text that stored in the todo var,in the todos array, which is globally defined. */
            console.log(todos)
            todo_list();            /*so we have inserted into the array only. but mot added in the ul tag.if we will add in ul tag, then only it will show.so we are calling todo_list func, again. */
            $("#to-do-input").val("");           /*after adding in array, and pushing it in ul tag, now in our input tag, it should be empty, so by taking id of the input tag , we are changing its value to blank char. */
        }
    }
    function  todo_add(){       /*function is not taking any parameters.and not returning any thing. */
        $("#to-do-btn").click(function(e){           /*so, if anyony will click on the button, then we have to add the text in todos array.so here, we took the id of the button, and if anyone will click,then it will call a function, */
            e.preventDefault();         /*The event.preventDefault() method stops the default action of an element from happening. */
            todo_add_ajax()              /*calling a function,here, simply when we clicked on the button,then a function will call. */
        })
        $("#to-do-input").keyup(function(e){         /*suppose anyone after entering the text in input field will press enter, then it will go in this jqury.we are taking the id of the input tag, and checking the key that we have entered is matched with the enter char or not.so we are doing this by taking ascii value of enter key i.e 13.if it will equal, then calling a fuunction. */
            e.preventDefault();
            if(e.keyCode === 13)
                todo_add_ajax()
        })
    }
    
    function todo_delete(){         /*defined a funciton */
        $(document).on("click", ".to-do-delete-btn", function(){     /*in a li tag, we have inserted our text as well as button.so when any one will click on that x button, our list should be delete from there.so here , we are taking the id of the button, and on clicking , we are calling a call back function! */
            var todo_alert = confirm("Are you sure, you want to delete?");      /*taken a var , which will take the value from user.confirm func will ask user to confirm.if user will confirm then ,it will store true value in it.else false. */
            if(todo_alert === true){                                            /*it will go inside, if user has conformed else will not go. */
                var todo = $(this).parent().find(".to-do-text").text()           /*take your mouse cursor to todos wbesite, and hold your cursor on the x button. and then press ctrl+shift+i to inspect the codes.then in the same page, one more window will open, and in elements,you will get a html codes.so then go to the ul tag, you will see there inside ul, there are lots of li tags.so basically we want the text value.thats why firstly we have gone to parent and then finds the value. */
                console.log(todo)
                todo_index = todos.indexOf(todo)        /*so we got the text, but to delete that text, it requires index. so now we are finding its index. */
                if(todo_index > -1){        /*if in our array, suppose a text is present in the 0 index, it can also delete by the user, so we have given > -1. */
                    todos.splice(todo_index, 1)             /*simply we are deleting that index from our array. */
                }
                todo_list();            /*we have deleted in array, but not in the ul tag.so we have to modified it.hence we will call again the todo_list func. */
                console.log(todos)
            }

        })
    }
    function init(){
        todo_list();            /*calling a todo_list() function,first this function will execute */
        todo_add();             /*calling a todo_add() function, second it will execute.*/
        todo_delete()           /*calling a todo_delete() function, and at last it will execute.*/
    }
    init();  
       /*Our Program starts from here, we have called a function named init().we are not passing any parameters.*/

});