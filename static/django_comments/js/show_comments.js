$(document).ready(function () {


});

function get_answer_form(elem) {
    var nodeId = $(elem).attr('data-js-node_id');
    var form = $('form[id=' + nodeId + ']');
    form.toggleClass('dc-hidden_element')
}