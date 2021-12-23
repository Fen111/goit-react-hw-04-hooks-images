import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState, useEffect } from 'react';
import imagesApi from 'api/imagesApi';
import s from './App.module.css';

import Searchbar from 'components/Searchbar';
import ImageGallery from 'components/ImageGallery';
import Button from 'components/Button';
import Modal from 'components/Modal';
import LoaderContainer from 'components/LoaderContainer';

export default function App() {
  const [arrImages, setArrImages] = useState([]);
  const [searchImage, setSearchImage] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [largeImageUrl, setLargeImageUrl] = useState('');
  const [imageAlt, setImageAlt] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // const componentDidUpdate = (prevProps, prevState) => {
  //   if (prevState.searchImage !== searchImage) this.fetchImages();
  // };

  useEffect(() => {
    if (!searchImage) {
      fetchImages();
    }
  }, [fetchImages(), searchImage]);

  const fetchImages = async () => {
    setIsLoading(true);
    try {
      const images = await imagesApi(searchImage, currentPage);
      if (images.length < 1) {
        toast.error(`Image ${searchImage} not found`);
        return;
      }
      setArrImages([...arrImages, ...images]);
      setCurrentPage(currentPage + 1);
      setIsLoading(!isLoading);
      // this.setState(({ arrImages, currentPage, isLoading }) => ({
      //   arrImages: [...arrImages, ...images],
      //   currentPage: currentPage + 1,
      //   isLoading: !isLoading,
      // }));
    } catch (e) {
      console.error(e);
    }
  };

  const handleFormSubmit = searchImage => {
    setSearchImage(null);
    setArrImages([]);
  };

  const toogleModal = () => {
    setShowModal(!showModal);
  };

  const onClickOpenModal = e => {
    if (e.target.nodeName !== 'IMG') {
      return;
    }
    e.preventDefault();

    setLargeImageUrl(e.target.dataset.img);
    setShowModal(true);
    setImageAlt(e.target.alt);
    // this.setState({
    //   largeImageURL: e.target.dataset.img,
    //   showModal: true,
    //   imageAlt: e.target.alt,
    // });
  };

  return (
    <div className={s.App}>
      <Searchbar onSubmit={handleFormSubmit} />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      <ImageGallery images={arrImages} onClick={onClickOpenModal} />
      {isLoading && <LoaderContainer />}
      {arrImages.length > 0 && <Button onClick={fetchImages} />}

      {showModal && (
        <Modal onClose={toogleModal}>
          <img src={largeImageUrl} alt={imageAlt} />
        </Modal>
      )}
    </div>
  );
}

// export default class App extends Component {
//   state = {
//     arrImages: [],
//     searchImage: null,
//     currentPage: 1,
//     showModal: false,
//     largeImageURL: '',
//     imageAlt: '',
//     isLoading: false,
//   };

//   componentDidUpdate(prevProps, prevState) {
//     const { searchImage } = this.state;

//     if (prevState.searchImage !== searchImage) this.fetchImages();
//   }

//   fetchImages = async () => {
//     const { searchImage, currentPage } = this.state;
//     this.setState({ isLoading: true });

//     try {
//       const images = await imagesApi(searchImage, currentPage);
//       if (images.length < 1) {
//         toast.error(`Image ${searchImage} not found`);
//         return;
//       }
//       this.setState(({ arrImages, currentPage, isLoading }) => ({
//         arrImages: [...arrImages, ...images],
//         currentPage: currentPage + 1,
//         isLoading: !isLoading,
//       }));
//     } catch (e) {
//       console.error(e);
//     }
//   };

//   handleFormSubmit = searchImage => {
//     this.setState({
//       arrImages: [],
//       searchImage,
//     });
//   };

//   toogleModal = () => {
//     this.setState(({ showModal }) => ({
//       showModal: !showModal,
//     }));
//   };

//   onClickOpenModal = e => {
//     if (e.target.nodeName !== 'IMG') {
//       return;
//     }
//     e.preventDefault();

//     this.setState({
//       largeImageURL: e.target.dataset.img,
//       showModal: true,
//       imageAlt: e.target.alt,
//     });
//   };

//   render() {
//     const { arrImages, showModal, largeImageURL, tags, isLoading } = this.state;
//     return (
//       <div className={s.App}>
//         <Searchbar onSubmit={this.handleFormSubmit} />
//         <ToastContainer
//           position="top-right"
//           autoClose={5000}
//           hideProgressBar={false}
//           newestOnTop={false}
//           closeOnClick
//           rtl={false}
//           pauseOnFocusLoss
//           draggable
//           pauseOnHover
//         />

//         <ImageGallery images={arrImages} onClick={this.onClickOpenModal} />
//         {isLoading && <LoaderContainer />}
//         {arrImages.length > 0 && <Button onClick={this.fetchImages} />}

//         {showModal && (
//           <Modal onClose={this.toogleModal}>
//             <img src={largeImageURL} alt={tags} />
//           </Modal>
//         )}
//       </div>
//     );
//   }
// }
