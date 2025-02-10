// 독 디자인과 독 안의 아이콘

export default async function icon(sdk) {
    sdk.Tag.openTags.subscribe({
        prevState: {
            hovered: null,
            docked: null,
            selected: null,
        },
        onChanged(newState) {
            if (newState.hovered !== this.prevState.hovered) {
                if (newState.hovered) {
                    // console.log(newState.hovered, 'was hovered');
                } else {
                    // console.log(this.prevState.hovered, 'is no longer hovered');
                }
            }
            if (newState.docked !== this.prevState.docked) {
                if (newState.docked) {
                    // currentTag = newState.docked;
                    // console.log(newState.docked, 'was docked');
                } else {
                    // console.log(this.prevState.docked, 'was undocked');
                }
            }
            const [selected = null] = newState.selected;
            if (selected !== this.prevState.selected) {

                if (selected) {
                    var matterportViewer = document.querySelector('matterport-viewer').shadowRoot;
                    var dockHidden = matterportViewer.querySelector('.panels.side-panel-right');

                    var mainPanel = matterportViewer.querySelector('main');
                    mainPanel.classList.add('narrow-layout');
                    setTimeout(() => {
                        if (mainPanel.classList.contains('tool-open')) {
                            mainPanel.classList.add('bottom-panel');
                            mainPanel.classList.add('narrow-layout');
                            mainPanel.classList.remove('side-panel');
                        }
                    }, 50)

                    setTimeout(() => {
                        if (dockHidden.classList.contains('panel-open')) {
                            var badgeIcon = dockHidden.querySelector('.badge .icon');
                            if (badgeIcon.classList.contains('icon-public_people_person-to-door')) {
                                dockHidden.querySelector('.badge .icon-public_people_person-to-door').style.backgroundImage = `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9aeHFWXHfDhJ_xzPneJlEsKVdu-tZ5vGoow&s)`;
                            } // lobby
                            else if (badgeIcon.classList.contains('icon-public_furniture_bed')) {
                                dockHidden.querySelector('.badge .icon-public_furniture_bed').style.backgroundImage = `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9aeHFWXHfDhJ_xzPneJlEsKVdu-tZ5vGoow&s)`;
                            } // bed
                            else if (badgeIcon.classList.contains('icon-public_objects_glass')) {
                                dockHidden.querySelector('.badge .icon-public_objects_glass').style.backgroundImage = `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9aeHFWXHfDhJ_xzPneJlEsKVdu-tZ5vGoow&s)`;
                            } // glass
                            else if (badgeIcon.classList.contains('icon-public_people_children')) {
                                dockHidden.querySelector('.badge .icon-public_people_children').style.backgroundImage = `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9aeHFWXHfDhJ_xzPneJlEsKVdu-tZ5vGoow&s)`;
                            } // bathroom
                            else if (badgeIcon.classList.contains('icon-public_furniture_shower')) {
                                dockHidden.querySelector('.badge .icon-public_furniture_shower').style.backgroundImage = `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9aeHFWXHfDhJ_xzPneJlEsKVdu-tZ5vGoow&s)`;
                            } // shower
                            else if (badgeIcon.classList.contains('icon-public_objects_palette')) {
                                dockHidden.querySelector('.badge .icon-public_objects_palette').style.backgroundImage = `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9aeHFWXHfDhJ_xzPneJlEsKVdu-tZ5vGoow&s)`;
                            } // pallet
                        } else {
                        }
                    }, 100);

                    if(mainPanel.querySelector('.scroller-contents')) {
                        if(mainPanel.querySelector('.text-box-text')) {
                            console.log("text-box-text", mainPanel.querySelector('.text-box-text'));
                            if (mainPanel.querySelector('.text-box-text').textContent === "") {
                                mainPanel.querySelector('.text-box-text').textContent = "This is example text.";
                            }
                        }
                        // console.log("text-box-text", mainPanel.querySelector('.text-box-text'));
                        // var textBoxText = mainPanel.querySelector('.text-box-text');
                        // console.log("textBoxText.textContent", textBoxText.textContent);
                    }

                    // console.log("scroller-contents", mainPanel.querySelector('.scroller-contents'));


                } else {
                    // console.log(this.prevState.selected, 'was deselected');
                }


            }
            // clone and store the new state
            this.prevState = {
                ...newState,
                selected,
            };
        },
    });
}