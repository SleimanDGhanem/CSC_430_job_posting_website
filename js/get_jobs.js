window.onload = () => {
  axios
    .get("http://localhost/Instagram_like_website/Backend/get_posts.php")
    .then((res) => {
      const pics = res.data;
      console.log(pics);
      const mainContainer = document.getElementById("feed");
      
      let box = "hello";
      for (let i = 0; i < pics.length; i++) {
    }
    console.log("hello")
    console.log(box);
    mainContainer.innerHTML = "";
    console.log(res)
    })
    .catch((err) => console.log(err));
};