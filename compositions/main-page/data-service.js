export default function dataService() {
    'ngInject';

    var data = [];
    return {
        getData: function () {
            return data;
        },
        setData: function (info) {
            data.push(info);
        },
    };
}
