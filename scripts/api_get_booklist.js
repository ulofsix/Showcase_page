let booklist_API = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQeV1BNTRGQrzj3jmwK-0zD5n5taU8GpS0_kG4HSTH7x7xvrl857EjNkRzi0HTKTITx_w_XRhozltG5/pub?gid=1386077569&single=true&output=csv';
/*獲取booklist */
$.ajax({
    type: 'GET',
    url: booklist_API,
    dataType: 'text',
    error: function (e) {
        alert('An error occurred while processing API calls');
        console.log("API call Failed: ", e);
    },
    success: function (data) {
        /*csv轉換json*/
        var jsonData = $.csv.toObjects(data);
        console.log("jsonData");
        console.log(jsonData);
        /*將 booklist 綁定 */
        booklist.booklist = jsonData;
    } // end: Ajax success API call
}); // end: of Ajax call




let booklist = new Vue({
    el: '#booklist',
    data: {
        booklist: []
    }


});