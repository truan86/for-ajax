$(document).ready(function () {
    var tasks = [];
    //init tasks

    $.ajax({
        type: "POST",
        url: '/task',
        success: function (data) {
            initTasks(data)
        }
    });

    //add tasks

    $('#add').click(function () {
        var task = $('#task').val();
        $.ajax({
            type: "POST",
            url: '/addtask',
            data: {"taskName": task},
            success: function (data) {
                initTasks(data)
            }
        })
    });
});
// dell task

$('#todolist').on('click', '.dell', function () {
    var id = $(this).attr('id');
    $.ajax({
        type: "POST",
        url: '/delltask',
        data: {"taskid": id},
        success: function (data) {
            initTasks(data)
        }
    })
});

var initTasks = function (data) {
    var tasks = '';
    data.forEach(function (item) {
        console.log(item.task);
        tasks += "<li>" + item.task + "<button class='dell' id=" + item.id + ">dell</button></li>";

    });
    $('#todolist').html(tasks);
};