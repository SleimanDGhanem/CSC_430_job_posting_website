window.onload = () => {
  const form = document.getElementById("form");
  form.addEventListener("submit",  async function (e) {
    e.preventDefault();
    
    const formData = new FormData(form);
    console.log(...formData);
    if (formData.get("password") == formData.get("confirm_password")) {
      try {
        const res = await axios.post(
          "http://localhost:8000/api/register",
          formData
        );
        console.log(res);
        window.location.href = "login.html"
      } catch (error) {
        console.log(error.response.data);
      }
    }
  });
};