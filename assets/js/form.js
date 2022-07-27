const $form = document.querySelector('#form')
$form.addEventListener('submit', handleSubmit)

async function handleSubmit(event){
    console.log(event)
    event.preventDefault()
    const form = new FormData(this)
    console.log(form)
    const response = await fetch(this.action, {
        method: this.method,
        body: form,
        headers:{
            'Accept': 'application/json'
        }
    })
    console.log(response)
    if (response.ok){
        this.reset()
        Swal.fire({
            icon: 'success',
            title: "Thanks for the contact! I will write you back soon."
        });
    }else{
        Swal.fire({
            icon: 'error',
            title: 'Oops!',
            text: 'Something went wrong while sending the message (may have misspelled your email address?). If the error persist you can contact me via LinkedIn'
        });
    }
}