import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState, useEffect, useRef } from 'react';
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
  const scrollToButtonRef = useRef();

  useEffect(() => {
    if (searchImage) {
      setIsLoading(true);

      imagesApi(searchImage, currentPage).then(images => {
        if (images.length < 1) {
          toast.error(`Image ${searchImage} not found`);
          return;
        }
        setArrImages(state => [...state, ...images]);
        setIsLoading(state => !state);
      });
    }
  }, [currentPage, searchImage]);

  // useEffect(() => {
  //   return async function fetchImages() {
  //     setIsLoading(true);
  //     try {
  //       const images = await imagesApi(searchImage, currentPage);
  //       if (images.length < 1) {
  //         toast.error(`Image ${searchImage} not found`);
  //         return;
  //       }
  //       setArrImages(state => [...state, ...images]);
  //       setIsLoading(false);
  //     } catch (e) {
  //       console.error(e);
  //     }
  //   };
  // }, [currentPage, searchImage]);

  const handleFormSubmit = searchQuery => {
    setArrImages([]);
    setSearchImage(searchQuery);
    setCurrentPage(1);
  };

  const loadMoreButton = () => {
    setCurrentPage(state => state + 1);
  };

  const toogleModal = () => {
    setShowModal(state => !state);
  };

  const onClickOpenModal = e => {
    if (e.target.nodeName !== 'IMG') {
      return;
    }
    e.preventDefault();

    setLargeImageUrl(e.target.dataset.img);
    setShowModal(true);
    setImageAlt(e.target.alt);
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
      {arrImages.length > 0 && (
        <Button ref={scrollToButtonRef} onClick={loadMoreButton} />
      )}

      {showModal && (
        <Modal onClose={toogleModal}>
          <img src={largeImageUrl} alt={imageAlt} />
        </Modal>
      )}
    </div>
  );
}
