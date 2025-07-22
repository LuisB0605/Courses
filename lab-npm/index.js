import PromptSync from "prompt-sync";

const prompt = PromptSync();

let shoppingList = [];
let running = true;

while (running) {
  console.log("\n🛒 Shopping List Manager");
  console.log("1. Add an item");
  console.log("2. Remove an item");
  console.log("3. View all items");
  console.log("4. Exit");
}

let choice = prompt("Choose an option (1-4): ");

switch(choice){
    case "1": 
        let itemToAdd = prompt("Enter item to add: ");
        shoppingList.push(itemToAdd);
        console.log(` '${itemToAdd}' added to the list. `);
        break;

    case "2":
        if(shoppingList.length === 0){
            console.log("Your list is empty.");
        } else{
            console.log()
        }



}