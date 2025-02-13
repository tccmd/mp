// import generateIconUrl from "./generateIconUrl";
{/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
  <path fill-rule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clip-rule="evenodd" />
</svg> */}

export default function CreateTagContent(sdk, tagData) {

    // console.log("cTC.js-tagData: ", tagData);

    // 아이콘 URL과 라벨을 매핑하는 객체
    const iconUrls = {
        "입구": "icons_fill_lobby_24px",
        "작품": "icons_fill_product3_24px",
        "작품1": "icons_fill_product3_24px",
        "작품2": "icons_fill_product3_24px",
        "작품3": "icons_fill_product3_24px",
        "작품4": "icons_fill_product3_24px",
        "욕실": "icons_fill_wash_24px",
        "샤워실": "icons_fill_signatureshower_24px",
        "침실": "icons_fill_room_24px",
    };

    const labelEn = {
        "입구": "Entrance",
        "작품": "Art",
        "작품1": "Art1",
        "작품2": "Art2",
        "작품3": "Art3",
        "작품4": "Art4",
        "욕실": "Bathroom",
        "샤워실": "Shower Room",
        "침실": "Bedroom",
    }

    // 태그 데이터를 라벨을 기준으로 정렬합니다.
    const sortedTags = Object.entries(tagData).sort(([, labelA], [, labelB]) => {
        // 여기서는 원하는 순서대로 태그를 배치하기 위해 각 라벨의 순서를 미리 정의합니다.
        const order = {
            "입구": 0,
            "작품": 1,
            "작품1": 2,
            "작품2": 3,
            "작품3": 4,
            "작품4": 5,
            "욕실": 6,
            "샤워실": 7,
            "침실": 8,
        };

        // 라벨의 순서에 따라 정렬합니다.
        return order[labelA] - order[labelB];
    });

    // console.log("cTC.js-sortedTags: ", sortedTags);

    // 정렬된 태그 데이터를 기반으로 DOM 요소를 생성합니다.
    sortedTags.forEach(([tagId, tagLabel]) => {
        // const iconUrl = generateIconUrl(iconUrls[tagLabel]); // 해당하는 라벨에 대한 아이콘 URL을 가져옵니다.

        const tabContent = document.querySelectorAll('.tab-content')[1];
        const button = document.createElement("button");
        const span = document.createElement("span");
        const iconContainer = document.createElement("span"); // 아이콘을 감쌀 컨테이너
        // const icon = document.createElement("img");
        const label = document.createElement("span");
        // const labelEnText = labelEn[tagLabel]; // 라벨의 영어 텍스트를 가져옵니다.
        const labelEnText = "sub tag label"

        // SVG 아이콘 추가
        iconContainer.innerHTML = `
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
              <path fill-rule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clip-rule="evenodd" />
          </svg>
        `;
        iconContainer.classList.add("svg-icon"); // 필요 시 스타일 추가 가능

        // icon.src = iconUrl;
        // icon.alt = "Icon";
        // icon.classList.add("custom-icon");

        label.textContent = tagLabel;
        label.classList.add("mx-2");

        // 영어 텍스트에 클래스 추가
        const labelEnSpan = document.createElement("span");
        labelEnSpan.textContent = `${labelEnText}`;
        labelEnSpan.classList.add("label-en");

        button.classList.add("btn");
        button.classList.add("btn-ghost");
        button.classList.add("w-full");
        button.classList.add("justify-start");
        span.classList.add("flex");
        span.classList.add("items-center");
        span.classList.add("overflow-x-auto");
        span.classList.add("whitespace-nowrap");

        button.addEventListener("click", () => {
            // 클릭시 태그 동작
            sdk.Tag.dock(tagId);
            // sdk.Mattertag.navigateToTag(data.id, sdk.Mattertag.Transition.FADEOUT);
        });

        // span.appendChild(icon);
        span.appendChild(iconContainer); // SVG 아이콘 추가
        span.appendChild(label);
        span.appendChild(labelEnSpan); // 영어 텍스트 추가
        button.appendChild(span);

        tabContent.appendChild(button);
    });

}