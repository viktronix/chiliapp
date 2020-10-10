export function write_guess(){
    var chili_input = document.getElementById("ChiliInput");
    var chili_picture = document.getElementById("chili-picture");
    db.collection("guess").add({
      user: userid,
      guess: chili_input.value.split(" ").join("_"),
      solution: chili_picture.src.split("/")[6],
      link: chili_picture.src,
      is_wrong: document.getElementById("iswrong").checked,
      profession: document.getElementById("experience").value,
      date: Date.now().toString()
  })
  .then(function(docRef) {
      console.log("Document written with ID: ", docRef.id);
  })
  .catch(function(error) {
      console.error("Error adding document: ", error);
  });
  }