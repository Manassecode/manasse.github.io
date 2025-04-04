const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message')
const sendEmail = (e) =>{
  e.preventDefault()

  emailjs.sendForm('service_nkbutsp', 'template_7ztyov8', '#contact-form', 'sLFukQJmQ9ZtrVAKv')
        .then(() =>{
          contactMessage.textContent = 'Message Sent Successfully ✅'

          setTimeout(() =>{
               contactMessage.textContent = ''
          }, 5000)

          contactForm.reset();
        }, () => {
          contactMessage.textContent = 'Message not send (Service error) ❌'
        })
}
contactForm.addEventListener('submit', sendEmail)