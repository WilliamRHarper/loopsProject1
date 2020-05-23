let i = 0;
do {
  i = i+1;
  console.log(i);
}while (i < 1000);

var person = {
    firstName: "Jane",
    lastName: "Doe",
    birthDate: "Jan 5, 1925",
    gender: "female"  
  }
  
  for (let key in person){
     //split vaules into an array
    let birthArray = person[key].split(",");
    //if birthyear is odd
    if (birthArray[1] % 2 === 1){
    //console.log the value
      console.log(person[key]);
    }
  }

  let arrayOfPersons = [{
    firstName: "Jane",
    lastName: "Doe",
    birthDate: "Jan 5, 1925",
    gender: "female"  
  }, {
    firstName: "Jim",
    lastName: "Smith",
    birthDate: "Dec 10, 1936",
    gender: "male"  
  }, {
    firstName: "Rashida",
    lastName: "Jones",
    birthDate: "March 30, 1997",
    gender: "female"  
  }];
  
  let map1 = arrayOfPersons.map(x => console.log(x));
  let filter1 = arrayOfPersons.filter(x => x.gender === 'male');
  console.log(filter1);
  let filterBirthday = [];
  arrayOfPersons.filter(x => filterBirthday.push(x.birthDate));
  for (let i = 0; i < arrayOfPersons.length; i++) {
  arrayOfPersons[i].birthDate = arrayOfPersons[i].birthDate.split(" ");
  }

  let bornBefore = arrayOfPersons.filter(x => parseInt(x.birthDate[2]) < 1990);
  console.log(bornBefore);