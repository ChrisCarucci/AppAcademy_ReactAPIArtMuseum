import { Link, useParams } from 'react-router-dom';

function ArtDescription({ gallery }) {
  const { artId } = useParams();

  const artChoice = gallery.objects.find(art => art.id === parseInt(artId));
  console.log(artChoice);
  return (
    <div className='page-wrapper'>
      <Link to={`/galleries/${gallery.galleryid}`}>
        {`Back to Gallery ${gallery.name}`}
      </Link>
      <Link to={{ pathname: `${artChoice.url}` }} target='_blank'>
        <h2>{`${artChoice.title}`}</h2>
      </Link>
      <p>{`${artChoice.creditline}`}</p>
      <p>{`${artChoice.classification}`}</p>
      <p>{`${artChoice.department}`}</p>
      {artChoice.images.map(image => {
        return (
          <img key={image.imageid} src={`${image.baseimageurl}`} alt={`${artChoice.title}`}/>
        )
      })
      }
    </div>
  )
}

export default ArtDescription;