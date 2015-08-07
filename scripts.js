var projects = [
    {
        'title': 'Online Open Houses',
        'endDate': 2015,
        'startDate': 2014,
        'type': 'OOH',
        'client': 'various',
        'role': 'manager',
    },
    {
        'title': 'Energize Eastside',
        'endDate': 2015,
        'startDate': 2013,
        'type': 'website',
        'client': 'Puget Sound Energy',
        'role': 'strategist'
    },
    {
        'title': 'MyTrips',
        'endDate': 2013,
        'startDate': 2013,
        'type': 're-brand',
        'client': 'SDOT',
        'role': 'manager'
    },
    {
        'title': 'Great Basin LCC',
        'endDate': 2015,
        'startDate': 2014,
        'type': 'website',
        'client': 'US Fish and Wildlife Service',
        'role': 'supervisor'
    }
];

function showProjects(filtered) {
    var list = $('#projects');
    list.empty();
    for (var i in filtered) {
        var something = filtered[i];
        $('<li>' + filtered[i] + '</li>').appendTo(list);
    }
}

function all() {
    var results = [];
    for (var i in projects) {
        var project = projects[i];
        results.push(project.title);
    }
    return results;
}
$('#all').on('click', function () {
    showProjects(all());
    $('h3').text('all projects');
});
showProjects(all());

function websites() {
    var results = [];
    for (var i in projects) {
        var project = projects[i];
        if (project.type == 'website') {
            results.push(project.title);
        }
    }
    return results;
}
$('#websites').on('click', function () {
    showProjects(websites());
    $('h3').text('websites');
});

function manager() {
    var results = [];
    for (var i in projects) {
        var project = projects[i];
        if (project.role == 'manager') {
            results.push(project.title);
        }
    }
    return results;
}
$('#manager').on('click', function () {
    showProjects(manager());
    $('h3').text('manager');
});

function multiyear() {
    var results = [];
    for (var i in projects) {
        var multi = projects[i];
        if (multi.endDate - multi.startDate > 1) {
            results.push(multi.title);
        }
    }
    return results;
}
$('#multiyear').on('click', function () {
    showProjects(multiyear());
    $('h3').text('multi-year');
});

function search(query) {
    var results = [];
    for (var i in projects) {
        var project = projects[i];
        if (project.title.toLowerCase().indexOf(query) != -1) {
            results.push(project.title);
        }
    }
    return results;
}
$('#search').on('keyup', function() {
    var query = $('#search').val().toLowerCase();
    showProjects(search(query));
    $('h3').text('Search Results');
});

//function year(query) {
//    var results = [];
//    for (var i in projects) {
//        var project = projects[i];
//        if (project.endDate == year) {
//            results.push(current.title);
//        else (project.startDate == year){
//            results.push(current.title);
//        }
//    }
//    return results;
//}
//$('#year').on('keyup', function() {
//    var query = $('#year').val().toLowerCase();
//    showProjects(search(query));
//    $('h3').text('year');
//});
