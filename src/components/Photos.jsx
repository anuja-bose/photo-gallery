import { useContext } from "react"
import PhotoGalleryContext from "../context/PhotoGalleryContext";
import ShadowLoading from "./ShadowLoading";
import SinglePhoto from "./SinglePhoto";

const Photos = () => {
  const { response, isLoading, searchKeyword } = useContext(PhotoGalleryContext);

  return (
    <>
      {searchKeyword ? <h4>Results for {searchKeyword || ''}</h4> : <></>}
      <div>
           
        {response.length === 0 ? <div>No records found</div> : <></>}
        {isLoading ? <ShadowLoading item={10} /> : response.map((data, key) => <SinglePhoto key={key} data={data} />)}
        </div>
    </>
  )
}

export default Photos