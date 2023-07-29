

    let btn2=window.document.getElementById("btnAddEmployee");


btn2.addEventListener('click',function(){
    let popupWidth = 800;
        let popupHeight = 700;
        let screenWidth = window.screen.width;
        let screenHeight = window.screen.height;
        let leftPosition = (screenWidth - popupWidth) / 2;
        let topPosition = (screenHeight - popupHeight) / 2;

    // OPEN THE ADD-EMPLOYEE.HTML PAGE WITHIN A POPUP
    window.open('ADD-EMPLOYEE.HTML', 'popup', 'width=' + popupWidth + ' height=' + popupHeight + ' left=' + leftPosition + ' top=' + topPosition);

}
);
