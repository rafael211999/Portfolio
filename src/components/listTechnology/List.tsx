import React, { useState } from "react";
import "./List.css";
import axios from "axios";

/* var Img1Return: string;
 var Img2Return : string
var Img3Return : string
var Img4Return : string
var Img5Return : string */

async function List() {
  // GetImagem();

  // var [Img1Return, setImg1Return] = useState<string | null>(null);

  // async function GetImagem() {
  //   const url1: string =
  //     "https://cdn.iconscout.com/icon/free/png-256/free-typescript-2336947-1982828.png";
  //   // "https://blog.cronapp.io/wp-content/uploads/2020/09/javascript-1.jpg"

  //   await axios
  //     .get(
  //       url1,

  //       {
  //         headers: {
  //           Accept: "application/jason/",
  //           responseType: "arraybuffer",
  //         },
  //       }
  //     )
  //     .then(async function (response) {
  //       // var logoImg = Buffer.from(response.data, "binary").toString("base64");
  //       // Buffer é uma região de memória física utilizada para armazenar temporariamente os dados enquanto eles estão sendo movidos de um lugar para outro.
  //       //

  //       // setImg1Return(logoImg);

  //       return console.log(Img1Return);
  //     })
  //     .catch((error) => {
  //       console.log(error + "Aqui está meu erro");
  //     });
  // }

  return (
    <div>
      <div>Nome da imagem</div>
      {/* <img src={`data:imagem/jpeg;base64, ${Img1Return}`} alt="Imagem teste" /> */}
    </div>
  );
}

export default List;
