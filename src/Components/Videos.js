import Banner from '../assets/3.jpg'
function Video(){
  return(
    <>
     <div class="video bg-white p-4 rounded max-w-xs shadow mb-4 sm:mr-4">
      <img src={Banner} alt="" class="rounded" />
      <p class="text-center mt-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam officia quia, qui, officiis molestias eius culpa unde quasi beatae sapiente.</p>
      <div class="qmeta flex mt-2 text-bold">
       <p class="mr-4">10 Questions</p>
       <p>Score : Not taken Yet</p>
      </div>
     </div>
     </>
    
    );
}

export default Video;