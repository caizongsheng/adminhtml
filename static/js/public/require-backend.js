require.config({
    baseUrl: 'static/js/public',
    paths: {
        'jquery': '../libs/jquery.min',
        'bootstrap': '../libs/bootstrap.min',
        'toastr': '../libs/toastr/toastr',
        'admin': '../libs/admin'
    },
    shim: {
        'bootstrap': ['jquery']
    }
});