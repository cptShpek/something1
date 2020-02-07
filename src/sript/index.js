import { methods } from './showHideMethods';

const app = {
    
    init () {

        const imgArr  = document.getElementsByClassName( 'image' );
        const btnsArr = document.getElementsByClassName( 'showMore' );
        const closeBtn = document.getElementById( 'close' );

        for ( let btn of btnsArr ) {

            btn.addEventListener ( 'click', methods.showInfoTab )

        };

        for ( let img of imgArr ) {

            img.addEventListener( 'mouseover', methods.showInfoButton );

            img.addEventListener( 'mouseout', methods.hideInfoButton );

        };

        closeBtn.addEventListener( 'click', methods.hideInfoTab )

    },

}

app.init();