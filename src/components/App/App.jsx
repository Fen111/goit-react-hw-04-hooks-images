import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import imagesApi from 'api/imagesApi';
import s from './App.module.css';

import Searchbar from 'components/Searchbar';
import ImageGallery from 'components/ImageGallery';
import Button from 'components/Button';
import Modal from 'components/Modal';
import LoaderContainer from 'components/LoaderContainer';

export default function App() {
  const [arrImages, setArrImages] = useState([]);
  const [searchImage, setSearchImage] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [largeImageUrl, setLargeImageUrl] = useState('');
  const [imageAlt, setImageAlt] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!searchImage) return;
    async function fetchImages() {
      setIsLoading(true);
      try {
        const images = await imagesApi(searchImage, currentPage);
        if (images.length < 1) {
          toast.error(`Image ${searchImage} not found`);
          return;
        }
        setArrImages(state => [...state, ...images]);
      } catch (e) {
        console.error(e);
      } finally {
        setIsLoading(false);
      }
    }
    fetchImages();
  }, [currentPage, searchImage]);

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
      {arrImages.length > 0 && <Button onClick={loadMoreButton} />}

      {showModal && (
        <Modal onClose={toogleModal}>
          <img src={largeImageUrl} alt={imageAlt} />
        </Modal>
      )}
    </div>
  );
}
