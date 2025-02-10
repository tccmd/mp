import smoothScroll from "./smoothScroll";
import generateIconUrl from "./generateIconUrl";


const reservation = "아트스테이 예약 :: Art Stay Reservation";

const qna = "호스트에게 문의하기 :: Contact the host";
const qnaUrl = "https://open.kakao.com/o/s6qJWBwf";

const instagramId = "";
const instagramUrl = `https://www.instagram.com/${instagramId}`;



export default function CreateInfoContent(modelNameKo, modelAddressKo, modelAddressEn, modelAddressUrl, modelReservationUrl) {

    // 주소
    const address = modelAddressKo + modelAddressEn;
    // 에어비엔비 예약 주소
    const reservationUrl = modelReservationUrl;

    // 인포 컨텐트 시작
    const InfoData = [
        {
            label: "",
            icon: "https://tccmds3.s3.ap-northeast-2.amazonaws.com/tccmd/tccmd-logo-black.png",
            url: "",
        },
        {
            label: address,
            icon: '',
            url: modelAddressUrl,
        },
        {
            label: reservation,
            icon: '',
            url: reservationUrl,
        },
        {
            label: qna,
            icon: '',
            url: qnaUrl,
        },
        {
            label: "@" + instagramId,
            icon: '',
            url: instagramUrl,
        },
    ];

    const tabContent = document.querySelectorAll('.tab-content')[0];

    InfoData.forEach(data => {
        const button = document.createElement("button");
        const span = document.createElement("span");
        // const icon = document.createElement("img");
        let icon;
        const label = document.createElement("span");

        if (data.icon != "") {
            icon = document.createElement("img");
            icon.src = data.icon;
            icon.alt = "Icon";
        } else {
            icon = document.createElement("span");
            icon.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-balloon-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8.48 10.901C11.211 10.227 13 7.837 13 5A5 5 0 0 0 3 5c0 2.837 1.789 5.227 4.52 5.901l-.244.487a.25.25 0 1 0 .448.224l.04-.08c.009.17.024.315.051.45.068.344.208.622.448 1.102l.013.028c.212.422.182.85.05 1.246-.135.402-.366.751-.534 1.003a.25.25 0 0 0 .416.278l.004-.007c.166-.248.431-.646.588-1.115.16-.479.212-1.051-.076-1.629-.258-.515-.365-.732-.419-1.004a2 2 0 0 1-.037-.289l.008.017a.25.25 0 1 0 .448-.224zM4.352 3.356a4 4 0 0 1 3.15-2.325C7.774.997 8 1.224 8 1.5s-.226.496-.498.542c-.95.162-1.749.78-2.173 1.617a.6.6 0 0 1-.52.341c-.346 0-.599-.329-.457-.644"/>
</svg>
            `;
        }

        // icon.classList.add('bi', 'bi-balloon');

        label.textContent = data.label;
        label.classList.add("mx-2");

        button.classList.add("btn");
        button.classList.add("w-full");
        button.classList.add("justify-start");
        span.classList.add("flex");
        span.classList.add("items-center");
        span.classList.add("overflow-x-auto");
        span.classList.add("whitespace-nowrap");

        if (data.label === reservation || data.label === qna || data.label === "@" + instagramId) {
            button.classList.add("btn-neutral");
            button.classList.add("my-0.5");
        } else {
            button.classList.add("btn-ghost");
        }

        // if (data.label === "" || data.label === address) {
        //     icon.classList.add("custom-icon");
        // }

        if (data.url !== "") {
            button.addEventListener("click", () => {
                // gtag 이벤트 생성
                gtag('event', modelNameKo + " " + data.label);

                window.open(data.url, "_blank");
            });
        } else {
            button.classList.add("custom-disabled");
        }

        if (data.label === address || data.label === reservation || data.label === qna) {
            span.addEventListener("mouseenter", () => {
                smoothScroll(span);
            });

            span.addEventListener("mouseleave", () => {
                span.isScrolling = false;
                span.scrollLeft = 0;
            });
        }

        span.appendChild(icon);
        span.appendChild(label);
        button.appendChild(span);

        tabContent.appendChild(button);
    });
}