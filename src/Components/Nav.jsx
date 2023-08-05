function Nav(){
  
   const isSignUpPage = true;
  
  return(
    <>
    <div class="nav-bar px-4 mt-4">
    <div class="nav-content flex justify-between rounded bg-white py-2 mx-auto px-4 rounded max-w-[55rem]">
     <a href="#" class="brand text-xl no-underline text-black">React {'>'}</a>
     <span class="material-symbols-outlined ml-[10rem] sm:ml-[40rem]">
      account_circle
     </span>
    <div class="sign-up">
     
     <a href="signup.html" class="text-black inline-block">{isSignUpPage ? 'Login' : 'Sign Up'}</a>
    </div>
    </div>
    </div>
    
    </>
    )
}


export default Nav;