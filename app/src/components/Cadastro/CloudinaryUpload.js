'use client'
import { CldUploadWidget } from "next-cloudinary";
import { useState } from "react";
import Image from "next/image";

import styles from './Cloudinary.module.css'

function CloudinaryUpload({ onURLChange, defaultImage}) {
    const [imageSelected, setImageSelected] = useState(defaultImage || null);

  function handleUploadSuccess(result) {
    const imageUrl = result.info.secure_url;
    console.log(imageUrl)
    if (onURLChange) {
      onURLChange(imageUrl);
    } else {
      console.warn(
        "Você precisa passar a prop onChange para o formulário de cadastro"
      );
    }
    console.log("Upload bem-sucedido. URL da imagem:", imageUrl);

    setImageSelected(imageUrl);
  }

  return (
    <div className={styles.cloudinary}>
      {imageSelected && (
        <div>
          <label>Imagem Selecionada:</label>
          <Image
            src={imageSelected}
            alt="Imagem Selecionada"
            width="250"
            height="250"
            style={{ borderRadius: "5px" }}
          />
        </div>
      )}
      <CldUploadWidget
        uploadPreset={process.env.localNEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET}
        onSuccess={handleUploadSuccess}
      >
        {({ open }) => {
          function handleOnClick(e) {
            e.preventDefault();
            open();
          }

          return (
            <button className={styles.upload} onClick={handleOnClick}>
              Enviar imagem
            </button>
          );
        }}
      </CldUploadWidget>
    </div>
  );
}

export default CloudinaryUpload