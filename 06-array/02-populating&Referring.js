let food = ['Peacn pie', 'Shrimp', 'Quesadilla', 'Cheese cake', 'Hotdog'];


for(f in food){
   // console.log(food[f])
}
food.push('Pizza');
//PUSHES ITEM TO THE END OF ARRAY
food.splice(1, 0, 'Bananas');
//SPLICES AN ARRY, AND CAN INSERT NEW ITEMS
//console.log(food)

food.splice(4,1)
//JUST REMOVES ITEM FROM ARRY
//console.log(food);
food.pop();
//REMOVE ITEM FROM THE END
console.log(food)