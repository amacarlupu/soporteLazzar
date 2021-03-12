$(".modal").on('hidden.bs.modal', function (e) {
    $(".modal iframe").attr("src", $(".modal iframe").attr("src"));
});