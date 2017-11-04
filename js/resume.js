(function (a) {
    a.createModal = function (b) {
        defaults = {
            title: "Welcome to my Resume",
            message: "Welcome to my Resume2",
            closeButton: true,
            scrollable: false
        };
        var b = a.extend({}, defaults, b);
        var c = (b.scrollable === true)
            ? 'style="max-height: 420px;overflow-y: auto;"'
            : "";
        html = '<div class="modal fade" id="myModal">';
        html += '<div class="modal-dialog">';
        html += '<div class="modal-content">';
        html += '<div class="modal-header">';
        html += '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</b' +
                'utton>';
        if (b.title.length > 0) {
            html += '<h4 class="modal-title">' + b.title + "</h4>"
        }
        html += "</div>";
        html += '<div class="modal-body" ' + c + ">";
        html += b.message;
        html += "</div>";
        html += '<div class="modal-footer">';
        if (b.closeButton === true) {

            // ///////////////////////////////////////////////////////////////////// STILL
            // HAVE TO MANAGE TO GET THIS BUTTON TO REDIRECT TO THE LINK THE BUTTON IS NOT
            // WORKING PROPERLY
            // /////////////////////////////////////////////////////////////////////
            html += '<button type="button" class="btn btn-success" href="https://www.visualcv.com/joh' +
                    'nypipe" target="blank">Full Screen</button>'
            html += '<button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>'
        }
        html += "</div>";
        html += "</div>";
        html += "</div>";
        html += "</div>";
        a("body").prepend(html);
        a("#myModal")
            .modal()
            .on("hidden.bs.modal", function () {
                a(this).remove()
            })
    }
})(jQuery);

/*
* Here is how you use it
*/
$(function () {
    $('.view-pdf')
        .on('click', function () {
            var pdf_link = $(this).attr('href');
            // var iframe = '<div class="iframe-container"><iframe
            // src="'+pdf_link+'"></iframe></div>' var iframe = '<object data="'+pdf_link+'"
            // type="application/pdf"><embed src="'+pdf_link+'" type="application/pdf"
            // /></object>'
            var iframe = '<object type="application/pdf" data="' + pdf_link + '" width="100%" height="500">No Support</object>'
            $.createModal({title: 'Welcome to my Resume', message: iframe, closeButton: true, scrollable: false});
            return false;
        });
})