const form = document.forms["email-sender"];

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const fd = new FormData(form);
  const data = Object.fromEntries(fd);
  form.reset();
  try {
    const response = await fetch("/.netlify/functions/mail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) throw response;
    alert("message sent");
  } catch (err) {
    alert("Error");
    console.log(err);
  }
});
