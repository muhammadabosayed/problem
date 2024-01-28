const firebaseConfig = {
  apiKey: "AIzaSyBXqwtqGKf1Dj4JgSirzY9HVuSGGvn9TSk",
  authDomain: "crud-6a263.firebaseapp.com",
  projectId: "crud-6a263",
  storageBucket: "crud-6a263.appspot.com",
  messagingSenderId: "568172271958",
  appId: "1:568172271958:web:cac94b94abdbe598e55ef7",
};

firebase.initializeApp(firebaseConfig);
// Get a reference to tde Firestore service
const db = firebase.firestore();
let message = document.querySelector("#message");
let contact = document.querySelector("#contact");
let save = document.querySelector(".save");

save.addEventListener("click", (e) => {
  e.preventDefault();
  if(message.value != ""){
    db.collection("messages")
    .add({
      contact: contact.value,
      message: message.value,
    })
    .then((docRef) => {
      console.log("Document written with ID: ", docRef.id);
      alert("شكرا لك تم إرسال الرسالة بنجاح وسوف يتم التواصل معك فى اقرب وقت ممكن ")
    })
    .then(() => {
      contact.value = "";
      message.value = "";
      
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
  }else{
    alert("من فضلك أخبرنى بمشكلتك قبل الارسال")
  }
  
});
