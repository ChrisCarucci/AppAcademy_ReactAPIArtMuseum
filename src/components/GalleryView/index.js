import { useParams, Route, useRouteMatch, Switch } from "react-router-dom";
import ArtImageTile from "../ArtImageTile.js";
import ArtDescription from "../ArtDescription";

function GalleryView({ galleries }) {
  const { galleryId } = useParams();

  const gallery = galleries.find(gallery => gallery.galleryid === parseInt(galleryId));

  const { url } = useRouteMatch();

  return (
    <div className="page-wrapper">
      <h1>Gallery View</h1>
      <h2>{`${gallery.name}`}</h2>
      <Switch>
        <Route exact path={`${url}`}>
          {gallery.objects.map(artwork => {
            return (
              <ArtImageTile key={artwork.id} art={artwork} galleryId={galleryId}/>
            )
          })
          }
        </Route>
        <Route exact path={`${url}/art/:artId`}>
          <ArtDescription gallery={gallery}/>
        </Route>
      </Switch>
    </div>
  )
}

export default GalleryView;