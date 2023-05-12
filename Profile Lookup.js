const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
  let i=0;
 while(i<contacts.length){
   if(name!=contacts[i].firstName){
     if(i+1==contacts.length){
     return "No such contact";
     } else{i++;}
    } else if(contacts[i].hasOwnProperty(prop)){
     return contacts[i][prop];
             } else {return "No such property"}
   }
}

console.log(lookUpProfile("Akira", "likes"));