import Video from './Videos';

function AllVideos(){
  const viewPortWidth = window.innerWidth;
  const numVideosToShow = viewPortWidth > 672 ? 12 : 6 ;
  const videos = Array.from({length: numVideosToShow},(_,index)=>(
    <Video key={index} />
  ))
  return(
    <div class="videos mx-auto mt-4 p-8 sm:grid grid-cols-3 grid-rows-3">
          {videos}
          
          
        </div>
    )
}

export default AllVideos;