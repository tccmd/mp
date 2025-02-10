// 모달 요소 가져오기
const modal = document.getElementById('my_modal_3');

export default function authorInfo(koDesc, enDesc, hotelNameKo, hotelNameEn, modelAirBnbPictureSrc, modelUniqueUrl) {
    // 이미지, 제목, 설명 설정
    // modal.querySelector('img').src = modelAirBnbPictureSrc;
    // if () {
    //     `https://domein.com/divein/${modelUniqueUrl}/public/title.jpg`;
    // }
    modal.querySelector('img').src = modelAirBnbPictureSrc !== "" ? modelAirBnbPictureSrc : `https://tccmds3.s3.ap-northeast-2.amazonaws.com/public/matterport_model.png`;
    console.log("authorInfo.js, ", modelAirBnbPictureSrc, modal.querySelector('img').src);
    document.getElementById("model-desc-ko").textContent = koDesc;
    document.getElementById("model-desc-en").textContent = enDesc;
    document.getElementById("hotel-name-ko").textContent = hotelNameKo;
    document.getElementById("hotel-name-en").textContent = hotelNameEn;
}