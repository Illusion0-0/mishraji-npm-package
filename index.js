function mishraji(person) {
  if (person == null) {
    person = prompt("Please enter your name", "ChoubeyJi");
    let is_name1 = person.includes("ji");
    let is_name2 = person.includes("Ji");
    if (is_name1 || is_name2) {
      alert("MishraJi is pleased to see you again " + person + ".");
    } else {
      alert("MishraJi is pleased to see you " + person + "Ji.");
    }
  }
  return person;
}

module.exports = mishraji;
