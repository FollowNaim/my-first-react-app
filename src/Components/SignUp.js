function SignUp(){
  return(
    <>
      <div class="sign-up flex justify-center items-center mt-[20%] bg-white w-[90%] mx-auto p-4 rounded max-w-[30rem]">
   <form action="">
   <h2 class="text-center text-xl border-b-2 border-spacing-y-2 mb-4">Sign Up</h2>
   <label class="" for="Name">Name</label>
   <input class="block border-2 border-solid border-slate-500 px-2 py-1 rounded mt-2 mb-2" type="text" placeholder="Name" required />
   
   <label for="Email">Email</label>
   <input class="block border-2 border-solid border-slate-500 px-2 py-1 rounded mt-2 mb-2" type="text" placeholder="Email" required />
   
   <label for="Password">Password</label>
   <input class="block border-2 border-solid border-slate-500 px-2 py-1 rounded mt-2 mb-3" type="password" placeholder="Password" required />
   
   <label for="cPassword">Confirm Password</label>
   <input class="block border-2 border-solid border-slate-500 px-2 py-1 rounded mt-2 mb-2" type="password" placeholder="Password" required />
   
   <input class="ml-3 mr-2" type="checkbox" id="agree" name="agree" required />
   <label for="agree">I agree to the terms and conditions</label>
   
   <input class="bg-black rounded text-white text-xl px-8 py-1.5 mx-auto text-center block mt-4" type="Submit" value="Submit" />
   </form>
  </div>
    </>
    )
}

export default SignUp;