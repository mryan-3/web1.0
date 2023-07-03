const handleFormSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const formDataArr = [...formData.entries()];
    const reqData = { id: "f6e29af0-337e-44b3-a99b-b62af78419a4", data: {} };
  
    for (let i = 0; i < formDataArr.length; i++) {
      const field = formDataArr[i];
      reqData.data[field[0]] = field[1];
    }
  
    console.log(reqData);
    console.log(JSON.stringify(reqData));
  
    // Configure EmailJS with your account information
    emailjs.init('SZZnmKZ7sOR39PUo5');
  
    // Prepare the email parameters
    const params = {
      from_name: reqData.data.FirstName,
      from_email: reqData.data.Email,
      message: reqData.data.Message
    };
  
    // Send the email using EmailJS
    emailjs.send('service_744u15x', 'template_6mwhnqn', params)
      .then(function (response) {
        console.log(JSON.stringify(response));
        var snackbar = document.getElementById("snackbar");
        snackbar.className = "show";
        setTimeout(function () { snackbar.className = snackbar.className.replace("show", ""); }, 5000);
      }, function (error) {
        console.error('Email sending failed:', error);
      });
  
    return false;
  };
  