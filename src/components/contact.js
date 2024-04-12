
function Contact(){

    const config ={
        email : 'anbuselvan2067@gmail.com',
        phone: '+91 9384568333'
    }

    return(
        <section id="contact" className='flex flex-col  bg-secondary py-32 px-5'>
            <div className=' flex flex-col items-center text-white'>
                <h1 className='text-4xl text-white border-primary mb-3 border-b-4 m-b-5 w-[140px] font-bold'>Contact</h1>
                <p className='pb-5'>If you want to discuss more in detail, please contact me</p>    
                <p className="py-2"><span className="font-bold">Email: </span>{config.email}</p>
                <p className="py-2"><span className="font-bold">Phone: </span>{config.phone}</p>
            </div>
        </section>

    )
}

export default Contact;