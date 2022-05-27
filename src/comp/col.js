import React, { useRef, useState } from "react";
import Gallery from "react-photo-gallery";
import Measure from "react-measure";
import Lightbox from "react-images";
// import photos from "../data/photos";
// to best see the results, click the popout button in the preview browser
// and resize your browser

const photos = [
  {
    src: "https://drive.google.com/uc?id=1hXN7gL3RvXei2qlmWTfF3iv2bt52Ggj5",
    width: 3,
    height: 3,
  },
  {
    src: "https://drive.google.com/uc?id=1SZ4-WYOnRf2PzTsE9NOcfk51Z2YfxoUs",
    width: 16,
    height: 9,
  },

  {
    src: "https://drive.google.com/uc?id=162YNf8HOpRR8MtL63YQvsgPlh28m9Xat",
    width: 4,
    height: 3,
  },
  {
    src: "https://drive.google.com/uc?id=1Q4WaT8y9UAUcwr4GTsmI8bLy2-r1v7hp",
    width: 1,
    height: 1,
  },
  {
    src: "https://drive.google.com/uc?id=1dJeM5DqH24z9QMYhWt1zIe5YetTQJOWv",
    width: 4,
    height: 3,
  },
  {
    src: "https://drive.google.com/uc?id=1hRfbm-xO6zj9sTmJWtWoa3J_OSOM8tRr",
    width: 3,
    height: 4,
  },
  {
    src: "https://drive.google.com/uc?id=18gJCVhuki_djnlVvTPNwyv0SJXjqvzeG",
    width: 1,
    height: 1,
  },
  {
    src: "https://drive.google.com/uc?id=1PVjqgpdq0BsKs8o4qurtHJVcpxDvcyoT",
    width: 1,
    height: 1,
  },
  {
    src: "https://drive.google.com/uc?id=1J9yAMpg2O1NeQuFspxg8nIn2715mlIYZ",
    width: 4,
    height: 3,
  },
  {
    src: "https://drive.google.com/uc?id=1qHmE2v0fVaYk0qZUNDEPSt9WkIjVId7T",
    width: 1,
    height: 1,
  },
  {
    src: "https://drive.google.com/uc?id=1y1qMhqzvdMjKN0qNxRAnK8emALEBCH92",
    width: 1,
    height: 1,
  },
  {
    src: "https://drive.google.com/uc?id=1HB7RGlhUGC3LOHEJAOCHsb4Xp7cNVeuR",
    width: 16,
    height: 9,
  },
  {
    src: "https://drive.google.com/uc?id=1m6iVvgOJKdiTcbAEVh9_P5hRT86nd2_O",
    width: 4,
    height: 3,
  },
  {
    src: "https://drive.google.com/uc?id=1uWyjQA-icb8Jy0rnUDkIL24xpaOB8JPO",
    width: 1,
    height: 1,
  },
  {
    src: "https://drive.google.com/uc?id=1iwdvJBV0dYG9Cm0ZFZUhTdGixy5UP32z",
    width: 1,
    height: 1,
  },
  {
    src: "https://drive.google.com/uc?id=1ULg9ledNikl5IhsDVhxtq0egjJJwoKJU",
    width: 1,
    height: 1,
  },
  {
    src: "https://drive.google.com/uc?id=1Ud013UQKWKzDdptwItuGZBfFgUTlFt6I",
    width: 1,
    height: 1,
  },
  {
    src: "https://drive.google.com/uc?id=1V0_fYnBWujbckAJqdjAuVgaNrhlxst9S",
    width: 1,
    height: 1,
  },
  {
    src: "https://drive.google.com/uc?id=1-Mu01CueTMQfZXVPCjjFddVDZBLzZDAU",
    width: 1,
    height: 1,
  },
  {
    src: "https://drive.google.com/uc?id=1GdODj24q-U_a6h2ce7XNQJpPx1F_iCXr",
    width: 1,
    height: 1,
  },
  {
    src: "https://drive.google.com/uc?id=1GFB9FqGEnLmTF0L81ZFMTYXJy9UWcuYP",
    width: 1,
    height: 1,
  },
  {
    src: "https://drive.google.com/uc?id=1Ap_GR8NZk_WfjzXblUMjiSNU0IUi4Fqn",
    width: 1,
    height: 1,
  },
  {
    src: "https://drive.google.com/uc?id=1bqFvVJeObMnsnk86BOHd6bfXyo2FIcru",
    width: 1,
    height: 1,
  },
  {
    src: "https://drive.google.com/uc?id=1gFBG4Dey9aoN3BnjnOrkO0ghhs1ayxnZ",
    width: 1,
    height: 1,
  },
  {
    src: "https://drive.google.com/uc?id=1IZkYIHMLHHY9kaWnK77hZpDHrZdTeTAT",
    width: 1,
    height: 1,
  },
  {
    src: "https://drive.google.com/uc?id=12zXTIQKXGWEF-2YkXQJ66o3-X7EXx_8m",
    width: 1,
    height: 1,
  },
  {
    src: "https://drive.google.com/uc?id=1wUWVUaGA2mZbhwqHOduvZje4fZSg90X-",
    width: 1,
    height: 1,
  },
  {
    src: "https://drive.google.com/uc?id=1a0L-jgpK4rfvUSkyF-Wi5jTGKDbQjP66",
    width: 1,
    height: 1,
  },
  {
    src: "https://drive.google.com/uc?id=1hT_2ROh-5KrHot5TK7oJTbr_WlNxfE61",
    width: 1,
    height: 1,
  },
  {
    src: "https://drive.google.com/uc?id=1sQZqut9rKDrlJv1_hUctbBJGRYADNVB_",
    width: 1,
    height: 1,
  },
  {
    src: "https://drive.google.com/uc?id=1XJBhv3sASrSlkmD-A_uZi77q5LETA7bc",
    width: 1,
    height: 1,
  },
  {
    src: "https://drive.google.com/uc?id=1OKIJ_h2shFRfRVYJM6M-nOAt0nBY9zJQ",
    width: 1,
    height: 1,
  },
  {
    src: "https://drive.google.com/uc?id=13ijsf9hKP1Uj_9BaI0W_Azrjn56_k0Jf",
    width: 1,
    height: 1,
  },
  {
    src: "https://drive.google.com/uc?id=1WcMPAwp2GnjU-69AcdjAsp0tPSyN_Rtk",
    width: 1,
    height: 1,
  },
  {
    src: "https://drive.google.com/uc?id=18w-ZzmP1VCwl20U0yno60yusv2LBzmr4",
    width: 1,
    height: 1,
  },
  {
    src: "https://drive.google.com/uc?id=1NPQmPZyZwfaar9Nuqs09r71wU8-Azs0-",
    width: 1,
    height: 1,
  },
  {
    src: "https://drive.google.com/uc?id=1cb3py4u3IuYzJ-hluwpJrFmAKDeaEPKc",
    width: 1,
    height: 1,
  },
  {
    src: "https://drive.google.com/uc?id=1w-B8gTi7IlHhjpPeu-iD4zVG9VX6T1tl",
    width: 1,
    height: 1,
  },
  {
    src: "https://drive.google.com/uc?id=1h5aborMMBpgBXm9MYBtpf6Vhcel5TCz0",
    width: 1,
    height: 1,
  },
  {
    src: "https://drive.google.com/uc?id=12meIivE12qBXpA1MrShZTqYp2_1I0dID",
    width: 1,
    height: 1,
  },
  {
    src: "https://drive.google.com/uc?id=1HsNJ7EMu6iMvxxN5jMauQM0JQFZ8Clad",
    width: 1,
    height: 1,
  },
  {
    src: "https://drive.google.com/uc?id=1VbL9aJH20S-qaDhleReEhFSgI1FUqpFB",
    width: 1,
    height: 1,
  },
  {
    src: "https://drive.google.com/uc?id=1i5euVCyMJCrnlhQ0ffgLcwWsOyKB3eT6",
    width: 1,
    height: 1,
  },
  {
    src: "https://drive.google.com/uc?id=1wVcyRJE_DWPGh8WCCr3wplsNl7Gq3FXD",
    width: 1,
    height: 1,
  },
  {
    src: "https://drive.google.com/uc?id=12omAQu9bX_Im9o-PLE72piFTFhYncy-Z",
    width: 1,
    height: 1,
  },
  {
    src: "https://drive.google.com/uc?id=16K7NJnSwIuP4kRbCUElnROUBFRvJYj48",
    width: 1,
    height: 1,
  },
  {
    src: "https://drive.google.com/uc?id=12eXGhdFF_fgzZ-GS6KwrPIgFPH2NlxC2",
    width: 1,
    height: 1,
  },
  {
    src: "https://drive.google.com/uc?id=1r43OjGYImJERpBLHx9iYKu5kxos7Vp8c",
    width: 1,
    height: 1,
  },
  {
    src: "https://drive.google.com/uc?id=1zm1rb9BsFXrYTpHPXXMgUHQQOrnve-Fs",
    width: 1,
    height: 1,
  },
  {
    src: "https://drive.google.com/uc?id=16JnH_z8jj63BFpRpmHVDE9XQ9Q60ap6q",
    width: 1,
    height: 1,
  },
  {
    src: "https://drive.google.com/uc?id=1zLbHUAS-iM5jANjcChvnbuoVTyCZ4e82",
    width: 1,
    height: 1,
  },
  {
    src: "https://drive.google.com/uc?id=14nyBki9oNrdek8WZuymitBFIMcoXQypY",
    width: 1,
    height: 1,
  },
  {
    src: "https://drive.google.com/uc?id=1Var5kh9W1-Yso775FGWh6pXf3Cw2afVV",
    width: 1,
    height: 1,
  },
  {
    src: "https://drive.google.com/uc?id=1EhD0n5Jpq_AM7SK1jNRqgPBgXW_acVhp",
    width: 1,
    height: 1,
  },
  {
    src: "https://drive.google.com/uc?id=1bxcAK5N6JK9TvljjW70h3QotH-1-LT9e",
    width: 1,
    height: 1,
  },
  {
    src: "https://drive.google.com/uc?id=15iL_CSXNva4BcT-AyA-WJLxJUmTv39g9",
    width: 1,
    height: 1,
  },
];

const DynamicGallery = () => {
  const [width, setWidth] = useState(-1);
  const [currentImage, setCurrentImage] = useState(0);
  const [lightBoxOpen, setLightBoxOpen] = useState(false);
  const measureRef = useRef(null);

  const openLightbox = (obj) => {
    setCurrentImage(obj.index);
    setLightBoxOpen(true);
  };
  const closeLightbox = () => {
    setCurrentImage(0);
    setLightBoxOpen(false);
  };

  const gotoPrevious = () => {
    setCurrentImage(currentImage - 1);
  };

  const gotoNext = () => {
    setCurrentImage((prevState) => ({
      ...prevState,
      currentImage: currentImage + 1,
    }));
  };
  // openLightbox(event, obj) {
  //   this.setState({
  //     currentImage: obj.index,
  //     lightboxIsOpen: true,
  //   });
  // }
  // closeLightbox() {
  //   this.setState({
  //     currentImage: 0,
  //     lightboxIsOpen: false,
  //   });
  // }
  // gotoPrevious() {
  //   this.setState({
  //     currentImage: this.state.currentImage - 1,
  //   });
  // }
  // gotoNext() {
  //   this.setState({
  //     currentImage: this.state.currentImage + 1,
  //   });
  // }
  // render() {
  // const width = this.state.width;
  return (
    <Measure
      bounds
      onResize={(contentRect) => setWidth(contentRect.bounds.width)}
    >
      {({ measureRef }) => {
        if (width < 1) {
          return <div ref={measureRef} />;
        }
        let columns = 1;
        if (width >= 480) {
          columns = 2;
        }
        if (width >= 1024) {
          columns = 3;
        }
        if (width >= 1824) {
          columns = 4;
        }
        return (
          <div ref={measureRef} style={{ overflow: "scroll" }}>
            <Gallery photos={photos} columns={columns} onClick={openLightbox} />
            <Lightbox
              images={photos}
              onClose={closeLightbox}
              onClickPrev={gotoPrevious}
              onClickNext={gotoNext}
              currentImage={currentImage}
              isOpen={lightBoxOpen}
            />
          </div>
        );
      }}
    </Measure>
  );
};

export default DynamicGallery;
