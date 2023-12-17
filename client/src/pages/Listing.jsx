// import { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { FaBath, FaBed, FaChair, FaMapMarkerAlt, FaParking, FaShare } from 'react-icons/fa';
// import Contact from '../components/Contact';

// export default function Listing() {
//   const [listing, setListing] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(false);
//   const [copied, setCopied] = useState(false);
//   const [contact, setContact] = useState(false);
//   const params = useParams();

//   useEffect(() => {
//     const fetchListing = async () => {
//       try {
//         setLoading(true);
//         const res = await fetch(`/api/listing/get/${params.listingId}`);
//         const data = await res.json();
//         if (data.success === false) {
//           setError(true);
//           setLoading(false);
//           return;
//         }
//         setListing(data);
//         setLoading(false);
//         setError(false);
//       } catch (error) {
//         setError(true);
//         setLoading(false);
//       }
//     };
//     fetchListing();
//   }, [params.listingId]);

//   return (
//     <main>
//       {loading && <p className='text-center my-7 text-2xl'>Loading...</p>}
//       {error && <p className='text-center my-7 text-2xl'>Something went wrong!</p>}
//       {listing && !loading && !error && (
//         <div>
//           <div className='relative'>
//             <div className='swiper-container'>
//               <div className='swiper-wrapper'>
//                 {listing.imageUrls.map((url, index) => (
//                   <div key={index} className='swiper-slide'>
//                     <img src={url} alt={`slide-${index + 1}`} className='w-full h-auto' />
//                   </div>
//                 ))}
//               </div>
//               <div className='swiper-pagination'></div>
//             </div>
//           </div>

//           <div className='max-w-4xl mx-auto p-3 my-7'>
//             <p className='text-3xl font-semibold'>
//               {listing.name} - ₹
//               {listing.offer
//                 ? listing.discountPrice.toLocaleString('en-US')
//                 : listing.regularPrice.toLocaleString('en-US')}
//               {listing.type === 'rent' && ' / month'}
//             </p>
//             <p className='flex items-center mt-4 text-gray-600 text-sm'>
//               <FaMapMarkerAlt className='text-green-700' />
//               {listing.address}
//             </p>
//             <div className='flex gap-4 mt-2'>
//               <p className='bg-red-500 text-white text-center p-2 rounded-md'>
//                 {listing.type === 'rent' ? 'For Rent' : 'For Sale'}
//               </p>
//               {listing.offer && (
//                 <p className='bg-green-500 text-white text-center p-2 rounded-md'>
//                   Save ₹{+listing.regularPrice - +listing.discountPrice}
//                 </p>
//               )}
//             </div>
//             <p className='mt-4 text-gray-800'>
//               <span className='font-semibold'>Description - </span>
//               {listing.description}
//             </p>
//             <ul className='mt-4 text-green-600 font-semibold text-sm flex flex-wrap items-center gap-4 sm:gap-6'>
//               <li className='flex items-center gap-1'>
//                 <FaBed className='text-lg' />
//                 {listing.bedrooms} {listing.bedrooms > 1 ? 'beds' : 'bed'}
//               </li>
//               <li className='flex items-center gap-1'>
//                 <FaBath className='text-lg' />
//                 {listing.bathrooms} {listing.bathrooms > 1 ? 'baths' : 'bath'}
//               </li>
//               <li className='flex items-center gap-1'>
//                 <FaParking className='text-lg' />
//                 {listing.parking ? 'Parking spot' : 'No Parking'}
//               </li>
//               <li className='flex items-center gap-1'>
//                 <FaChair className='text-lg' />
//                 {listing.furnished ? 'Furnished' : 'Unfurnished'}
//               </li>
//             </ul>
//             {!contact && (
//               <button
//                 onClick={() => setContact(true)}
//                 className='bg-slate-700 text-white rounded-lg mt-6 py-3 px-6 hover:opacity-95'
//               >
//                 Contact landlord
//               </button>
//             )}
//             {contact && <Contact listing={listing} />}
//           </div>
//         </div>
//       )}
//     </main>
//   );
// }
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FaBath, FaBed, FaChair, FaMapMarkerAlt, FaParking, FaShare } from 'react-icons/fa';
import Contact from '../components/Contact';
import { Carousel } from 'react-bootstrap';
export default function Listing() {
  const [listing, setListing] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [copied, setCopied] = useState(false);
  const [contact, setContact] = useState(false);
  const params = useParams();
  useEffect(() => {
    const fetchListing = async () => {
      try {
        setLoading(true);
        const res = await fetch(`/api/listing/get/${params.listingId}`);
        const data = await res.json();
        if (data.success === false) {
          setError(true);
          setLoading(false);
          return;
        }
        setListing(data);
        setLoading(false);
        setError(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchListing();
  }, [params.listingId]);
  return (
    <main>
      {loading && <p className='text-center my-7 text-2xl'>Loading...</p>}
      {error && <p className='text-center my-7 text-2xl'>Something went wrong!</p>}
      {listing && !loading && !error && (
        <div>
          <Carousel>
            {listing.imageUrls.map((url, index) => (
              <Carousel.Item key={index}>
                <img className='d-block w-100 mx-auto' src={url} alt={`slide-${index + 1}`}  
                style={{ maxWidth: '720px', maxHeight: '720px', objectFit: 'cover', imageRendering: 'pixelated' }}/>
              </Carousel.Item>
            ))}
          </Carousel>

          <div className='max-w-4xl mx-auto p-3 my-7'>
            <p className='text-3xl font-semibold'>
              {listing.name} - ₹
              {listing.offer
                ? listing.discountPrice.toLocaleString('en-US')
                : listing.regularPrice.toLocaleString('en-US')}
              {listing.type === 'rent' && ' / month'}
            </p>
            <p className='flex items-center mt-4 text-gray-600 text-sm'>
              <FaMapMarkerAlt className='text-green-700' />
              {listing.address}
            </p>
            <div className='flex gap-4 mt-2'>
              <p className='bg-red-500 text-white text-center p-2 rounded-md'>
                {listing.type === 'rent' ? 'For Rent' : 'For Sale'}
              </p>
              {listing.offer && (
                <p className='bg-green-500 text-white text-center p-2 rounded-md'>
                  Save ₹{+listing.regularPrice - +listing.discountPrice}
                </p>
              )}
            </div>
            <p className='mt-4 text-gray-800'>
              <span className='font-semibold'>Description - </span>
              {listing.description}
            </p>
            <ul className='mt-4 text-green-600 font-semibold text-sm flex flex-wrap items-center gap-4 sm:gap-6'>
              <li className='flex items-center gap-1'>
                <FaBed className='text-lg' />
                {listing.bedrooms} {listing.bedrooms > 1 ? 'beds' : 'bed'}
              </li>
              <li className='flex items-center gap-1'>
                <FaBath className='text-lg' />
                {listing.bathrooms} {listing.bathrooms > 1 ? 'baths' : 'bath'}
              </li>
              <li className='flex items-center gap-1'>
                <FaParking className='text-lg' />
                {listing.parking ? 'Parking spot' : 'No Parking'}
              </li>
              <li className='flex items-center gap-1'>
                <FaChair className='text-lg' />
                {listing.furnished ? 'Furnished' : 'Unfurnished'}
              </li>
            </ul>
            {!contact && (
              <button
                onClick={() => setContact(true)}
                className='bg-slate-700 text-white rounded-lg mt-6 py-3 px-6 hover:opacity-95'
              >
                Contact landlord
              </button>
            )}
            {contact && <Contact listing={listing} />}
          </div>
        </div>
      )}
    </main>
  );
}

