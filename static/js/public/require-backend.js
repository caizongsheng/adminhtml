require.config({
    baseUrl: 'static/js/public',
    paths: {
        'jquery': '../libs/jquery.min',
        'bootstrap': '../libs/bootstrap.min'
    },
    shim: {
        'bootstrap': ['jquery']
    }
});