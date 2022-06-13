/* document.getElementById('btn').addEventListener('click', () => {
  location.replace("http://www.w3schools.com");

}) */

/* fetch("http://localhost:5000/register", {
    credentials: "same-origin",
    mode: "same-origin",
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: dataToSend
})
    .then(res => {
        if (res.status === 200) {
            return res.json()
        } else {
            console.log("Status: " + resp.status)
            return Promise.reject("server")
        }
    })
    .then(dataJson => )
    .catch(err => {
        if (err === "server") return
        console.log(err)
    })

fetch('http://localhost:5000/register',)
    .then(response => response.json())
    .then(data => console.log(data))
 */
function checkbox(data){
    if(data == 'on'){
      return true;
    }
    return false;
  };


function get_info(){
    telephone = document.getElementById('telephone').value;
    telephone = checkbox(telephone);
    add_no = document.getElementById('add_no').value;
    add_no = checkbox(add_no);
    iptv = document.getElementById('iptv').value;
    iptv =  checkbox(iptv);
    var jsfile={
        'name' : document.getElementById("name").value,
        'birthday' : document.getElementById('birthday').value,
        'address' : document.getElementById('address').value,
        'id_no' : document.getElementById('id').value,
        'status' : document.getElementById('status').value,
        'wife_id' : document.getElementById('wife_id').value,
        'ID_photo' : document.getElementById('ID_photo').value,
        'email' : document.getElementById('email').value,
        'construction_type' : document.getElementById('construction_type').value,
        'net' : document.getElementById('net').value,
        'telephone': telephone,
        'add_no':add_no,
        'iptv':iptv,
        'phone_no' : document.getElementById('phone_no').value,
        'updated' : document.getElementById('updated').value,
    }
    var json_str = JSON.stringify(jsfile);
    var json = JSON.parse(json_str);
    return json;
};

function func(){
    console.log('HELLO');
};

// document.getElementById ("btn").addEventListener ("click", get_info);
const button = document.getElementById('btn');

button.addEventListener('click', async _ => {
  try {     
    const response = await fetch('http://localhost:5000', {
      method: 'post',
      body: get_info()
    });
    console.log('Completed!', response);
  } catch(err) {
    console.error(`Error: ${err}`);
    /* var xmlhttp = new XMLHttpRequest();   // new HttpRequest instance
    xmlhttp.open("POST", "http://localhost:5000/");
    xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xmlhttp.send(get_info); */

    }
  })