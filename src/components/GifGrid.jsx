import { GifItem } from './GifItem';
import { useFetchGifs } from '../useFetchGifs';

export const GifGrid = ({ category, onDelete }) => {
  const { images, isLoading } = useFetchGifs(category);

  return (
    <>
      <div className='header'>
        <h1>{category} </h1>
        <div>
          <button className='btn-delete' onClick={() => { onDelete(category); }}>Delete</button>
        </div>
      </div>
      {
        isLoading && (<h2 className='loading'>Loading....</h2>)
      }
      <div className='card-grid'>
        {
          images.map((imagen) => (
            <GifItem
              key={imagen.id}
              {...imagen}
            />
          ))
        }
      </div>
    </>
  );
};
