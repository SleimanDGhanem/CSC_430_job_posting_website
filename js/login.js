// Get function
window.onload = () => {
  // retrieve form element
  const form = document.getElementById("form");

  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    // create form data class and add data
    const formData = new FormData(form);
    console.log(...formData);

    try {
      const res = await axios.post(
        "http://localhost:8000/api/login",
        formData
      );
      console.log(res);
      window.location.href = "register.html"
    } catch (e) {
      console.log(e);
    }
  });
};